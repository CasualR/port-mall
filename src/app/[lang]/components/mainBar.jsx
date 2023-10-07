import React from 'react';
import { getDictionary } from '../../../../getDictionary';
import Image from 'next/image';
const MainBar = async (props) => {
    const lang = await getDictionary(props.passedValue.lang);

    return (
        <>
            <div className="bar">
                <div className="bar__container">
                    <a href="" className="bar__back">
                        <Image src="/images/back.svg" alt='' width={6} height={8}/>
                        {lang.bar.back}
                    </a>
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
                </div>
            </div>
        </>
    );
};

export default MainBar;