import React, {useState} from "react";
import emailjs from 'emailjs-com'
import './Paymentmsg.css'
import img1 from '../images/pay-card-logo/paypal.png'
import img2 from '../images/pay-card-logo/mastarcard.png'
import img3 from '../images/pay-card-logo/bitcoin.png'


const Paymentmsg=()=>{
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_1q7skt6', 'template_2d1l6xx',e.target, 'user_NJwqvIzePootzqcL05d4v').then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }

    const [model, setModel] =useState(false);
    const toggleModel = () =>{
        setModel(!model)
    }
    return (
        <>

        {model &&(
            <div className="model">
            <div className="overlay"></div>
            <div className="model-content">
                <h2>Message Sent</h2>
                <button className='close-model' onClick={toggleModel}>CLOSE</button>
            </div>
        </div>
        )}

        

        <div className="desc">
            <h4>We accept:-  Paypal, Payoneer,  transfer wise, US bank transfer, Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Bitcoin Cash (BCH), Binance Coin (BNB), and more 10+ cryptocurrency.</h4>
        </div>
        <div className="pay-card">
            <div className="pay-card-element">
                <form className="email-form" onSubmit={sendEmail}>
                 <h5>
                 Your Name (Required)
                </h5>
                <input className="name-input" name="cust-name" type="text" placeholder="Your Name"/>
                <h5>
                 Your Email (Required)
                </h5>
                <input className="email-input" name="user_email" type="text" placeholder="Your Email Address"/>
                <h5>
                 Subject
                </h5>
                <input className="subject-input" type="text" />
                <h5>
                 Your Message
                </h5>
                <textarea name="cust-msg" className="message" id="" cols="20" rows="5" placeholder="Your Message"></textarea>
                <h5>
                 Payment Method
                </h5>
                <select className="Payment-card" >
                        <option value="paypal">Paypal</option>
                        <option value="visa">Visa</option>
                        <option value="pioneer">Pioneer</option>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="mastercard">Master Card</option>
                </select>
            <button onClick={toggleModel} className="send-btn" type="submit" id="submit">Send</button>
            </form>
            </div>
        </div>
       </>
    )
}
export default Paymentmsg;

