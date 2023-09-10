import React from 'react';
import  ReactDOM  from 'react-dom';
import { useEffect,useState } from 'react';
import { hello_backend } from '../../../declarations/hello_backend/index';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JavaScript (Optional, if you need JavaScript features)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





function Login(props){
const[email,semail]=useState("")
const [password,spassword]=useState("")
const[press,spress]=useState(false)

const[logi,slogi]=useState(false);
const[load,sload]=useState(false);



useEffect(() => {
    console.log('Updated email:', email);
  }, [email]);

  useEffect(() => {
    console.log('Updated password:', password);
  }, [password]);

  useEffect(() => {
    console.log('Updated press:', press);
  }, [press]);

function onemail(e){
    semail(e.target.value)
    
}
function onpassword(e){
    spassword(e.target.value)
    
}
async function onpres(){
    sload(true);
  var result= await hello_backend.enlistuser(email,password);
   console.log(result);
   if(result){
   slogi(true)
    props.callback(email);
    sload(false);
    // props.getem(email);
   }
   else{
    window.alert("Invalid key entered or you might have already casted your vote!");
    sload(false);
    slogi(false)
   }
}

const divStyle = {
  marginTop:'80px',
  alignItems: 'center',
  textAlign: 'center', 
  fontFamily: 'Montserrat', // Change the font family to Montserrat
};
const inpdiv={
  marginLeft:'400px',
  marginRight:'400px',
  marginTop:'25px',
  marginBottom:'25px'
}
const inpdiv1={
  marginLeft:'400px',
  marginRight:'400px',
  marginTop:'35px',
  marginBottom:'25px'
}
const inputStyle = {
  border: '1.5px solid #000', // Adjust the border properties as needed
  padding: '5px', // Optional: You can also adjust padding for spacing
};

   return (
    <div>
      {load?    <div style={{ textAlign: "center", marginTop: "50vh", transform: "translateY(-50%)" }}>
      <div class="spinner-border text-info" role="status" style={{ width: "100px", height: "100px" }}>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
:
    <div style={divStyle}>
        <h1 class="display-4" style={{paddingLeft:"100px",paddingRight:"100px",color:"#17a2b8",marginBottom:"65px" }} >Welcome to Online Voting For Student Union Election</h1>
        <div  class="form-group" style={inpdiv1}>
        <label for="formGroupExampleInput">Enter Your Unique Identification Key</label>
          <input type="password" value={email} onChange={onemail} class="form-control" id="formGroupExampleInput" style={inputStyle} />
          </div>
       <div class="form-group" style={inpdiv}> 
       <label for="formGroupExampleInput2">Enter Your Name (Optional) </label>
        <input type="text" value={password} onChange={onpassword} class="form-control" id="formGroupExampleInput2"  style={inputStyle}/>
        </div>
        <div><button  onClick={onpres}  class="btn btn-outline-info btn-lg"  >Proceed</button>   </div>
    
    </div>
}
    </div>
   );
}

// export {Login,logi};
export default Login;


// style={{display:press?"inline":"none"}}