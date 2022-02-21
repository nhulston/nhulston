import React, {useState} from 'react';
import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Projects.module.css';
import SectionWrapper from "./SectionWrapper";
import ncr from '/public/projects/ncr.png';
import jellySwap from '/public/projects/jellyswap.png';
import groceryGrab from '/public/projects/grocerygrab.png';
import bubbl from '/public/projects/bubbl.png';
import ghostGrub from '/public/projects/ghostgrub.png';
import acDaddy from '/public/projects/acDaddy.png'
import nftHighlights from '/public/projects/nftHighlights.png';
import swipe from '/public/projects/swipe.png';
import nhulston from '/public/projects/nhulston.png';
import chatCore from '/public/projects/chatcore.png';
import wordle from '/public/projects/6wordle.png';
import Project from "./Project";
import Aos from "aos";

const Projects = () => {
    // 0 = all, 1 = mobile, 2 = web, 3 = other
    const [filter, setFilter] = useState(0);

    const setAll = async () => {
        setFilter(0);
        await new Promise(resolve => setTimeout(resolve, 10));
        Aos.refresh();
    };
    const setMobile = async () => {
        setFilter(1);
        await new Promise(resolve => setTimeout(resolve, 10));
        Aos.refresh();
    };
    const setWeb = async () => {
        setFilter(2);
        await new Promise(resolve => setTimeout(resolve, 10));
        Aos.refresh();
    };
    const setOther = async () => {
        setFilter(3);
        await new Promise(resolve => setTimeout(resolve, 10));
        Aos.refresh();
    };

    return (
        <SectionWrapper>
            <div>
                <h1 className={sectionStyles.title}>Projects</h1>
                {filter === 0 && <h1 className={styles.filter}>
                    <span className={styles.selected}>All</span>&nbsp;•&nbsp;
                    <span className={styles.unselected} onClick={setMobile}>Mobile</span>&nbsp;•&nbsp;
                    <span className={styles.unselected} onClick={setWeb}>Web</span>&nbsp;•&nbsp;
                    <span className={styles.unselected} onClick={setOther}>Other</span>
                </h1>}
                {filter === 1 && <h1 className={styles.filter}>
                    <span className={styles.unselected} onClick={setAll}>All</span>&nbsp;•&nbsp;
                    <span className={styles.selected}>Mobile</span>&nbsp;•&nbsp;
                    <span className={styles.unselected} onClick={setWeb}>Web</span>&nbsp;•&nbsp;
                    <span className={styles.unselected} onClick={setOther}>Other</span>
                </h1>}
                {filter === 2 && <h1 className={styles.filter}>
                    <span className={styles.unselected} onClick={setAll}>All</span>&nbsp;•&nbsp;
                    <span className={styles.unselected} onClick={setMobile}>Mobile</span>&nbsp;•&nbsp;
                    <span className={styles.selected}>Web</span>&nbsp;•&nbsp;
                    <span className={styles.unselected} onClick={setOther}>Other</span>
                </h1>}
                {filter === 3 && <h1 className={styles.filter}>
                    <span className={styles.unselected} onClick={setAll}>All</span>&nbsp;•&nbsp;
                    <span className={styles.unselected} onClick={setMobile}>Mobile</span>&nbsp;•&nbsp;
                    <span className={styles.unselected} onClick={setWeb}>Web</span>&nbsp;•&nbsp;
                    <span className={styles.selected}>Other</span>
                </h1>}
                <div className={styles.projectsWrapper}>
                    {(filter === 0 || filter === 2) && <Project name="6Wordle"
                                description="A clone of the popular word game, WORDLE, but with six-letter words instead of five. Built entirely from scratch. Includes mobile and desktop support. You can view the word by checking console with inspect element :)"
                                tools={["React", "NextJS", "JavaScript", "CSS"]} demo="https://6wordle.vercel.app/"
                                github="https://github.com/nhulston/6wordle-ui" img={wordle}/>}
                    {(filter === 0 || filter === 1) && <Project name="NCR Check-In"
                              description="An IOS and Android app for NCR employees to refer restaurants as sales leads. Employees can earn points, achievements, and monetary rewards for successful referrals. Generated 200+ sales leads for NCR POS systems."
                              tools={["Flutter", "GCP", "JavaScript"]} img={ncr}/>}
                    {(filter === 0 || filter === 2) && <Project name="Jelly Swap"
                              description="Building a decentralized crypto exchange on the Cardano blockchain. My roles include front-end dev, smart contract dev, and marketing."
                              tools={["React", "Haskell", "Plutus"]} demo="https://jellyswap.io/"
                              github="https://github.com/jellyswap-io/jellyswap-landing-page" img={jellySwap}/>}
                    {(filter === 0 || filter === 3) && <Project name="ChatCore"
                              description="A chat control plugin for Minecraft servers, written in Java. This plugin is an administrative tool for servers to control and manage their chat, prevent spam, prevent swearing, and more. 300+ downloads and 5+ 5 star reviews."
                              tools={["Java"]} demo="https://www.mc-market.org/resources/13998/"
                              github="https://github.com/nhulston/ChatCore" img={chatCore}/>}
                    {(filter === 0 || filter === 1) && <Project name="Bubbl"
                              description="A noninvasive approach to COVID contact tracing using a hassle-free social networking app that prioritizes private group connections between workers or students."
                              tools={["Android", "Java", "Firebase"]} demo="https://www.youtube.com/watch?v=6LKnVMz8Dgw"
                              github="https://github.com/smithbois/bubbl" img={bubbl}/>}
                    {(filter === 0 || filter === 1) && <Project name="Grocery Grab"
                              description="A mobile app that reduces COVID spread by reducing time spent in store. It improves shopping efficiency by introducing pathfinding, contactless checkout, and augmented reality."
                              tools={["Android", "Java", "AR Core", "Firebase"]}
                              demo="https://devpost.com/software/grocery-grab"
                              github="https://github.com/smithbois/grocery-grab" img={groceryGrab}/>}
                    {(filter === 0 || filter === 1) && <Project name="Ghost Grub"
                              description="A mobile app that lets consumers simultaneously order from multiple restaurants in the same ghost kitchen. This will increase revenue for ghost kitchen restaurants and decrease consumer transaction costs."
                              tools={["Flutter", "GCP", "JavaScript"]} demo="https://youtu.be/l62Z9cnUG2o"
                              img={ghostGrub}/>}
                    {(filter === 0 || filter === 1) && <Project name="AC Daddy"
                              description="A mobile app to remotely control dorm room air conditioning. The device will automatically turn the AC on and off to maintain desired temperature. Users can set a constant temperature or create a schedule."
                              tools={["Android", "Java", "Firebase"]} demo="https://www.youtube.com/watch?v=XQSo6tYZmzI"
                              github="https://github.com/smithbois/ac-daddy" img={acDaddy}/>}
                    {<Project name="NFT Highlights"
                              description="With the Chrome extension, users can quickly upload livestream clips to the Stellar blockchain. Content creators can specify a cost to increase revenue. From there, a user can view and trade their owned clips on our mobile app."
                              tools={["Stellar Blockchain", "Flutter", "React", "Flask"]}
                              demo="https://devpost.com/software/nft-highlights"
                              github="https://github.com/smithbois/NFT-Highlights/" img={nftHighlights}/>}
                    {(filter === 0 || filter === 1) && <Project name="Swipe"
                              description="Swipe lets users discover new, randomly generated stocks and cryptocurrencies. Each asset is presented with a chart, fundamental stats, and relevant news articles. Users can swipe right to save an asset to their watchlist."
                              tools={["Flutter"]} demo="https://devpost.com/software/swipe-tinder-for-stocks-crypto"
                              github="https://github.com/nhulston/swipe" img={swipe}/>}
                    {(filter === 0 || filter === 2) && <Project name="Reactive Portfolio" description="A responsive portfolio website built in React. It includes various effects and annimations to engage the user."
                              tools={["React", "JavaScript"]} github="https://github.com/nhulston/nhulston"
                              img={nhulston}/>}
                    {/*<Project name="" description="" tools={[""]} demo="" github="" img={''}/>*/}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;

