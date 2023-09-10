import  ReactDOM  from "react-dom";
import React from "react";
import { useEffect,useState } from "react";
import { logi } from "./Login";
import App from "./App";
import { hello_backend } from "../../../declarations/hello_backend/index";


function Poll(props) {
    const [checkboxes, setCheckboxes] = useState([
      false,
      false,
      false,
      false,
      false,
    ]);
    const[load,sload]=useState(false);
    
  
    var handleCheckboxChange = (index) => {
      const updatedCheckboxes = checkboxes.map((isChecked, i) =>
        index === i ? !isChecked : false
      );
      setCheckboxes(updatedCheckboxes);
    };

    const divStyle = {
      marginTop:'80px',
      alignItems: 'center',
      textAlign: 'center', 
      fontFamily: 'Montserrat', // Change the font family to Montserrat
    };

    const Checkstyle={
      top:'1.2rem',
      scale:'1.7',
      marginRight:'400px',
    marginLeft:'700px',
      // marginTop:'30px'
    }
  
    return (
      <div>{load?<div style={{ textAlign: "center", marginTop: "50vh", transform: "translateY(-50%)" }}>
      <div class="spinner-border text-info" role="status" style={{ width: "100px", height: "100px" }}>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    :
      <div style={divStyle}>
        <h1 class="display-3" style={{marginBottom:'35px'}}>Polling Page</h1>
        {checkboxes.map((isChecked, index) => (
        <div style={{marginLeft:"110px"}}>
          <span style={{marginRight:'200px',fontSize:'30px',marginTop:'10px'}}>Union {index+1}:</span>

          <span>
          <div class="form-check checkbox-xl"  >
          {/* <div>
            <span>Party 1</span>
          </div> */}
          <input
            key={index}
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(index)}
            style={Checkstyle}
            class="form-check-input"
            id={index}
          />
          
          </div>
          </span>
          
          </div>
        ))}
        <div style={{marginTop:'40px'}}>
        <button onClick={async()=>{
          sload(true);
          var flag=false;
        for(var i=0;i<checkboxes.length;i++){
           if(checkboxes[i]){
            flag=true;
             //  console.log(await props.aem);
            var c= await hello_backend.vote(i);
            var op=await hello_backend.op0;
            console.log(c);
                if(props.aem!=""&&c==true){
                  // sload(false);
             var r=await hello_backend.getemail(i,props.aem);
             flag=true;
           // console.log(r);
              if(r){
                sload(false);
                flag=true;
               await props.nds();
               }
           }
            }
            // else if(checkboxes[i]==false && i==checkboxes.length-1){
            //   sload(false)
            //   window.alert("Please check on one of the options")
            // }
        }
          if(!flag){
            sload(false);
              window.alert("Please check on one of the options");
          }
        }}  class="btn btn-outline-danger btn-lg"  >Cast Vote</button></div>
      </div>
}
      </div>
    );
  }

export default Poll;