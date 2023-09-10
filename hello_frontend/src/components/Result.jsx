import React from "react";
import ReactDom from "react-dom";
import { useEffect,useState } from "react";
import { hello_backend } from "../../../declarations/hello_backend/index";


function Result(){
    const[s,rs]=useState("")

    // async function res(){
    //    var r=await hello_backend.getresult();
    //    console.log("Received result:", r);
    //    rs(r);
       
    // }

    useEffect( ()=>{
        async function res(){
            var r=await hello_backend.getresult();
            console.log("Received result:", r);
            rs(r);
            
         }
         res();
        console.log(s);
    },[]);

    const divStyle = {
        marginTop:'80px',
        alignItems: 'center',
        textAlign: 'center', 
        fontFamily: 'Montserrat', // Change the font family to Montserrat
      };

    return (
   <div style={divStyle}>
    <h1 class="display-2" style={{color:"#8B0000",marginBottom:"50px"}}>Voting time up!</h1>
    <h2 class="display-4">{s}</h2>
   </div>
    );
}

export default Result;