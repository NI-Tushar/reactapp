import Footer from '../components/Footer';
import '../Homepage.css'
import '../navpageCSS/Gmail.css'
import gmailposter from '../images/poster/gmailposter.jpg'
import Gmailcard from '../components/gmail-price-card/GPriceCard'
import Gmailbulkcard from '../components/gmail-price-card/Gmailbulkcard';


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

         <div className="gmail-bulk">
               <div className="blank-1">
               </div>
               <div className="gmail-bulk-1">
                    <h4>Buy Gmail accounts in bulk</h4>
                    <p>If you want to grow your business in the Internet basis market, definitely there is no excuse you will need Gmail accounts in bulk. When you think you want to reach your business mass people that time you need bulk Gmail accounts. In the present world, google is the internet giant and Gmail is only google mail. Now think if you have bulk Gmail accounts just imagine what you can do with those. you will get around 30+ free google services and products with one Gmail account.</p>
                    <h4 className="gmail-bulk-2">Buy Gmail Accounts Instant delivery</h4>
                    <p className="gmail-bulk-2-desc">We are trying to provide instant delivery after the complete payment process. we have always a huge quantity. but if sometimes we got many bulk orders a day we are taking 24 hours maximum. our team always working for you. so we are always focusing on our product quality and delivery speed and also our customer satisfaction. our customers are happy we are glad. so don’t delay to buy. So buy now and get instant delivery.</p>
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

        <div className="gmail-bulk-card">
               <div className="blank-1">
               </div>
               <div className="g-bulk-card">
                <Gmailbulkcard />
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

