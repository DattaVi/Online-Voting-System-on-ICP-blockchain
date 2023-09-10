import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

function Success(props){
    const[t,st]=useState("");

    useEffect(()=>{
       var ti=props.tim;
       st(ti);
    });

    const divStyle = {
        marginTop:'80px',
        alignItems: 'center',
        textAlign: 'center', 
        fontFamily: 'Montserrat', // Change the font family to Montserrat
      };

    return (

        <div style={divStyle}> 
            <p class="display-3" style={{color:"#008080",paddingLeft:'200px',paddingRight:'200px',marginBottom:'45px'}}>You have successfully completed voting!.</p>
            <h3>{props.emai} voted on:</h3>
            <h3>{t}</h3>
        </div>

    )
}

export default Success;