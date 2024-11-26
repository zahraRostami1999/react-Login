import {setCookie} from '../utils/helpers/cookie';

const TestCookiePage = () => {
    const createCookie = ()=>{
        setCookie('xyz', {
            name: "zahra",
            access_token: "vsmnvsznvlndv",
            refresh_token: "asmnwszdvnndb",
        });
    }

    createCookie()
    return ( 
        <>
        <h1>
            This Test Cookie Page
        </h1>
        </>
     );
}
 
export default TestCookiePage;