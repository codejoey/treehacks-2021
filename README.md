## See our live demo!

**On Rinkeby testnet blockchain (recommended):** [https://rinkeby.kelas.dev](https://rinkeby.kelas.dev)

**On xDAI blockchain (Warning: uses real money):** [https://xdai.kelas.dev](https://xdai.kelas.dev)

##Check out StoryMaps here!
** Greenery in your Community:** [https://arcg.is/1vu448](https://arcg.is/1vu448)

**Culture & Diversity in choosing your Home:** [https://arcg.is/DH511](https://arcg.is/DH511)

## Inspiration

BlockFund's mission is to build a platform to empower communities with tools and data.

How we do so, BlockFund:

-   Democratises community funds through blockchain and voting technology.
-   Highlights the need for environment sustainability projects through a narrative in an ArcGIS StoryMap with image processing and deep learning to identify the foliage of the smallest trees .
-   Aids residents and migrants in looking for home that fits their cultural and diversity needs through a narrative in an ArcGIS StoryMap

**Democratises community funds through blockchain and voting technology**
In the US, Homeowner Associations (HOA) are the main medium in which residents members pay community upkeep fees to maintain grounds, master insurance, community utilities, as well as overall community finances. Financial Transparency varies between HOAs, but often they only reflect past fund usage and the choices of a few representative members. We sought a solution that democratises the funding of projects process – allowing residents to contribute and vote for projects that **actually matter** to them. It's easy for community minorities to go unheard, so our voting system helps to account for that. We adjust and increase the voting weight of residents who's vote has not funded a successful project after a few attempts – thus mitigating their lack of representation.

**Highlights the need for environment sustainability projects #TeamTreesMini**
Additionally, we empower communities to engage in green urban planning. Climate change is an increasingly prevalent topic, and we believe illustrating the dangers in your backyard is an excellent way to encourage local action. Our solution maps the green coverage in your neighbourhood. Then, we empower the community in proposing projects to fund tree planting in each home and in common areas.

**Your home, why Cultural Fit and Diversity matters**
After a community profile is made, we also assist new members in choosing a community aligned with their cultural interests. When one of our Asian members moved to a largely white neighbourhood, he faced some racism growing up. Home seekers already take demographics into consideration, and our solution empowers urban planning for community planners, and aids home seekers in making a more informed decision from a cultural perspective. We map diversity index scores, demographic data (generational and race), and the religious institutions and ammenities – aiding new home seekers in choosing their home.

The proverb "Birds of a feather flock together" describes how those of similar taste congregate in groups. However, in our world today, the importance of diversity and exposing oneself to different opinions and people is crucial to thrive in the workforce.

> Diversity is having a seat at the table. Inclusion is having a voice. And belonging is having that voice be heard. - Liz Fosslien

BlockFund believes that more than just price or transport convenience – diversity, belonging, and inclusion are key concepts in choosing a place to live.

BlockFund is a decentralised autonomous organisation (DAO), that pools community funds, engage the community, and allow transparent voting for projects.

## How we built it

We built and deployed the Decentralized Autonomous Organisation (DAO) smartcontract on two EVM-based blockchain: Rinkeby (Testnet) and xDAI.

We use AlchemyAPI as a node endpoint for our Rinkeby deployment for better data availability and consistency, while our xDAI deployment uses POA's official community node.

We deployed a React.js frontend for quick delivery of our application, leveraging Axios to asynchronously communicate with external libraries, OpenAPI to provide an intuitive Q&A feature promoting universal proposal comprehension, and Ant.Design/Sal for a modern, sleek, and animated user interface.

We use ethers.js to perform communication blockchain nodes, and it supports two main cryptocurrency wallets:

-   Burner wallet (our homebrew in-browser wallet made for easy user onboarding)
-   Metamask (a popular web3-enabled wallet for those who wants better security)

On top of that, our Community Learning Kits are made using ESRI ArcGIS storyboards for highly visual storytelling of geographic data.

Last but not least, we use Hardhat for smartcontract deployment automation.

## Challenges we ran into

Our main challenge was in integrating ArcGIS API's in limited timeframe. As it was a new technology for us, we really had to crunch our brainpower.

On top of that, deploying a fully working website for other people to try takes a lot of effort to make sure that all of the integrations are also working beyond localhost.

## Accomplishments that we're proud of

-   We have a live website!
-   We launched to two different blockchains: xDAI and Rinkeby.
-   React state management!

## What we learned

-   We learned that working remotely with colleagues from 4 different timezones is challenging.
-   Good React state management practices will safe a lot of time.

## What's next for BlockFund

-   Explore ways how we can work with local communities to deploy this.
-   Run more DAO experiments in smaller scope (family, small neighborhood, etc)
