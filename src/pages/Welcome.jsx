import react from "react";
import React from "react";
import "../css/welcome.css"

const Welcome = () => {

    return ( 
        <>
            <div className="container">
                <img src="https://scontent-bog1-1.cdninstagram.com/v/t51.2885-19/s320x320/102723614_828503660891754_1581765600553203555_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_ohc=xEeEr-kltWIAX-JOPUt&tp=1&oh=43178d1352de3e5402237b222e8eae36&oe=605F178B" alt="logo beeBeauty" className="logo"/>
                <h2>!Bienvenida a beeBeauty!</h2>
                <button className= "actionBtn">Entrar</button>

            </div>
        </>

     );
}
 
export default Welcome;