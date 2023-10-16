"use client"

import React, { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation'
import { i18n } from '../../../../i18n';
import Image from 'next/image';


const ChangeLanguage = (props) => {
    const { locales, defaultLocale } = i18n;
    const myElementRef = useRef(null);
    
    const curPathname = usePathname()
    const router = useRouter();
    
    const handleLanguageChange = (newLanguage) => {
        // Получаем текущий путь URL без языкового параметра (если он существует)
        const currentPath = curPathname.replace(/\/(en|ru|ro)/, '');
        
        // Обновляем путь URL, добавляя новый языковый параметр
        const newPath = `/${newLanguage}${currentPath}`;
        
        // Перенаправляем пользователя на новый путь URL
        router.push(newPath);
    };
    
    useEffect(() => {
        let items = document.querySelectorAll('.select_item');

        function isMatches(el) {
            if (props.passedValue.lang == el.innerText.toLowerCase()) {
                el.classList.add('active');
            }
        }

        items.forEach(el => isMatches(el))
    })

    

    // useEffect(() => {
    function select() {
        let selectHeader = document.querySelector('.select_header');
        let selectItem = document.querySelectorAll('.select_item');

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        const element = myElementRef.current;

        // function selectToggle() {
        element.classList.toggle('is-active');
        // }

        function selectChoose() {
            let text = selectHeader.innerText;
            let select = selectHeader.closest('.select'),
                currentText = select.querySelector('.select_current');
            currentText.innerText = text;
            element.classList.remove('is-active');
        }
    }
    // })


    return (
        <>
            <div className="select_container">
                <div ref={myElementRef} className="select">
                    <div onClick={select} className="select_header">
                        <span className="select_current">{props.passedValue.lang}</span>
                        <div className="select_icon">
                            <img src='/images/Shape.svg' alt='' />

                        </div>
                    </div>
                    <div className="select_body">
                        <div className="select_body_container">
                            {locales.map((item, index) => (
                                <div key={index} onClick={() => handleLanguageChange(item)} className='select_item'>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChangeLanguage;