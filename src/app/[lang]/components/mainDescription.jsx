import React from 'react';
import { getDictionary } from '../../../../getDictionary';
import DescriptionSwiper from './DescriptionSwiper';


const MainDescription = async (props) => {
    const lang = await getDictionary(props.passedValue.lang);

    return (
        <>
            <div className="description">
                <div className="description__container">
                    <div className="description__paragraph paragraph">
                        <span>{lang.description.paragraph1}</span>
                        <span>{lang.description.paragraph2}</span>
                    </div>
                    <ul className='description__list'>
                        <li>
                            <div className="description__title">{lang.description.title}</div>
                        </li>
                        <li>
                            <div className="description__item">{lang.description.descriptionItem1}</div>
                        </li>
                        <li>
                            <div className="description__item">{lang.description.descriptionItem2}</div>
                        </li>
                        <li>
                            <div className="description__item">{lang.description.descriptionItem3}</div>
                        </li>
                        <li>
                            <div className="description__item">{lang.description.descriptionItem4}</div>
                        </li>
                        <li>
                            <div className="description__item">{lang.description.descriptionItem5}</div>
                        </li>
                    </ul>
                    <DescriptionSwiper />
                    <div className="description__paragraph paragraph">
                        <span>{lang.description.paragraph3}</span>
                        <span>{lang.description.paragraph4}</span>
                    </div>
                    <div className='description-button__container'>
                        <a href="#" className="description-button">{lang.description.button}</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainDescription;