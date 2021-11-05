
import btc from '../images/pay-card-logo/bitcoin.png'
import paypal from '../images/pay-card-logo/paypal.png'
import visa from '../images/pay-card-logo/visa.png'
import pioneer from '../images/pay-card-logo/pioneer.png'
import mastarcard from '../images/pay-card-logo/mastarcard.png'

import './Footer.css';
const Footer=()=>{
    return (
        <>
       <div className="footer-section">
            <div className="footer-body">
                <h2>About Us</h2>
                <p>USAservice seller Email And social media reselling company. We have 1000+ experience staffs. we will grow your business together. we are focus on our customer’s satisfaction. We are happy if our customers are happy with our service. we are available 24/7 Hours.</p>
            </div>    
       </div>

        <div className="footer-section">
            <div className="footer-body">
                <h2>Payment Method</h2>
                <ul className="pay-card-ul1">
                    <li><img src={paypal} className="pay-card-img" alt="" /></li>
                    <li><img src={visa} className="pay-card-img" alt="" /></li>
                </ul>
                <ul className="pay-card-ul2">
                    <li><img src={pioneer} className="pay-card-img" alt="" /></li>
                    <li><img src={btc} className="btc" alt="" /></li>
                    <li><img src={mastarcard} className="pay-card-img" alt="" /></li>
                </ul>
            </div>    
       </div>

       <div className="footer-section">
            <div className="footer-body">
                <h2>Contact Us</h2>
                <ul className="contact-ul">
                    <li><a href="https://web.whatsapp.com/">Whatsapp: +88 017******08</a></li>
                    <li><a href="https://accounts.google.com/">Gmail: usaservice@gmail.com</a></li>
                    <li><a href="https://accounts.facebook.com/">Facebook: www.facebook.com</a></li>
                    <li><a href="https://www.skype.com/en/">Skype: usaservice@gmail.com</a></li>
                </ul>               
            </div>    
       </div>

       </>
    )
}
export default Footer;
