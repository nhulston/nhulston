import React from 'react';
import styles from '../styles/Footer.module.css';
import headerStyles from '../styles/Header.module.css';
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
    return (
        <section className={styles.wrapper}>
            <ul className={styles.list}>
                <div className={styles.column}>
                    <h4 className={styles.title}>Call</h4>
                    <a className={styles.contact} href="tel:480-450-7022">480-450-7022</a>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.title}>Email</h4>
                    <a className={styles.contact} href="mailto:nhulston@gatech.edu">
                        nhulston@gatech.edu
                    </a>
                </div>
            </ul>
            <div className={styles.socialsWrapper}>
                <div className={styles.copyrightWrapper}>
                    <p className={styles.copyright}>Made with ♥ by Nick Hulston</p>
                </div>
                <div className={styles.iconsWrapper}>
                    <a href="https://github.com/nhulston" className={headerStyles.socials} target="_blank" rel="noreferrer">
                        <AiFillGithub size="3rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/nhulston/" className={headerStyles.socials} target="_blank" rel="noreferrer">
                        <AiFillLinkedin size="3rem" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Footer;
