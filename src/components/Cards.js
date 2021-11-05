import { Link } from 'react-router-dom';

import './Cards.css'
import img1 from '../images/cards/facebook.jpg'
import img2 from '../images/cards/gmail.jpg'
import img3 from '../images/cards/twitter.jpg'
import img4 from '../images/cards/amazon.jpg'
import img5 from '../images/cards/android.jpg'
import img6 from '../images/cards/referral.jpg'
import img7 from '../images/cards/voice.png'

const gmail_desc = "You need to use a Gmail account to extend your internet marketing and also expand business coverage and improve. it easy for this, you’re giving Gmail the foremost effective communication and ways. There are many features that boost your communication. once you purchase verified Gmail accounts."
const voice_desc = "We can assist you if you need to purchase older Google voice account in bulk to help your business expand. For a reasonable price, we sell new and vintage Google voice account. If you are looking to buy old Google voice accounts, please read this full-text article all the way through."
const facebook_desc = "Phone number verified accounts accompany extremely reliable security options. Your Facebook page will definitely have many confidential documents that ought to not attend wrong hands. to keep up your data safe confirm to purchase PVA accounts. This is the foremost commonly aroused question. Let me support you to know why actually Facebook marketing is vital for your business profit.";
const twitter_desc = "Verified Twitter accounts memes fully verified account through email and phone number. Our all accounts are fully verified and also secure account. We provide a high-quality PVA Twitter account. We are always ready to provide them so buy now buy verified Twitter accounts.";
const amazon_desc = "Do you want to buy amazon buyer accounts? Buying these can be a great way of generating more business for your company. There are a number of different reasons why it is important that companies invest in this service. We have included some vital information below, which will help you determine if buying an account on Amazon is the right decision for your business.";
const android_desc = "Android app review and google play review look like the same word but have some differences. Android app review will be a different type of meaning. but google app review is simple meaning that means is google play store review. So you will get us different types of app store reviews but our main goal android app reviews.";
const referral_desc = "yes, we are website provide 100% legit real referral sign up using your referral link. we will collect referral from world wide or your targeted country on through our team source and provide best service own your mind. we are mainly focus on our customer satisfaction.";

const facebook_title="Buy Facebook Account";
const voice_title="Buy Google Voice Account";
const gmail_title="Buy Gmail Account";
const twitter_title="Buy Twitter Account";
const app_title="Buy Android Review";
const amazon_title="Buy Amazon Account";
const referral_title="Referral SignUp";



const Cards=()=>{
    return (
        <>
       <div className="card">
           <div className="card-body">
                <img src={img2} className="card_image" alt="" />
                <h2>{gmail_title}</h2>
                <p>{gmail_desc}</p>
           </div>
           <Link to="/Gmail"><button className="card-btn">Buy Account</button></Link>
       </div>

       <div className="card">
           <div className="card-body voice_h2">
                <img src={img7} className="card_image" alt="" />
                <h2 className="voice_h2">{voice_title}</h2>
                <p>{voice_desc}</p>
           </div>
           <Link to="/Gmail"><button className="card-btn">Buy Account</button></Link>
       </div>

          <div className="card">
           <div className="card-body">
                <img src={img1} className="card_image" alt="" />
                <h2>{facebook_title}</h2>
                <p>{facebook_desc}</p>
           </div>
           <Link to="/Buyfacebook"><button className="card-btn">Buy Account</button></Link>
       </div>

         <div className="card">
           <div className="card-body">
                <img src={img3} className="card_image" alt="" />
                <h2>{twitter_title}</h2>
                <p>{twitter_desc}</p>
           </div>
           <Link to="/Buytwitter"><button className="card-btn">Buy Account</button></Link>
       </div>

        <div className="card">
           <div className="card-body">
                <img src={img4} className="card_image" alt="" />
                <h2>{amazon_title}</h2>
                <p>{amazon_desc}</p>
           </div>
           <Link to="/Amazon"><button className="card-btn">Buy Account</button></Link>
       </div>

       <div className="card">
           <div className="card-body">
                <img src={img5} className="card_image" alt="" />
                <h2>{app_title}</h2>
                <p>{android_desc}</p>
           </div>
           <Link to="/Androidapp"><button className="card-btn">Buy Account</button></Link>
       </div>

        <div className="card">
           <div className="card-body referral-body">
                <img src={img6} className="card_image" alt="" />
                <h2>{referral_title}</h2>
                <p>{referral_desc}</p>
           </div>
           <Link to="/referral"><button className="card-btn">Buy Account</button></Link>
       </div>
       </>
    )
}
export default Cards;

