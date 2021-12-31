import React from 'react';
import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Projects.module.css';
import SectionWrapper from "./SectionWrapper";
import one from '/public/1.png';
import Project from "./Project";

const Projects = () => {
    return (
        <SectionWrapper>
            <div>
                <h1 className={sectionStyles.title}>Projects</h1>
                <h1 className={sectionStyles.subtitle}>All • Work • Startups • Hackathons • Other</h1>
                <div className={styles.projectsWrapper}>
                    <Project name="Example Name" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur, exercitationem molestias neque nostrum, officia quam reprehenderit repudiandae sequi unde vel veniam? Ad fugit illum, impedit minima sint tenetur voluptas? lorem" tools={["React", "Javascript", "Flutter"]} demo="https://google.com" github="https://google.com" img={one}/>
                    <Project name="Example Name" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur, exercitationem molestias neque nostrum, officia quam reprehenderit repudiandae sequi unde vel veniam? Ad fugit illum, impedit minima sint tenetur voluptas? lorem" tools={["React", "Javascript", "Flutter"]} demo="https://google.com" github="https://google.com" img={one}/>
                    <Project name="Example Name" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur, exercitationem molestias neque nostrum, officia quam reprehenderit repudiandae sequi unde vel veniam? Ad fugit illum, impedit minima sint tenetur voluptas? lorem" tools={["React", "Javascript", "Flutter"]} demo="https://google.com" github="https://google.com" img={one}/>
                    <Project name="Example Name" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur, exercitationem molestias neque nostrum, officia quam reprehenderit repudiandae sequi unde vel veniam? Ad fugit illum, impedit minima sint tenetur voluptas? lorem" tools={["React", "Javascript", "Flutter"]} demo="https://google.com" github="https://google.com" img={one}/>
                </div>
                <div className={sectionStyles.divider}  id="technologies"/>
            </div>
        </SectionWrapper>
    );
};

export default Projects;

