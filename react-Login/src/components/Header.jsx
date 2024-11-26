import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <>
        <div>
            <ul className="flex w-48 justify-between mx-5 py-5">
                <Link to="/">Register</Link>
                <Link to="/cat-facts">Cat Fact</Link>
            </ul>
        </div>
        </>
    )
}

export default Header;