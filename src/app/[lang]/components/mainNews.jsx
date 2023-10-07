import React from 'react';
import Image from 'next/image';
import { getDictionary } from '../../../../getDictionary';

const MainNew = async (props) => {
    const lang = await getDictionary(props.passedValue.lang);

    return (
        <>
            <div className="new">
                <div className="new__container">
                    <Image src="/images/main_news_img.png" className='new__img' alt='' width={334} height={334} />
                    <div className="new__info">
                        <a href="" className="bar__back">
                            <Image src="/images/back.svg" alt='' width={6} height={8} />
                            {lang.bar.back}
                        </a>
                        <div className="new__date">12.10.2021 - 12.10.2021</div>
                        <div className="new__title">
                            <ul className="bar__list">
                                <li>
                                    <a href="#" className="bar__link">{lang.bar.link1}</a>
                                </li>
                                <li>
                                    <a href="#" className="bar__link">{lang.bar.link2}</a>
                                </li>
                                <li>
                                    <a href="#" className="bar__link">{lang.bar.link3}</a>
                                </li>
                            </ul>
                            {lang.new.title}</div>
                        <div className="new-share">
                            <div className="new-share__text">{lang.share.title}</div>
                            <ul className="new-share__socials">
                                <li>
                                    <a href="#" className="new-share__social">
                                        <svg className='new-share__svg' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='new-share__circle' width="40" height="40" rx="20" fill="#C6A687" />
                                            <g clipPath="url(#clip0_633_956)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M24.0593 12.7615H16.3648C14.24 12.7615 12.5176 14.4839 12.5176 16.6087V24.3032C12.5176 26.428 14.24 28.1504 16.3648 28.1504H24.0593C26.1841 28.1504 27.9065 26.428 27.9065 24.3032V16.6087C27.9065 14.4839 26.1841 12.7615 24.0593 12.7615ZM20.2382 23.3773C18.6392 23.3773 17.343 22.0811 17.343 20.4821C17.343 18.8831 18.6392 17.5869 20.2382 17.5869C21.8372 17.5869 23.1335 18.8831 23.1335 20.4821C23.1335 22.0811 21.8372 23.3773 20.2382 23.3773ZM24.384 17.5869C25.1835 17.5869 25.8316 16.9388 25.8316 16.1393C25.8316 15.3398 25.1835 14.6916 24.384 14.6916C23.5845 14.6916 22.9364 15.3398 22.9364 16.1393C22.9364 16.9388 23.5845 17.5869 24.384 17.5869Z" fill="#1E1E21" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_633_956">
                                                    <rect width="17.3714" height="17.3714" fill="white" transform="translate(11.3145 11.3142)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="new-share__social">
                                        <svg className='new-share__svg' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='new-share__circle' width="40" height="40" rx="20" fill="#C6A687" />
                                            <g clip-path="url(#clip0_633_959)">
                                                <path d="M23.5505 18.7935L22.9699 21.2062H20.9433C20.7034 21.2062 20.509 21.4006 20.509 21.6404V27.7687H18.2191V21.6404C18.2191 21.4006 18.0247 21.2062 17.7848 21.2062H15.8503V18.7935H17.7848C18.0247 18.7935 18.2191 18.599 18.2191 18.3592V15.8982C18.2191 14.9204 18.5932 13.9857 19.2541 13.2991C19.9144 12.6131 20.8065 12.2309 21.7329 12.2309H23.6674V14.6436H21.7329C21.4028 14.6436 21.0898 14.78 20.8617 15.017C20.6341 15.2534 20.509 15.5707 20.509 15.8982V18.3592C20.509 18.599 20.7034 18.7935 20.9433 18.7935H23.5505Z" fill="#1E1E21" stroke="#1E1E21" stroke-width="0.868571" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_633_959">
                                                    <rect width="17.3714" height="17.3714" fill="white" transform="translate(11.3145 11.3142)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="new-share__social">
                                        <svg className='new-share__svg' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='new-share__circle' width="40" height="40" rx="20" fill="#C6A687" />
                                            <path d="M26.9963 15.7452L26.9974 19.0947C25.8321 19.1648 24.4527 18.8088 23.4529 18.1572L23.4494 22.6422C23.4716 24.3288 22.9492 25.9934 21.6701 27.0949C20.8621 27.791 19.8256 28.1853 18.6497 28.2024C15.1728 28.2518 12.8869 25.1285 13.625 21.6822C14.2791 18.632 16.6151 17.1789 19.5627 17.6653C19.5627 18.8624 19.5644 20.0589 19.5644 21.2555C18.3809 21.0738 17.057 21.1342 16.8378 22.6922C16.6792 23.8192 17.3135 24.7299 18.4497 24.7481C19.8127 24.7707 20.2418 23.6991 20.2418 22.4867V11.7966L23.4564 11.8137C23.4651 14.3402 24.6194 15.5977 26.9963 15.7452Z" fill="#1E1E21" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainNew;