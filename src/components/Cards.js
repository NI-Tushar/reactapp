import { Link } from 'react-router-dom';

import './Cards.css'
import img1 from '../images/cards/facebook.jpg'
import img2 from '../images/cards/gmail.jpg'
import img3 from '../images/cards/twitter.jpg'
import img4 from '../images/cards/amazon.jpg'
import img5 from '../images/cards/android.jpg'
import img6 from '../images/cards/referral.jpg'

const all_desc = "You need to use a Gmail account to extend your internet marketing and also expand business coverage and improve. it easy for this, you’re giving Gmail the foremost effective communication and ways. There are many features that boost your communication. once you purchase verified Gmail accounts. you get all services easily using other Google offerings like -blog, youtube, Ad Words, and AdSense. have one account 15 GB Storage you’ll use it other work google drive, google docs, sharing a photograph, video, personal information. so don’t delay Buy verified Gmail Accounts."

const facebook_title="Buy Facebook Account";
const gmail_title="Buy Gmail Account";
const twitter_title="Buy Twitter Account";
const app_title="Buy Android Review";
const amazon_title="Buy Amazon Account";
const referral_title="Buy Amazon Account";



const Cards=()=>{
    return (
        <>
       <div className="card">
           <div className="card-body">
                <img src={img2} className="card_image" alt="" />
                <h2>{gmail_title}</h2>
                <p>{all_desc}</p>
           </div>
           <Link to="/Gmail"><button className="card-btn">Buy Account</button></Link>
       </div>

          <div className="card">
           <div className="card-body">
                <img src={img1} className="card_image" alt="" />
                <h2>{facebook_title}</h2>
                <p>{all_desc}</p>
           </div>
           <Link to="/Buyfacebook"><button className="card-btn">Buy Account</button></Link>
       </div>

         <div className="card">
           <div className="card-body">
                <img src={img3} className="card_image" alt="" />
                <h2>{twitter_title}</h2>
                <p>{all_desc}</p>
           </div>
           <Link to="/Buytwitter"><button className="card-btn">Buy Account</button></Link>
       </div>

        <div className="card">
           <div className="card-body">
                <img src={img4} className="card_image" alt="" />
                <h2>{amazon_title}</h2>
                <p>{all_desc}</p>
           </div>
           <Link to="/Amazon"><button className="card-btn">Buy Account</button></Link>
       </div>

       <div className="card">
           <div className="card-body">
                <img src={img5} className="card_image" alt="" />
                <h2>{app_title}</h2>
                <p>{all_desc}</p>
           </div>
           <Link to="/Androidapp"><button className="card-btn">Buy Account</button></Link>
       </div>

        <div className="card">
           <div className="card-body">
                <img src={img6} className="card_image" alt="" />
                <h2>{referral_title}</h2>
                <p>{all_desc}</p>
           </div>
           <Link to="/referral"><button className="card-btn">Buy Account</button></Link>
       </div>
       </>
    )
}
export default Cards;

