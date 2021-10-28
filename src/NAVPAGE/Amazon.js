import Footer from '../components/Footer';
import gmailposter from '../images/poster/amazon-poster.jpg'
import Amazoncard from '../components/amazon-card/Amazoncard'
import '../navpageCSS/Amazon.css'

const Amazon=()=>{
   
    return (
       <>
           <>
       <div className="img-poster">
               <div className="blank-1">
               </div>
               <div className="poster">
                    <div>
                        <img src={gmailposter} className="gmail-poster" alt="" />
                    </div>
                    <h2>Buy Amazon Accounts at cheap prices</h2>
                    <div className="poster-desc">
                        <h3>Buy Amazon Accounts</h3>
                        <ul>
                            <li>Email and phone number verified account</li>
                            <li>Account Country: USA, UK, AUS</li>
                            <li>Created by Real IP</li>
                            <li>Email and amazon both access will be given</li>
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
                    <h4>Buy Amazon Accounts</h4>
                    <p>Buying Amazon accounts is a huge moneymaker. You can buy an account from someone who wants to sell theirs, or you can make your own in some cases. There are many ways to get legitimate buyers of your products and services on Amazon – like with Buy Sell Ads, for example, but if you want more quick sales without all the work, consider buying Amazon accounts.
                        It’s not hard to do, and it won’t cost you a fortune either – just be sure that the account is legit before you buy!</p>
                    <h4 className="gmail-benifit">Why do you need to buy Amazon Account?</h4>
                    <p className="gmail-benifit-p">Many people would like to buy an Amazon account. The most common reason is that they want more than one person can use the same account at once, which means it should be a separate account for each individual with limited access to other accounts. This can be done by simply buying an Amazon Account from someone else and logging in as needed.
                        Another important thing about this type of service is that you don’t need any login credentials (e-mail address or password) when starting your new session on the Web site -just log in to your Amazon account email address and passwords.
                        The vendor balance is more expensive, but you will be able to use it immediately. If you buy an individual account with good standing, then they are going to have access and rights for their products that many of the sellers wouldn’t necessarily get from doing just one transaction.</p>
               </div>
               <div className="blank-2">
               </div>
        </div>

        <div className="gmail-price-card-title">
            <div className="blank-1">
               </div>
               <div className="g-price-card-title">
                   <h3>Amazon Accounts Prices</h3>
               </div>
               <div className="blank-2">
            </div>
        </div> 

        <div className="amazon-price-card">
               <div className="blank-1">
               </div>
               <div className="g-price-card">
                <Amazoncard />
               </div>
               <div className="blank-2">
               </div>
        </div> 

         <div className="gmail-bulk">
               <div className="blank-1">
               </div>
               <div className="gmail-bulk-1">
                    <h4>Buy bulk amazon accounts</h4>
                    <p>amazon accounts for sale in bulk at the best prices. 
                        we are focus on selling bulk amazon accounts. but you can buy a single account, contact us to buy now.
                        Delivery time is 24 hours; we do offer a free 100% guarantee on our Services! We provide you with peace of mind and security because your account will be safe from being limited or suspended by the seller.</p>
                    <h4 className="gmail-bulk-2">Best place to buy amazon accounts:</h4>
                    <p>>Buy Amazon Accounts from here!<br/>>Phone and email verified account
                    <br/>>Fast delivery and responsive customer service team
                    <br/>>cheap rate and High-quality account
                    <br/>>we will provide a 3days replacement guarantee for any issues
                    <br/><br/>Buy Amazon accounts today to get the best deals available on amazon account sellers.
                    </p>
            
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
       </>
    )
}
export default Amazon;
