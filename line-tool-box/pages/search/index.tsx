
import SearchContent from './../../src/search/content';
import { Helmet } from 'react-helmet';

export default function Search() {
    return <>
        <Helmet>
            <title>OpenChat PowerSearch</title>
        </Helmet>
        <div className="font-mono font-bold w-[100vw] h-[100vh] bg-gray-800 flex justify-center items-center">
            <div className="min-w-[350px] min-h-[100vh] max-w-[350px] max-h-[100vh] flex flex-col justify-around items-center">
                <SearchContent />
            </div>
        </div>
    </>;
}