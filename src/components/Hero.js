import React from 'react';
import styles from '../styles/Hero.module.css';
import sectionStyles from '../styles/Section.module.css';
import BackgroundAnimation from "./BackgroundAnimation";
import openAnimation from "../styles/OpenAnimation.module.css";

const Hero = () => {
    return (
        <div className={sectionStyles.overrideWrapper}>
            <div className={styles.mainWrapper}>
                <div className={openAnimation.name}>
                    <h2 className={sectionStyles.title}>
                        Nick Hulston
                    </h2>
                </div>
                <div className={openAnimation.subtitle}>
                    <h3 className={sectionStyles.subtitle}>
                        Developer<span className={styles.hideOnSmallScreen}> • </span><br className={styles.hideOnBigScreen}/>Entrepreneur • Creator
                    </h3>
                </div>
                <div className={openAnimation.bio}>
                    <p className={sectionStyles.text}>
                        Welcome to my personal website! I am a <span className={sectionStyles.emphasizedText}>computer science</span> student at <span className={sectionStyles.emphasizedText}>Georgia Tech</span>. My passions are mobile, web, and blockchain development.
                    </p>
                </div>
                <div className={openAnimation.buttonFade}>
                    <div className={styles.buttonWrapper}>
                        <a
                            href="/pdf/Nicholas-Hulston-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className={styles.button} >
                                View Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className={openAnimation.backgroundAnimation}>
                <BackgroundAnimation/>
            </div>
            <div className={openAnimation.divider}>
                <div className={sectionStyles.divider} id="tech"/>
            </div>
        </div>
    );
};

export default Hero;
