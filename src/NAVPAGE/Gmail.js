import Footer from '../components/Footer';
import '../Homepage.css'
import '../navpageCSS/Gmail.css'
import gmailposter from '../images/poster/gmailposter.jpg'

const Gmail=(props)=>{
    return (
        <>
       {/* <div className="img-slider">
               <div className="blank-1">
               </div>
               <div className="poster">
                    <div>
                        <img src={gmailposter} className="gmail-poster" alt="" />
                    </div>
                    <div className="poster-desc">
                        <ul>
                            <li>Description -1</li>
                            <li>Description -1</li>
                            <li>Description -1</li>
                            <li>Description -1</li>
                        </ul>
                    </div>
               </div>
               <div className="blank-2">
               </div>
           </div> */}

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

