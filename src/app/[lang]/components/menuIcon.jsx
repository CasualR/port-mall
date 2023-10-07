"use client"

import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'

const MenuIcon = () => {
    const curPathname = usePathname()
    const router = useRouter();

    function addActive() {
        const headerMenu = document.querySelector('.header__menu');
        const menuIcon = document.querySelector('.menu__icon');
        const documentBody = document.body;

        documentBody.classList.toggle('_lock');
        headerMenu.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
    }

    return (
        <div className='header__icons'>
            <a href='#' className='header__location'>
                <Image src='/images/location.svg' alt='' width={17.4} height={19.4} />
            </a>
            <div onClick={addActive} className="menu__icon">
                <span></span>
            </div>
        </div>
    );
};

export default MenuIcon;