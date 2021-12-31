import React from 'react';
import styles from '../styles/Technology.module.css'

const Technology = ({title, description, icon}) => {
    return (
        <li className={styles.technology}>
            <picture className={styles.picture}>{icon}</picture>
            <div className={styles.contentWrapper}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
        </li>
    );
};

export default Technology;
