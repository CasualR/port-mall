"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const DescriptionSwiper = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={8}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                speed={1000}

                breakpoints={{
                    320: {
                        spaceBetween: 8,
                    },
                    768: {
                        spaceBetween: 16,
                    },
                    956: {
                        spaceBetween: 25,
                    }
                }}
            >
                <SwiperSlide>
                    <Image src="/images/description_swiper_1.png" alt='' width={335} height={208} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/description_swiper_2.png" alt='' width={335} height={208} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/description_swiper_3.png" alt='' width={335} height={208} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/description_swiper_1.png" alt='' width={335} height={208} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/description_swiper_2.png" alt='' width={335} height={208} />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default DescriptionSwiper;