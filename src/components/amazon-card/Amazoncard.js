import './Amazoncard.css'
const Amazoncard=()=>{
    return (
        <>
            <div className="price-card">
           <div className="g-card-body b-one">
               <div className="bronze h5">
                   <h5>BASE</h5>
               </div>
                <div className="price-1">
                    <h1>$25</h1>
                </div>
                <div className="card-ul">
                        <div className="one"><a>For 5 Amazon Accounts</a></div>      
                        <div className="two"><a>Deliver Time: 1-6 Hours</a></div>      
             <button className="g-card-btn1"><h5>Order Now</h5></button>         
                </div>
           </div>

           <div className="g-card-body b-two">
               <div className="silver h5">
                    <h5>ECONOMY</h5>
               </div>
                <div className="price-2">
                    <h1>$50</h1>
                </div>
                <div className="card-ul">
                        <div className="one"><a>For 10 Amazon Accounts</a></div>
                        <div className="two"><a>Deliver Time: 1-12 Hours</a></div>
             <button className="g-card-btn2"><h5>Order Now</h5></button>          
                </div>
           </div>

           <div className="g-card-body b-three">
               <div className="gold h5">
                    <h5>STANDARD</h5>
               </div>
                <div className="price-3">
                    <h1>$100</h1>
                </div>
                <div className="card-ul">
                        <div className="one"><a>For 20 Amazon Accounts</a></div>
                        <div className="two"><a>Deliver Time: 1-24 Hours</a></div>
             <button className="g-card-btn3"><h5>Order Now</h5></button>          
                </div>
           </div>

            <div className="g-card-body b-four">
               <div className="platinum h5">
                    <h5>PREMIUM</h5>
               </div>
                <div className="price-4">
                   <h1>$255</h1>
                </div>
                <div className="card-ul">
                        <div className="one"><a>For 50 Amazon Accounts</a></div>
                        <div className="two"><a>Deliver Time: 1-48 Hours</a></div>
            <button className="g-card-btn4"><h5>Order Now</h5></button>           
                </div>
           </div>

            <div className="g-card-body b-five">
               <div className="platinum plat">
                    <h5>PREMIUM</h5>
               </div>
                <div className="price-5">
                   <h1>$425</h1>
                </div>
                <div className="card-ul">
                        <div className="one"><a>For 100 Amazon Accounts</a></div>         
                        <div className="two"><a>Deliver Time: 1-72 Hours</a></div>         
            <button className="g-card-btn5"><h5>Order Now</h5></button>           
                </div>
           </div>

       </div>
        </>
    )
}
export default Amazoncard;

