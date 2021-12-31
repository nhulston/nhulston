import React from 'react';
import sectionStyles from "../styles/Section.module.css";

const SectionWrapper = ({children}) => {
    return (
        <section className={sectionStyles.wrapper}>
            {children}
        </section>
    );
};

export default SectionWrapper;
