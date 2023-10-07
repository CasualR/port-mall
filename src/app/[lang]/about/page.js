import React from 'react';
import { getDictionary } from '../../../../getDictionary';

export default async function About({ params }) {
    const lang = await getDictionary(params.lang);

    console.log(params, 'params from about');

    return (
        <>
            <div className="">{lang.about.title}</div>
        </>
    );
};