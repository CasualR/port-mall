
import Image from 'next/image'
import { getDictionary } from '../../../getDictionary';
import { useRouter } from 'next/navigation';
import MainBar from './components/mainBar';
import MainNew from './components/mainNews';
import MainDescription from './components/mainDescription';
import MainEvent from './components/mainEvent';
import MainVideo from './components/mainVideo';
import MainSales from './components/mainSales';

export default async function Home({ params }) {

    console.log(params, 'from page');

    return (
        <>
            <main className="main">
                <MainBar passedValue={params} />
                <MainNew passedValue={params} />
                <div className="content">
                    <MainDescription passedValue={params} />
                    <MainEvent passedValue={params}/>
                    <MainVideo passedValue={params}/>
                </div>
                <MainSales passedValue={params}/>
            </main>
        </>
    )
}
