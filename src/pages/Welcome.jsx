import "../css/welcome.css"
import '../css/media.css'
import {
  Link
} from "react-router-dom";
import bb from '../images/beeLogo1.jpg';


const Welcome = () => {
    return ( 
        <>
            <div className="container">
                <img src={bb} alt="logo beeBeauty" className="logo"/>
                <h1>!Bienvenid@ a Bee Beauty!</h1>
                <Link to="/home"><button type="button" className= "actionBtn">Entrar</button></Link>
            </div>
        </>

     );
}
 
export default Welcome;