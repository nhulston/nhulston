import React from 'react';
import Link from "next/link";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.mainWrapper}>
            <Link href="/" passHref>
                <a className={styles.name}>Nick Hulston</a>
            </Link>
            <div className={styles.linksWrapper}>
                <li>
                    <Link href="#tech">
                        <a className={styles.link}>Tech</a>
                    </Link>
                </li>
                <li>
                    <Link href="#awards">
                        <a className={styles.link}>Awards</a>
                    </Link>
                </li>
                <li>
                    <Link href="#projects">
                        <a className={styles.link}>Projects</a>
                    </Link>
                </li>
            </div>
            <div className={styles.socialsWrapper}>
                <a href="https://github.com/nhulston" className={styles.socials} target="_blank" rel="noreferrer">
                    <AiFillGithub size="3rem" />
                </a>
                <a href="https://www.linkedin.com/in/nhulston/" className={styles.socials} target="_blank" rel="noreferrer">
                    <AiFillLinkedin size="3rem" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
