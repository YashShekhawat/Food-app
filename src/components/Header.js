import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex ">
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center justify-end w-screen mx-10">
                <ul className='flex'>
                    <li className="mx-8">Status: {onlineStatus ? "🟢Online" : "🔴Offline"}</li>
                    <Link><li className="mx-8">Home</li></Link>
                    <Link to="/about"><li className="mx-8">About</li></Link>
                    <Link to="/contact"><li className="mx-8">Contact Us</li></Link>
                </ul>
                {
                    isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Login</button> : <button onClick={() => setIsLoggedIn(true)}>Logout</button>
                }
            </div>
        </div>
    );
};

export default Header;