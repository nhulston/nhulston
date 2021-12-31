import React from 'react';
import styles from '../styles/Award.module.css';
import Image from "next/image";

const Award = ({placing, prizeName, projectName, image, hackathonOrganization}) => {
    // TODO all alt text
    return (
        <div className={styles.wrapper}>
            <Image className={styles.image} src={image} alt=""/>
            <p className={styles.hackathonName}>{hackathonOrganization}</p>
            <h1 className={styles.placing}>{placing}</h1>
            <h3 className={styles.prizeName}>{prizeName}</h3>
            <h3 className={styles.projectName}>{projectName}</h3>
        </div>
    );
};

export default Award;
