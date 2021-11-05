import { Link } from 'react-router-dom';
import './Gmailbulkcard.css'
const Gmailbulkcard=()=>{
    return (
        <>
        <div className="price-card">
           <div className="g-card-body b-one">
               <div className="bronze">
                   <h5>STANDARD PACKEGE-1</h5>
               </div>
                <div className="price1">
                    <h1>$90</h1>
                </div>
                <div className="card-ul">
                   
                        <div className="one"><a>250 gmail Accounts</a></div>
                        <div className="two"><a>Phone number verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>New and Fresh</a></div>
                        <div className="five"><a>Recovery Email Added</a></div>
                        <div className="six"><a>7 days replacement</a></div>
                        <div className="seven"><a>100% Real Account</a></div>
                        <div className="eight"><a>Delivery 1-24 Hours</a></div>              
             <Link to="/Contact"><button className="g-card-btn1"><h5>Contact Now</h5></button></Link>           
                </div>
           </div>

           <div className="g-card-body b-two">
               <div className="silver">
                    <h5>STANDARD PACKAGE-2</h5>
               </div>
                <div className="price2">
                    <h1>$180</h1>
                </div>
                <div className="card-ul">
                    
                        <div className="one"><a>10 gmail Accounts</a></div>
                        <div className="two"><a>Phone number verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>New and Fresh</a></div>
                        <div className="five"><a>Recovery Email Added</a></div>
                        <div className="six"><a>7 days replacement</a></div>
                        <div className="seven"><a>100% Real Account</a></div>
                        <div className="eight"><a>Delivery 1-24 Hours</a></div>
             <Link to="/Contact"><button className="g-card-btn2"><h5>Contact Now</h5></button></Link>         
                </div>
           </div>

           <div className="g-card-body b-three">
               <div className="gold">
                    <h5>STANDARD PACKAGE-3</h5>
               </div>
                <div className="price3">
                    <h1>$280</h1>
                </div>
                <div className="card-ul">
                        <div className="one"><a>10 gmail Accounts</a></div>
                        <div className="two"><a>Phone number verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>New and Fresh</a></div>
                        <div className="five"><a>Recovery Email Added</a></div>
                        <div className="six"><a>7 days replacement</a></div>
                        <div className="seven"><a>100% Real Account</a></div>
                        <div className="eight"><a>Delivery 1-48 Hours</a></div>
             <Link to="/Contact"><button className="g-card-btn3"><h5>Contact Now</h5></button></Link>          
                </div>
           </div>

            <div className="g-card-body b-four">
               <div className="platinum">
                    <h5>STANDARD PACKAGE-4</h5>
               </div>
                <div className="price4">
                   <h1>$350</h1>
                </div>
                <div className="card-ul">
                        <div className="one"><a>10 gmail Accounts</a></div>
                        <div className="two"><a>Phone number verified</a></div>
                        <div className="three"><a>Created by unique IP</a></div>
                        <div className="four"><a>New and Fresh</a></div>
                        <div className="five"><a>Recovery Email Added</a></div>
                        <div className="six"><a>7 days replacement</a></div>
                        <div className="seven"><a>100% Real Account</a></div>
                        <div className="eight"><a>Delivery 1-72 Hours</a></div>   
             <Link to="/Contact"><button className="g-card-btn4"><h5>Contact Now</h5></button></Link>           
                </div>
           </div>
       </div>
       </>
    )
}
export default Gmailbulkcard;
