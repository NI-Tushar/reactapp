import Footer from '../components/Footer';

import Contactcard from '../NAVPAGE/Contactcard'
import './Contactcard.css'
import Paymentmsg from './Paymentmsg.js'

const Contact=()=>{
   
    return (
       <>

       <div className="img-poster">
               <div className="blank-1">
               </div>
               <div className="poster">
                   <h4>We are ready to help you 24×7 hours, you can join any of the following messengers:</h4>
               </div>
               <div className="blank-2">
               </div>
        </div>

        <div className="contact-poster">
               <div className="blank-1">
               </div>
               <div className="contact">
                      <Contactcard />
               </div>
               <div className="blank-2">
               </div>
        </div>

        <div className="gmail-price-card">
               <div className="blank-1">
               </div>
               <div className="g-price-card payment-box">
                     <Paymentmsg />
               </div>
               <div className="blank-2">
               </div>
        </div> 

        <div className="footer">
               <div className="blank-1">
               </div>
               <div className="footer-bar">
                     <Footer />
               </div>
               <div className="blank-2">
               </div>
        </div> 
        </>
    )
}
export default Contact;
