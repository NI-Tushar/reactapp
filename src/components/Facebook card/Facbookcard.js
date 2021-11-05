import { Link } from 'react-router-dom';
// import './GPriceCard.css'
const Facebookcard=()=>{
    return (
        <>
       <div className="price-card">
           <div className="g-card-body b-one">
               <div className="bronze">
                   <h3>Bronze</h3>
               </div>
                <div className="price1">
                    <h2>$20</h2>
                </div>
                <div className="card-ul">
                   
                        <div className="one"><a>10 Gmail Accounts</a></div>
                        <div className="two"><a>Phone and Email verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>Gmail access will be given</a></div>
                        <div className="five"><a>With Complete Profile</a></div>
                        <div className="six"><a>Fresh and New</a></div>
                        <div className="seven"><a>3 Days Replacement</a></div>
                        <div className="eight"><a>Instant Delivery</a></div>
                    
             <Link to="/Contact"><button className="g-card-btn1"><h5>Contact Now</h5></button></Link>        
                </div>
           </div>

           <div className="g-card-body b-two">
               <div className="silver">
                    <h3>Silver</h3>
               </div>
                <div className="price2">
                    <h2>$50</h2>
                </div>
                <div className="card-ul">
                        <div className="one"><a>25 Gmail Accounts</a></div>
                        <div className="two"><a>Phone and Email verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>Gmail access will be given</a></div>
                        <div className="five"><a>With Complete Profile</a></div>
                        <div className="six"><a>Fresh and New</a></div>
                        <div className="seven"><a>3 Days Replacement</a></div>
                        <div className="eight"><a>Delivery 1-24 Hours</a></div>
             <Link to="/Contact"><button className="g-card-btn2"><h5>Contact Now</h5></button></Link>           
                </div>
           </div>

           <div className="g-card-body b-three">
               <div className="gold">
                    <h3>Gold</h3>
               </div>
                <div className="price3">
                    <h2>$100</h2>
                </div>
                <div className="card-ul">
                        <div className="one"><a>50 Gmail Accounts</a></div>
                        <div className="two"><a>Phone and Email verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>Gmail access will be given</a></div>
                        <div className="five"><a>With Complete Profile</a></div>
                        <div className="six"><a>Fresh and New</a></div>
                        <div className="seven"><a>3 Days Replacement</a></div>
                        <div className="eight"><a>Delivery 1-48 Hours</a></div>
             <Link to="/Contact"><button className="g-card-btn3"><h5>Contact Now</h5></button></Link>           
                </div>
           </div>

            <div className="g-card-body b-four">
               <div className="platinum">
                    <h3>Platinum</h3>
               </div>
                <div className="price4">
                   <h2>$190</h2>
                </div>
                <div className="card-ul">
                        <div className="one"><a>100 Gmail Accounts</a></div>
                        <div className="two"><a>Phone and Email verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>Gmail access will be given</a></div>
                        <div className="five"><a>With Complete Profile</a></div>
                        <div className="six"><a>Fresh and New</a></div>
                        <div className="seven"><a>3 Days Replacement</a></div>
                        <div className="eight"><a>Delivery 1-72 Hours</a></div>   
             <Link to="/Contact"><button className="g-card-btn4"><h5>Contact Now</h5></button></Link>            
                </div>
           </div>
       </div>
       </>
    )
}
export default Facebookcard;
