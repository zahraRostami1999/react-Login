import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <>
        <div className="flex justify-center">
            <ul className="flex justify-between py-5 sm:w-11/12 md:w-1/2 lg:w-1/4">
                <Link to="/">Register</Link>
                <Link to="/cat-facts">Cat Fact</Link>
                <Link to="/test-cookie">Test Cookie</Link>
            </ul>
        </div>
        </>
    )
}

export default Header;