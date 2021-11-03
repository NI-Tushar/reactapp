import { Link } from 'react-router-dom';
import facebook from '../images/site-logo/facebook.png'
import gmail from '../images/site-logo/gmail.png'
import skype from '../images/site-logo/skype.png'
import telegram from '../images/site-logo/telegram.png'
import whatsapp from '../images/site-logo/whatsapp.png'

import '../NAVPAGE/Contactcard.css'


const Contactcard=()=>{
    return (
       <>
         <div className="contact-card">
           <div className="contact-card-body">
                <img src={gmail} className="logo-image" alt="" />
                <a href="https://accounts.google.com/">EMAIL : <font>abcdefgh@gmail.com</font></a>
           </div>
           <div className="contact-card-body">
                <img src={whatsapp} className="logo-image" alt="" />
                <a href="https://web.whatsapp.com/">WHATSAPP : <font>+88 01*******08</font></a>
           </div>
           <div className="contact-card-body">
                <img src={facebook} className="fb-image" alt="" />
                <a href="https://accounts.facebook.com/">FACEBOOK: <font>abcdefgh@gmail.com</font></a>
           </div>
           <div className="contact-card-body">
                <img src={skype} className="sk-image" alt="" />
                <a href="https://www.skype.com/en/">SKYPE: <font>abcdefgh@gmail.com</font></a>
           </div>
       </div> 
        </>
    )
}
export default Contactcard;