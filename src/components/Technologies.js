import React from 'react';
import SectionWrapper from "./SectionWrapper";
import styles from "../styles/Technologies.module.css"
import sectionStyles from "../styles/Section.module.css";
import Technology from "./Technology";
import {FiSmartphone} from "react-icons/fi";
import {SiReact, SiFigma, SiEthereum} from "react-icons/si";

const Technologies = () => {
    let size = "2.5rem";
    let icons = [
        <FiSmartphone key={0} size={size}/>,
        <SiReact key={1} size={size}/>,
        <SiEthereum key={2} size={size}/>,
        <SiFigma key={3} size={size}/>,
    ]

    return (
        <SectionWrapper>
            <div>
                <div className={styles.visibleOnLarge}>
                    <h1 className={sectionStyles.title}>Technologies</h1>
                </div>
                <div className={styles.visibleOnSmall}>
                    <h1 className={sectionStyles.title}>Tech</h1>
                </div>
                <h3 className={sectionStyles.text}>
                    I love creating new things. That&apos;s why I work with a wide variety of technologies, and I always strive to learn more.
                </h3>
                <ul className={styles.list}>
                    <Technology title="Mobile" description={`Experience with\nFlutter and Android`} icon={icons[0]}/>
                    <Technology title="Web" description={`Experience with\nReact.js and CSS`} icon={icons[1]}/>
                    <Technology title="Blockchain" description={`Ethereum, Solana, and\nCardano smart contracts`} icon={icons[2]}/>
                    <Technology title="UI/UX" description={`Design tools such as Figma,\nPhotoshop, and Illustrator`} icon={icons[3]}/>
                </ul>
            </div>
            <div className={sectionStyles.divider} id="awards"/>
        </SectionWrapper>
    );
};

export default Technologies;
