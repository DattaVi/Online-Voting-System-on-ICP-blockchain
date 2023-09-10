import { hello_backend } from "../../declarations/hello_backend";
import ReactDOM from 'react-dom'
import React from 'react'
import Login from "./components/Login";
import Poll from "./components/Poll";
import App from "./components/App";
import { useEffect,useState } from "react";
import {AuthClient} from "@dfinity/auth-client";

const init = async () => { 


//   ReactDOM.render(
//     <App/>
// ,
  
  
//   document.getElementById("root"));
  const authClient=await AuthClient.create();
  if(await authClient.isAuthenticated()){
    handleA(authClient);
  }else{
    await authClient.login({
      identityProvider:"https://identity.ic0.app/#authorize",
      onSuccess:()=>{
        handleA(authClient);
      }
    })
  }
}

async function handleA(authClient){
  ReactDOM.render(<App/>,document.getElementById("root"));
}

init();


