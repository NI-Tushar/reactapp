
import './Cards.css'
const Cards=(props)=>{
    return (
       <div className="card">
           <div className="card-body">
                <img src={props.img} className="card_image" alt="" />
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
           </div>
           <button className="card-btn">Buy Account</button>           
       </div>
    )
}
export default Cards;

