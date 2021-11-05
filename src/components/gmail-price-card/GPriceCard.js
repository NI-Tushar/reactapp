import './GPriceCard.css'
import { Link } from 'react-router-dom';
const GPriceCard=()=>{
    return (
        <>
       <div className="price-card">
           <div className="g-card-body b-one">
               <div className="bronze">
                   <h3>Bronze</h3>
               </div>
                <div className="price1">
                    <h1>$15</h1>
                </div>
                <div className="card-ul">
                   
                        <div className="one"><a>50 gmail Accounts</a></div>
                        <div className="two"><a>Phone number verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>New and Fresh</a></div>
                        <div className="five"><a>Recovery Email Added</a></div>
                        <div className="six"><a>7 days replacement</a></div>
                        <div className="seven"><a>100% Real Account</a></div>
                        <div className="eight"><a>Instant Delivery</a></div>
                    
             <Link to="/Contact"><button className="g-card-btn1"><h5>Contact Now</h5></button></Link>            
                </div>
           </div>

           <div className="g-card-body b-two">
               <div className="silver">
                    <h3>Silver</h3>
               </div>
                <div className="price2">
                    <h1>$25</h1>
                </div>
                <div className="card-ul">
                        <div className="one"><a>100 gmail Accounts</a></div>
                        <div className="two"><a>Phone number verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>New and Fresh</a></div>
                        <div className="five"><a>Recovery Email Added</a></div>
                        <div className="six"><a>7 days replacement</a></div>
                        <div className="seven"><a>100% Real Account</a></div>
                        <div className="eight"><a>Delivery 1-6 Hours</a></div>
             <Link to="/Contact"><button className="g-card-btn2"><h5>Contact Now</h5></button></Link>            
                </div>
           </div>

           <div className="g-card-body b-three">
               <div className="gold">
                    <h3>Gold</h3>
               </div>
                <div className="price3">
                    <h1>$100</h1>
                </div>
                <div className="card-ul">
                        <div className="one"><a>500 gmail Accounts</a></div>
                        <div className="two"><a>Phone number verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>New and Fresh</a></div>
                        <div className="five"><a>Recovery Email Added</a></div>
                        <div className="six"><a>7 days replacement</a></div>
                        <div className="seven"><a>100% Real Account</a></div>
                        <div className="eight"><a>Delivery 1-12 Hours</a></div>
             <Link to="/Contact"><button className="g-card-btn3"><h5>Contact Now</h5></button></Link>         
                </div>
           </div>

            <div className="g-card-body b-four">
               <div className="platinum">
                    <h3>Platinum</h3>
               </div>
                <div className="price4">
                   <h1>$200</h1>
                </div>
                <div className="card-ul">
                        <div className="one"><a>1000 gmail Accounts</a></div>
                        <div className="two"><a>Phone number verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>New and Fresh</a></div>
                        <div className="five"><a>Recovery Email Added</a></div>
                        <div className="six"><a>7 days replacement</a></div>
                        <div className="seven"><a>100% Real Account</a></div>
                        <div className="eight"><a>Delivery 1-24 Hours</a></div>   
             <Link to="/Contact"><button className="g-card-btn4"><h5>Contact Now</h5></button></Link>                 
                </div>
           </div>
           {/* ________________________________________________________________________________ */}
       </div>
       </>
    )
}
export default GPriceCard;
