import Footer from '../components/Footer';
import gmailposter from '../images/poster/androidposter.jpg'
import Referralscard  from '../components/referralscard/Referralscard'
import '../navpageCSS/Androidapp.css'

const referral=()=>{
   
    return (
       <>
       <div className="img-poster">
               <div className="blank-1">
               </div>
               <div className="poster">
               </div>
               <div className="blank-2">
               </div>
        </div>

        <div className="about-gmail">
               <div className="blank-1">
               </div>
               <div className="gmail-desc">
                    <h4>Why referral sign up?</h4>
                    <p>referral sign up this is a process of increase your stand up like if you join a contest now you need referral for your stand up or if you need to win this Competition. then you need referrals, so we are ready to help you.</p>
                    <h4>Referral sign up are real?</h4>
                    <p>yes, we are website provide 100% legit real referral sign up using your referral link. we will collect referral from world wide or your targeted country on through our team source and provide best service own your mind. we are mainly focus on our customer satisfaction.</p>
               </div>
               <div className="blank-2">
               </div>
        </div>

        <div className="gmail-price-card-title">
            <div className="blank-1">
               </div>
               <div className="g-price-card-title">
                   <h3>Features and Pricing:</h3>
               </div>
               <div className="blank-2">
            </div>
        </div> 

        <div className="amazon-price-card">
               <div className="blank-1">
               </div>
               <div className="g-price-card">
                <Referralscard />
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
export default referral;
