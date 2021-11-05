import { Link } from 'react-router-dom';
// import './Amazoncard.css'
const Androidcard=()=>{
    return (
        <>
            <div className="price-card">
           <div className="g-card-body b-one">
               <div className="bronze h5">
                   <h5>Bronze</h5>
               </div>
                <div className="price-1">
                    <h3 style={{marginTop:"35px"}}>$25</h3>
                </div>
                <div className="card-ul">
                        <div className="one"><a>10 Review</a></div>      
                        <div className="two"><a>Install+5 start rating</a></div>      
             <Link to="/Contact"><button className="g-card-btn1"><h5>Contact Now</h5></button></Link>         
                </div>
           </div>

           <div className="g-card-body b-two">
               <div className="silver h5">
                    <h5>Silver</h5>
               </div>
                <div className="price-2">
                    <h3 style={{marginTop:"35px"}}>$50</h3>
                </div>
                <div className="card-ul">
                        <div className="one"><a>25 Review</a></div>
                        <div className="two"><a>Install+5 start rating</a></div>
             <Link to="/Contact"><button className="g-card-btn2"><h5>Contact Now</h5></button></Link>          
                </div>
           </div>

           <div className="g-card-body b-three">
               <div className="gold h5">
                    <h5>STANDARD</h5>
               </div>
                <div className="price-3">
                    <h3 style={{marginTop:"35px"}}>$100</h3>
                </div>
                <div className="card-ul">
                        <div className="one"><a>50 Review</a></div>
                        <div className="two"><a>Install+5 start rating</a></div>
             <Link to="/Contact"><button className="g-card-btn3"><h5>Contact Now</h5></button></Link>          
                </div>
           </div>

            <div className="g-card-body b-four">
               <div className="platinum h5">
                    <h5>Platinum</h5>
               </div>
                <div className="price-4">
                   <h3 style={{marginTop:"35px", marginRight:"15px"}}>$200</h3>
                </div>
                <div className="card-ul">
                        <div className="one"><a>100 Review</a></div>
                        <div className="two"><a>Install+5 start rating</a></div>
            <Link to="/Contact"><button className="g-card-btn4"><h5>Contact Now</h5></button></Link>           
                </div>
           </div>
           
       </div>
        </>
    )
}
export default Androidcard;

