import React from 'react';
import styles from '../styles/Award.module.css';
import Image from "next/image";

const Award = ({image, hackathonOrganization, date, placing, prizeName, projectName}) => {
    // TODO all alt text
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <Image className={styles.image} src={image} alt="" draggable="false"/>
            </div>
            <p className={styles.hackathonOrganization}>{hackathonOrganization}</p>
            <p className={styles.date}>{date}</p>
            <p className={styles.placing}>{placing}</p>
            <p className={styles.prizeName}>{prizeName}</p>
            <p className={styles.projectName}>{projectName}</p>
        </div>
    );
};

export default Award;
