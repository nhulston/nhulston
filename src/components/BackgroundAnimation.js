import React from 'react';
import backgroundAnimation from "../styles/BackgroundAnimation.module.css";

const BackgroundAnimation = () => {
    return (
        <div className={backgroundAnimation.wrapper}>
            <div className={backgroundAnimation.circle}/>
            <div className={backgroundAnimation.circle}/>
            <div className={backgroundAnimation.circle}/>
            <div className={backgroundAnimation.circle}/>
            <div className={backgroundAnimation.circle}/>
            <div className={backgroundAnimation.circle}/>
        </div>
    );
};

export default BackgroundAnimation;
