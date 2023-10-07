import React from 'react';
import { getDictionary } from '../../../../getDictionary';
import Image from 'next/image';

const MainEvent = async (props) => {
    const lang = await getDictionary(props.passedValue.lang);

    return (
        <>
            <div className="event">
                <div className="event__container">
                    <div className="event__title">{lang.event.title}</div>
                    <div className='event__images'>
                        <Image src="/images/event_img_1.png" className='event__img' alt='' width={335} height={208} />
                        <Image src="/images/event_img_2.png" className='event__img' alt='' width={335} height={208} />
                    </div>
                    <div className="paragraph">
                        <span>{lang.event.paragraph1}</span>
                        <span>{lang.event.paragraph2}</span>
                        <span>{lang.event.paragraph3}</span>
                    </div>
                    <div className="event-quote">
                        <div className="event-quote__lines">
                            <div className="event-quote__line"></div>
                            <div className="event-quote__line"></div>
                            <div className="event-quote__line"></div>
                        </div>
                        <div className='event-quote__container'>
                            <div className="event-quote__text">{lang.event.quote}</div>
                            <div className="event-quote__author">{lang.event.quoteAuthor}</div>
                        </div>
                    </div>
                    <div className="event__title">{lang.event.title}</div>
                    <div className="paragraph">
                        <span>{lang.event.paragraph1}</span>
                        <span>{lang.event.paragraph2}</span>
                        <span>{lang.event.paragraph3}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainEvent;