pragma solidity 0.7.4;
//SPDX-License-Identifier: MIT

import "./Ownable.sol";
import "./SafeMath.sol";
import "./ABDKMath64x64.sol";

contract BlockFundDAO is Ownable {
    using SafeMath for uint256;

    event ProposalCreated(
        uint256 proposalId,
        string title,
        uint256 requestedFund,
        address sponsor
    );
    event ProposalFinalized(
        uint256 proposalId,
        string title,
        uint256 requestedFund,
        address sponsor,
        Status status
    );
    event ProposalVoted(uint256 proposalId, uint256 vote, uint256 voteWeight);

    enum Status {APPROVED, STALE, DECLINED, PENDING}

    uint256 public constant DEFAULT_VOTE_WEIGHT = 100;
    uint256 public constant MAX_VOTE_WEIGHT = 400;
    uint256 public constant VOTING_PERIOD = 604800; // unix timestamp
    uint256 public constant MEMBER_DUES_MINIMUM = 50000000000000000000;

    struct Proposal {
        uint256 timestamp;
        Status status;
        address sponsor;
        string title;
        string description;
        string coverImg;
        uint256 requestedFund;
        uint256 yesVote;
        uint256 noVote;
        address[] yesVoters;
        address[] noVoters;
        string[] workingDocs;
    }

    mapping(address => bool) public isMember;
    mapping(uint256 => Proposal) public proposals;
    mapping(address => uint256) public memberVoteWeight;
    mapping(address => address[]) public nominations;

    uint256 public proposalCount;
    address[] public members;

    fallback() external payable {}

    receive() external payable {}

    constructor(
        address initiator1,
        address initiator2,
        address initiator3
    ) public {
        require(msg.sender != initiator1, "BlockFund: duplicate initiator");
        require(msg.sender != initiator2, "BlockFund: duplicate initiator");
        require(msg.sender != initiator3, "BlockFund: duplicate initiator");
        require(initiator1 != initiator2, "BlockFund: duplicate initiator");
        require(initiator1 != initiator3, "BlockFund: duplicate initiator");
        require(initiator2 != initiator3, "BlockFund: duplicate initiator");

        isMember[msg.sender] = true;
        isMember[initiator1] = true;
        isMember[initiator2] = true;
        isMember[initiator3] = true;

        memberVoteWeight[msg.sender] = DEFAULT_VOTE_WEIGHT;
        memberVoteWeight[initiator1] = DEFAULT_VOTE_WEIGHT;
        memberVoteWeight[initiator2] = DEFAULT_VOTE_WEIGHT;
        memberVoteWeight[initiator3] = DEFAULT_VOTE_WEIGHT;

        members.push(msg.sender);
        members.push(initiator1);
        members.push(initiator2);
        members.push(initiator3);
    }

    modifier onlyMember {
        require(isMember[msg.sender], "BlockFund: user not member");
        _;
    }

    function isNominator(address nominee) public view returns (bool) {
        for (uint256 i = 0; i < nominations[nominee].length; i++) {
            if (nominations[nominee][i] == msg.sender) {
                return true;
            }
        }

        return false;
    }

    function isVoter(uint256 proposalId, address voter)
        public
        view
        returns (bool)
    {
        for (uint256 i = 0; i < proposals[proposalId].yesVoters.length; i++) {
            if (proposals[proposalId].yesVoters[i] == voter) {
                return true;
            }
        }

        for (uint256 i = 0; i < proposals[proposalId].noVoters.length; i++) {
            if (proposals[proposalId].noVoters[i] == voter) {
                return true;
            }
        }

        return false;
    }

    function proposalVoters(uint256 proposalId, uint256 vote)
        public
        view
        returns (address[] memory)
    {
        if (vote == 1) {
            return proposals[proposalId].yesVoters;
        } else {
            return proposals[proposalId].noVoters;
        }
    }

    function nominateMember(address nominee) public onlyMember {
        require(!isMember[nominee], "BlockFund: nominee already a member");
        require(
            nominations[nominee].length < 3,
            "BlockFund: address already have 3 nomination"
        );
        require(
            !isNominator(nominee),
            "BlockFund: You already nominated the nominee"
        );
        nominations[nominee].push(msg.sender);
    }

    function joinMember() public payable {
        require(!isMember[msg.sender], "BlockFund: already a member");
        require(
            nominations[msg.sender].length == 3,
            "BlockFund: msg.sender have not received 3 nominations"
        );
        require(
            msg.value >= MEMBER_DUES_MINIMUM,
            "BlockFund: msg.value less than member dues minimum"
        );
        isMember[msg.sender] = true;
        members.push(msg.sender);
        memberVoteWeight[msg.sender] = DEFAULT_VOTE_WEIGHT;
    }

    function removeMember(address oldMember) public onlyOwner {
        isMember[oldMember] = false;
        memberVoteWeight[oldMember] = 0;
    }

    function createProposal(
        string memory title,
        string memory description,
        string memory coverImg,
        uint256 requestedFund
    ) public onlyMember {
        Proposal memory proposal;
        proposal.timestamp = block.timestamp;
        proposal.status = Status.PENDING;
        proposal.sponsor = msg.sender;
        proposal.title = title;
        proposal.description = description;
        proposal.coverImg = coverImg;
        proposal.requestedFund = requestedFund;
        proposal.yesVote = 0;
        proposal.noVote = 0;

        proposals[proposalCount] = proposal;

        emit ProposalCreated(proposalCount, title, requestedFund, msg.sender);

        proposalCount++;
    }

    // vote = 1 -> yesVote
    // vote = 0 -> noVote
    function voteProposal(uint256 proposalId, uint256 vote) public onlyMember {
        require(
            !isVoter(proposalId, msg.sender),
            "BlockFund: you already voted"
        );
        require(
            vote == 0 || vote == 1,
            "BlockFund: vote can only be yes or no"
        );
        require(
            proposalId < proposalCount,
            "BlockFund: proposal does not exist"
        );
        require(
            proposals[proposalId].timestamp + VOTING_PERIOD > block.timestamp,
            "BlockFund: proposal no longer taking vote"
        );

        if (vote == 1) {
            proposals[proposalId].yesVote = proposals[proposalId].yesVote.add(
                memberVoteWeight[msg.sender]
            );
            proposals[proposalId].yesVoters.push(msg.sender);
        } else if (vote == 0) {
            proposals[proposalId].noVote = proposals[proposalId].noVote.add(
                memberVoteWeight[msg.sender]
            );
            proposals[proposalId].noVoters.push(msg.sender);
        }

        emit ProposalVoted(proposalId, vote, memberVoteWeight[msg.sender]);
    }

    function finalizeProposal(uint256 proposalId) public onlyMember {
        require(
            proposalId < proposalCount,
            "BlockFund: proposal does not exist"
        );
        require(
            proposals[proposalId].status == Status.PENDING,
            "BlockFund: proposal already finalized"
        );
        require(
            proposals[proposalId].timestamp + VOTING_PERIOD <= block.timestamp,
            "BlockFund: proposal voting period is not closed yet"
        );

        if (proposals[proposalId].yesVote > proposals[proposalId].noVote) {
            require(
                proposals[proposalId].requestedFund <= address(this).balance
            );
            proposals[proposalId].status = Status.APPROVED;

            // contrarian boosting for no voters
            // this is actually insecure as it will run out of gas if there's too much voters
            // but we'll stay with this in the meantime.
            for (
                uint256 i = 0;
                i < proposals[proposalId].noVoters.length;
                i++
            ) {
                memberVoteWeight[
                    proposals[proposalId].noVoters[i]
                ] = contrarianBoosting(
                    memberVoteWeight[proposals[proposalId].noVoters[i]],
                    proposals[proposalId].yesVote,
                    proposals[proposalId].noVote
                );
            }
        } else if (
            proposals[proposalId].yesVote == proposals[proposalId].noVote
        ) {
            proposals[proposalId].status = Status.STALE;
        } else {
            proposals[proposalId].status = Status.DECLINED;

            // contrarian boosting for yes voters
            // this is actually insecure as it will run out of gas if there's too much voters
            // but we'll stay with this in the meantime.
            for (
                uint256 i = 0;
                i < proposals[proposalId].yesVoters.length;
                i++
            ) {
                memberVoteWeight[
                    proposals[proposalId].yesVoters[i]
                ] = contrarianBoosting(
                    memberVoteWeight[proposals[proposalId].yesVoters[i]],
                    proposals[proposalId].noVote,
                    proposals[proposalId].yesVote
                );
            }
        }

        emit ProposalFinalized(
            proposalId,
            proposals[proposalId].title,
            proposals[proposalId].requestedFund,
            proposals[proposalId].sponsor,
            proposals[proposalId].status
        );
    }

    function contrarianBoosting(
        uint256 initialWeight,
        uint256 majVote,
        uint256 minVote
    ) public pure returns (uint256) {
        // calculate vote diff ratio and return as fixed point integer (fixed point claculation on blockchain goes brr...)
        int128 voteDiffRatio =
            ABDKMath64x64.sub(ABDKMath64x64.divu(majVote, minVote), 1);

        // caps voteDiffRatio multiplier to 3 to deincentivize intentional contrarianism
        if (voteDiffRatio > ABDKMath64x64.fromUInt(3)) {
            voteDiffRatio = ABDKMath64x64.fromUInt(3);
        }

        // multiply base boost with vote diff ratio, convert back to UInt (rounded down)
        uint256 voteBoost =
            ABDKMath64x64.toUInt(
                ABDKMath64x64.mul(ABDKMath64x64.fromUInt(100), voteDiffRatio)
            );

        // check if boosted weight is below or equal to max vote weight
        if (initialWeight.add(voteBoost) > MAX_VOTE_WEIGHT) {
            return MAX_VOTE_WEIGHT;
        } else {
            return initialWeight.add(voteBoost);
        }
    }
}
