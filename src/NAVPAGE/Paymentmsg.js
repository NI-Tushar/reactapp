
import './Paymentmsg.css'
import img1 from '../images/pay-card-logo/paypal.png'
import img2 from '../images/pay-card-logo/mastarcard.png'
import img3 from '../images/pay-card-logo/bitcoin.png'

const Paymentmsg=()=>{
    return (
        <>
        <div className="desc">
            <h4>We accept:-  Paypal, Payoneer,  transfer wise, US bank transfer, Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Bitcoin Cash (BCH), Binance Coin (BNB), and more 10+ cryptocurrency.</h4>
        </div>
        <div className="pay-card">
            <div className="pay-card-element">
                 <h5>
                 Your Name (Required)
                </h5>
                <input className="name-input" type="text" />
                <h5>
                 Your Email (Required)
                </h5>
                <input className="email-input" type="text" />
                <h5>
                 Subject
                </h5>
                <input className="subject-input" type="text" />
                <h5>
                 Your Message
                </h5>
                <textarea className="message" id="" cols="20" rows="5"></textarea>
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
            <button className="send-btn">Send</button>
            </div>
        </div>
       </>
    )
}
export default Paymentmsg;

