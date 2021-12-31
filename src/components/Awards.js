import React from 'react';
import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Awards.module.css';
import SectionWrapper from "./SectionWrapper";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Award from "./Award";
import vercel from "/public/vercel.svg";

const Awards = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <SectionWrapper>
            <h1 className={sectionStyles.title}>Awards</h1>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true} //TODO false for mobile
                autoPlaySpeed={1000}
                keyBoardControl={false}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                itemClass="carousel-item-padding-40-px"
            >
                <Award placing="1st Place Overall" prizeName="HackGT 7" projectName="Grocery Grab" image={vercel} hackathonOrganization="HackGT"/>
            </Carousel>
        </SectionWrapper>
    );
};

export default Awards;
