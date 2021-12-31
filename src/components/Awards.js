import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay, EffectCoverflow, EffectCreative, EffectCube, EffectFlip, Pagination} from 'swiper';
import 'swiper/css/pagination';

import sectionStyles from '../styles/Section.module.css';
import styles from '../styles/Awards.module.css';

import SectionWrapper from "./SectionWrapper";
import Award from "./Award";

import hackGT from "/public/hackathons/hackgt.jpeg";
import invention from "/public/hackathons/invention.png";
import georgiaTech from "/public/hackathons/georgiatech.png";
import ncr from "/public/hackathons/ncr.png";
import pinnacle from "/public/hackathons/pinnacle.png";

const Awards = () => {
    SwiperCore.use([Autoplay]);

    const slides = [
        <SwiperSlide key={0}>
            <Award image={hackGT} hackathonOrganization="HackGT" date="Oct 2020" placing="1st Place" prizeName="HackGT 7 Overall Prize" projectName="Grocery Grab" />
        </SwiperSlide>,
        <SwiperSlide key={1}>
            <Award image={invention} hackathonOrganization="Invention Studio" date="Sep 2020" placing="2nd Place" prizeName="IoT Hackathon Overall Prize" projectName="AC Daddy" />
        </SwiperSlide>,
        <SwiperSlide key={2}>
            <Award image={georgiaTech} hackathonOrganization="GT / Emory" date="Jan 2021" placing="Top 10 Finalist" prizeName="Hack COVID Overall Prize" projectName="Bubbl" />
        </SwiperSlide>,
        <SwiperSlide key={3}>
            <Award image={ncr} hackathonOrganization="NCR" date="July 2021" placing="Top 30 Finalist" prizeName="NCR Global Hackathon" projectName="Ghost Grub" />
        </SwiperSlide>,
        <SwiperSlide key={4}>
            <Award image={pinnacle} hackathonOrganization="Pinnacle" date="Sep 2021" placing="3rd Place" prizeName="Stellar Sponsor Prize" projectName="NFT Highlights" />
        </SwiperSlide>,
    ];

    const responsive = {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        360: {
            slidesPerView: 1,
            spaceBetween: -50,
        },
        460: {
            slidesPerView: 2,
            spaceBetween: 270,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 200,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1050: {
            slidesPerView: 3,
            spaceBetween: -50,
        },
    };

    return (
        <SectionWrapper>
            <h1 className={sectionStyles.title}>Awards</h1>
            <div className={styles.swiperWrapper}>
                <Swiper
                    modules={[Pagination]}
                    id="main"
                    breakpoints={responsive}
                    grabCursor={true}
                    autoplay={{delay: 5000}}
                    pagination={{"dynamicBullets": true, clickable: true}}
                    centeredSlides={true}
                >
                    {slides}
                </Swiper>
            </div>
        </SectionWrapper>
    );
};

export default Awards;
