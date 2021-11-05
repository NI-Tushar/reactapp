import './Headerbar.css';

import logo from '../images/logo.PNG';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Headerbar=()=>{
    const [clicked, setClicked] = useState(false);
    const handleClick=() =>{
        setClicked(!clicked);
    };
    return (
        <div className="headerbar fixed-top">
            <div className="blank1"></div>
            <div className="logobar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="headitem">
            <ul className="headlinks">
                <a className="contact-1" href="https://web.whatsapp.com/">+88 017*******8</a>
                <Link to="/Contact"><a className="contact-2" href="">usaservice@gmail.com</a></Link>
                {/* <li><a href="#">Login</a></li>
                <li><a href="#">SignUp</a></li> */}
            </ul>
            </div>
            <div className="blank2"></div>
            <div className="blank3"></div>
            <div className="midbar">
                
            </div>
            <div className="blank4"></div>
            <div className="blank5"></div>
            <div className="navigatbar">
                <div className="logoname">
                    <font>usa</font>service
                </div>
                <div className="menu-icon" onClick={handleClick}>
                        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <div className={clicked ? "navitem" : "navitem close"}>
                        <ul>
                            <li><Link to="/Homepage"><a>Home</a></Link></li>
                            <li><Link to="/Gmail"><a>Buy Gmail Account</a></Link></li>
                            <li><Link to="/Voice"><a>Buy Google Voice Account</a></Link></li>
                            <li><Link to="/Amazon"><a>Buy Amazon Account</a></Link></li>
                            <li className='social'><Link to="/Buyfacebook"><a>Social Media Account</a></Link>
                                <div className="submenu-1">
                                    <ul>
                                        <li><Link to="/Buyfacebook"><a>Facebook Accounts</a></Link></li>
                                        <li><Link to="/Buytwitter"><a>Twitter Accounts</a></Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="service"><Link to="/Androidapp"><a>Service</a></Link>
                                <div className="submenu-2">
                                    <ul>
                                        <li><Link to="/Androidapp"><a>Android App Review</a></Link></li>
                                        <li><Link to="/referral"><a>Referral SignUp</a></Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="/About"><a>About Us</a></Link></li>
                            <li><Link to="/Contact"><a>Contact Us</a></Link></li>
                        </ul> 
                </div> 
            </div>
                 
            <div className="blank6"></div>
        </div>
    )
}
export default Headerbar;


