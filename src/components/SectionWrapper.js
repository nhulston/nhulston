import React from 'react';
import sectionStyles from "../styles/Section.module.css";

const SectionWrapper = ({children}) => {
    return (
        <div className={sectionStyles.wrapper}>
            {children}
        </div>
    );
};

export default SectionWrapper;
