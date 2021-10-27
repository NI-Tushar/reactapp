import Footer from '../components/Footer';
import '../Homepage.css'
import '../navpageCSS/Gmail.css'
import gmailposter from '../images/poster/gmailposter.jpg'
import Gmailcard from '../components/gmail-price-card/GPriceCard'


const Gmail=()=>{
    return (
        <>
       <div className="img-poster">
               <div className="blank-1">
               </div>
               <div className="poster">
                    <div>
                        <img src={gmailposter} className="gmail-poster" alt="" />
                    </div>
                    <h2>Buy Gmail Accounts instant delivery at affordable prices</h2>
                    <div className="poster-desc">
                        <h3>Gmail Accounts Features</h3>
                        <ul>
                            <li>New And Fresh Account</li>
                            <li>Phone Number Varified</li>
                            <li>Recovery Email Added</li>
                            <li>Instant Delivery</li>
                        </ul>
                    </div>
               </div>
               <div className="blank-2">
               </div>
        </div>

        <div className="about-gmail">
               <div className="blank-1">
               </div>
               <div className="gmail-desc">
                    <h4>What is the Gmail Accounts ?</h4>
                    <p>Gmail is the email account with an email address. It’s launched in 2004 and provides 15GB of Storage for any Gmail account. Gmail is the only mail service in the world that email servers are very fast and secure. Every Gmail account has a specific username and that username called an email address.</p>

                    <h4 className="gmail-benifit">The Benefit of the Gmail Accounts</h4>
                    <p className="gmail-benifit-p">In the present world having a Gmail accounts is necessary the main reason is not only it helps you communicate with your friends, colleagues, and businesses but it also helps you surf any web registration in blogs to comment, subscribe to newsletters, and shop on the internet. and you will get many more facilities with Gmail Account.</p>
               </div>
               <div className="blank-2">
               </div>
        </div>

        <div className="gmail-price-card-title">
            <div className="blank-1">
               </div>
               <div className="g-price-card-title">
                   <h3>Gmail Accounts Features And pricing</h3>
               </div>
               <div className="blank-2">
            </div>
        </div> 

        <div className="gmail-price-card">
               <div className="blank-1">
               </div>
               <div className="g-price-card">
                <Gmailcard />
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
export default Gmail;

