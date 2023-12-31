import React from 'react';
import Image from 'next/image';
import { getDictionary } from '../../../../getDictionary';
import SalesSwiper from './SalesSwiper';

const MainSales = async (props) => {
    const lang = await getDictionary(props.passedValue.lang);
    
    return (
        <>
            <div className="sales">
                <div className="sales__container">
                    <div className="sales__header">
                        <div className="sales__title">{lang.sales.title}</div>
                        <a href="#" className="sales-button">
                            <div className='svg__container'>
                                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 15C0 11 4.34483 5 14 5C23.6552 5 28 11 28 15C28 20 23.6552 25 14 25C4.34483 25 0 20 0 15ZM14.0009 6.5C8.69053 6.5 4.3457 10.2 4.3457 15C4.3457 19.8 8.69053 23.5 14.0009 23.5C19.3112 23.5 23.656 19.8 23.656 15C23.656 10.2 19.3112 6.5 14.0009 6.5Z" fill="#C6A687" />
                                    <path className='sales-button__path' d="M13.7677 3C13.7003 3.69512 13.6397 4.35976 13.5859 4.99391C13.5456 5.35509 13.4489 6.19368 13.3838 6.65854C12.9798 9.69512 12.3535 12.0366 11 14.8171C12.2929 17.6341 12.9596 19.9024 13.404 23.3598C13.4351 23.6129 13.5148 24.2967 13.5859 25.0061C13.6532 25.628 13.7138 26.2927 13.7677 27H14.2525C14.2929 26.2927 14.3468 25.628 14.4141 25.0061C14.4887 24.211 14.5664 23.5772 14.596 23.3598C15.0404 19.9024 15.7071 17.6341 17 14.8171C15.6465 12.0366 15.0202 9.69512 14.6162 6.67682C14.5576 6.25874 14.4571 5.38068 14.4141 4.99391C14.3603 4.35976 14.3064 3.69512 14.2525 3H13.7677Z" fill="#C6A687" />
                                </svg>
                            </div>
                            <span className="sales-button__text">{lang.sales.button}</span>
                        </a>
                    </div>
                    <SalesSwiper passedValue={lang}/>
                </div>
            </div>
        </>
    );
};

export default MainSales;