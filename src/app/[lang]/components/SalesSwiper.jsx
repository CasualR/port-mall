"use client"

import React from 'react';
import { getDictionary } from '../../../../getDictionary';

import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const SalesSwiper = (props) => {
    const lang = props.passedValue;

    return (
        <>
            <div className='swiper__container'>
                <Swiper
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    speed={500}
    
                    breakpoints={{
                        320: {
                            spaceBetween: 8,
                        },
                        768: {
                            spaceBetween: 16,
                        },
                        956: {
                            spaceBetween: 24,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className='slide__container'>
                            <Image src="/images/sales_swiper_img_1.png" className="slide__img" alt='' width={402} height={402} />
                            <div className="slide__info">
                                <div className="slide__tag">
                                    <Image src="/images/sales_tag_1.svg" alt='' width={16} height={16}/>
                                    <span>{lang.sales.tag1}</span>
                                </div>
                                <div className="slide__title">{lang.sales.slideTitle1}</div>
                                <div className="slide__date">30.06.2023 - 30.07.2023</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide__container'>
                            <Image src="/images/sales_swiper_img_2.png" className="slide__img" alt='' width={402} height={402} />
                            <div className="slide__info">
                                <div className="slide__tag">
                                    <Image src="/images/sales_tag_2.svg" alt='' width={16} height={16}/>
                                    <span>{lang.sales.tag2}</span>
                                </div>
                                <div className="slide__title">{lang.sales.slideTitle2}</div>
                                <div className="slide__date">30.06.2023 - 30.07.2023</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide__container'>
                            <Image src="/images/sales_swiper_img_3.png" className="slide__img" alt='' width={402} height={402} />
                            <div className="slide__info">
                                <div className="slide__tag">
                                    <Image src="/images/sales_tag_3.svg" alt='' width={16} height={16}/>
                                    <span>{lang.sales.tag3}</span>
                                </div>
                                <div className="slide__title">{lang.sales.slideTitle1}</div>
                                <div className="slide__date">30.07.2023</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide__container'>
                            <Image src="/images/sales_swiper_img_1.png" className="slide__img" alt='' width={402} height={402} />
                            <div className="slide__info">
                                <div className="slide__tag">
                                    <Image src="/images/sales_tag_3.svg" alt='' width={16} height={16}/>
                                    <span>{lang.sales.tag1}</span>
                                </div>
                                <div className="slide__title">{lang.sales.slideTitle1}</div>
                                <div className="slide__date">30.06.2023 - 30.07.2023</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide__container'>
                            <Image src="/images/sales_swiper_img_2.png" className="slide__img" alt='' width={402} height={402} />
                            <div className="slide__info">
                                <div className="slide__tag">
                                    <Image src="/images/sales_tag_3.svg" alt='' width={16} height={16}/>
                                    <span>{lang.sales.tag2}</span>
                                </div>
                                <div className="slide__title">{lang.sales.slideTitle1}</div>
                                <div className="slide__date">30.06.2023 - 30.07.2023</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide__container'>
                            <Image src="/images/sales_swiper_img_3.png" className="slide__img" alt='' width={402} height={402} />
                            <div className="slide__info">
                                <div className="slide__tag">
                                    <Image src="/images/sales_tag_3.svg" alt='' width={16} height={16}/>
                                    <span>{lang.sales.tag3}</span>
                                </div>
                                <div className="slide__title">{lang.sales.slideTitle1}</div>
                                <div className="slide__date">30.07.2023</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default SalesSwiper;