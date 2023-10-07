import './scss/globals.scss'
// import { Inter } from 'next/font/google'
import ChangeLanguage from './components/changeLanguage';
import Image from 'next/image';
import Header from './components/Header';
import { getDictionary } from '../../../getDictionary';
import Footer from './components/footer';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Port Mall',
    description: 'Mall',
}

export default function RootLayout({ children, params }) {

    return (
        <html lang={params.lang}>
            <body>
                <div className='wrapper'>
                    <Header passedValue={params} />
                    {children}
                    <Footer passedValue={params}/>
                </div>
            </body>
        </html>
    )
}
