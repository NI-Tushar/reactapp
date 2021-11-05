import Footer from '../components/Footer';
import './Voice.css';
import voiceposter from '../images/poster/voice.JPG'
import logo from '../images/logo.PNG';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Voice=()=>{
    
    return (
        <>
        <div className="img-poster">
               <div className="blank-1">
               </div>
               <div className="poster">
                    <div>
                        <img src={voiceposter} className="gmail-poster" alt="" />
                    </div>
                    <h2>Buy Google Voice Accounts instant delivery at affortable prices</h2>
                    <div className="poster-desc">
                        <h3>Google Voice Accounts Features</h3>
                        <ul>
                            <li>From Unique IP</li>
                            <li>Fresh Account</li>
                            <li>Phone Varified</li>
                            <li>Recovery Added</li>
                            <li>24 Hours Delivery</li>
                        </ul>
                    </div>
               </div>
               <div className="blank-2">
               </div>

               <div className="blank-1">
               </div>
               <div className="gmail-desc">
                    <h4>Buy Google Voice Accounts & Numbers | Google Voice For Sale</h4>
                    <p>If you are looking to buy google voice accounts or Numbers, then you are in the right spot. We have 100% manually created, and phone verified google
                        voice accounts for sale. You will be able to use our google voice numbers for business communication. You can make calls and recieve calls from all of the phones
                        by using our google voice number service. If you own a GoogleVoice number, you can use a free phone numbers for calls, voicemail & message. We provide the best quality
                        service with 100% customer satisfaction. Each of our accounts from unique IPs. All accounts profile is a complete profile with pictures and information.
                        If you buy google voice number or accounts from us, you will get the best service.
                    </p>
               </div>
               <div className="blank-2">
               </div>

               {/* ___________________________________________________________________ CARDS */}
               <div className="blank-1">
               </div>
               <div className="v-price-card">

                    <div className="price-cardv">
           <div className="v-card-body b-one">
               <div className="bronzes">
                   <h5>5 Google Voice Accounts</h5>
               </div>
                <div className="vprice1">
                    <h1>$10<h6>Guaranteed</h6></h1>
                </div>
                <div className="card-ul">
                   
                        <div className="ones"><a>From Unique IP</a></div>
                        <div className="twos"><a>Phone Verified</a></div>
                        <div className="threes"><a>24 Hours Delivery</a></div>
                        <div className="fours"><a>Revision</a></div>
                        <div className="fives"><a>Recovery Added</a></div>
                        <div className="sixs"><a>Fresh Account</a></div>
                       
                    
             <Link to="/Contact"><button className="v-card-btn1"><h5>Contact Now</h5></button></Link>            
                </div>
           </div>

           <div className="g-card-body b-two">
               <div className="silvers">
                    <h5>10 Goggle Voice Accounts</h5>
               </div>
                <div className="vprice2">
                    <h1>$20<h6>Guaranteed</h6></h1>
                </div>
                <div className="vcard-ul">
                        <div className="ones"><a>From Unique IP</a></div>
                        <div className="twos"><a>Phone Verified</a></div>
                        <div className="threes"><a>24 Hours Delivery</a></div>
                        <div className="fours"><a>Revision</a></div>
                        <div className="fives"><a>Recovery Added</a></div>
                        <div className="sixs"><a>Fresh Account</a></div>
             <Link to="/Contact"><button className="v-card-btn2"><h5>Contact Now</h5></button></Link>            
                </div>
           </div>

           <div className="g-card-body b-three">
               <div className="golds">
                    <h5>30 Google Voice Accounts</h5>
               </div>
                <div className="vprice3">
                    <h1>$55<h6>Guaranteed</h6></h1>
                </div>
                <div className="vcard-ul">
                        <div className="ones"><a>From Unique IP</a></div>
                        <div className="twos"><a>Phone Verified</a></div>
                        <div className="threes"><a>24 Hours Delivery</a></div>
                        <div className="fours"><a>Revision</a></div>
                        <div className="fives"><a>Recovery Added</a></div>
                        <div className="sixs"><a>Fresh Account</a></div>
             <Link to="/Contact"><button className="v-card-btn3"><h5>Contact Now</h5></button></Link>         
                </div>
           </div>

            <div className="g-card-body b-four">
               <div className="platinums">
                    <h5>50 Google Voice Accounts</h5>
               </div>
                <div className="vprice4">
                   <h1>$90<h6>Guaranteed</h6></h1>
                </div>
                <div className="vcard-ul">
                        <div className="ones"><a>From Unique IP</a></div>
                        <div className="twos"><a>Phone Verified</a></div>
                        <div className="threes"><a>24 Hours Delivery</a></div>
                        <div className="fours"><a>Revision</a></div>
                        <div className="fives"><a>Recovery Added</a></div>
                        <div className="sixs"><a>Fresh Account</a></div>  
             <Link to="/Contact"><button className="v-card-btn4"><h5>Contact Now</h5></button></Link>                 
                </div>
           </div>

           <div className="g-card-body b-four">
               <div className="platinums">
                    <h5>100 Google Voice Accounts</h5>
               </div>
                <div className="vprice4">
                   <h1>$160<h6>Guaranteed</h6></h1>
                </div>
                <div className="vcard-ul">
                       <div className="ones"><a>From Unique IP</a></div>
                        <div className="twos"><a>Phone Verified</a></div>
                        <div className="threes"><a>24 Hours Delivery</a></div>
                        <div className="fours"><a>Revision</a></div>
                        <div className="fives"><a>Recovery Added</a></div>
                        <div className="sixs"><a>Fresh Account</a></div>   
             <Link to="/Contact"><button className="v-card-btn4"><h5>Contact Now</h5></button></Link>                 
                </div>
           </div>
       </div>

               </div>
               <div className="blank-2">
               </div>
        </div>
           {/* ________________________________________________________________________________ */}
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
export default Voice;
