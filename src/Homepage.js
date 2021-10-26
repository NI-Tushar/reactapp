import React, {useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import Slider from './components/Slider'
import Cards from './components/Cards'
import Footer from './components/Footer'

import './Homepage.css';


import img1 from './images/cards/facebook.jpg'
import img2 from './images/cards/gmail.jpg'
import img3 from './images/cards/twitter.jpg'
import img4 from './images/cards/amazon.jpg'
import img5 from './images/cards/android.jpg'
import img6 from './images/cards/referral.jpg'


const Homepage=()=>{
    const facebook_title="Buy Facebook Account";
    const gmail_title="Buy Gmail Account";
    const twitter_title="Buy Twitter Account";
    const app_title="Buy Android Review";
    const amazon_title="Buy Amazon Account";
    const referral_title="Buy Amazon Account";
    // const all_desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
    const all_desc = "You need to use a Gmail account to extend your internet marketing and also expand business coverage and improve. it easy for this, you’re giving Gmail the foremost effective communication and ways. There are many features that boost your communication. once you purchase verified Gmail accounts. you get all services easily using other Google offerings like -blog, youtube, Ad Words, and AdSense. have one account 15 GB Storage you’ll use it other work google drive, google docs, sharing a photograph, video, personal information. so don’t delay Buy verified Gmail Accounts."
    return (
        <>
           <div className="img-slider">
               <div className="blank-1">
               </div>
               <div className="slide">
                <Slider />
               </div>
               <div className="blank-2">
               </div>
           </div>

           <div className="product-card">
               <div className="blank-1">
               </div>
               <div className="card">
                <Cards img={img1} title={facebook_title} desc={all_desc}/>
                <Cards img={img2} title={gmail_title} desc={all_desc}/>
                <Cards img={img3} title={twitter_title} desc={all_desc}/>
                <Cards img={img4} title={amazon_title} desc={all_desc}/>
                <Cards img={img5} title={app_title} desc={all_desc}/>
                <Cards img={img6} title={referral_title} desc={all_desc}/>
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
export default Homepage;

