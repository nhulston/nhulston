import React from 'react';
import styles from '../styles/Project.module.css';
import Image from 'next/image';

const Project = ({name, description, img, tools, github, demo}) => {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.image} src={img} alt=""/>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>{name}</h3>
                <hr className={styles.hr}/>
            </div>
            <p className={styles.description}>{description}</p>
            <div>
                <ul className={styles.toolsWrapper}>
                    {tools.map((t, i) => {
                        return <li key={i} className={styles.tool}>{t}</li>;
                    })}
                </ul>
            </div>
            <ul className={styles.linksWrapper}>
                <a className={styles.link} href={github} target="_blank" rel="noreferrer">Github</a>
                <a className={styles.link}  href={demo} target="_blank" rel="noreferrer">Demo</a>
            </ul>
        </div>
    );
};

export default Project;
