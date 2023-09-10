import React from 'react';
import  ReactDOM  from 'react-dom';
import Login from './Login';
import Poll from './Poll';
import { useState,useEffect } from 'react';
import Success from './Success';
import Result from './Result';

function App(){
    const [d,sd]=useState(false)
    const[emm,semm]=useState('');
    const[d2,sd2]=useState(false);
    const [votingEndTime, setVotingEndTime] = useState(null);
    const [totaldi,stotaldis]=useState(true);
    const [votingCalculated, setVotingCalculated] = useState(false);
    const[load,sload]=useState(false);
    const votingDuration = 2 * 60 * 1000
   async function hd(value){
        sd(true);
        semm(value)
    }

    async function se(value){
        semm(value);
    }
   async function sss(){
        sd2(true);
       // console.log(emm);
       //
    }
  
    // useEffect(() => {
    //     // Calculate the end time when d2 changes
    //     const endTime = new Date().getTime() + votingDuration;
    //     setVotingEndTime(endTime);

    //     // Check if the voting time has elapsed
    //     const interval = setInterval(() => {
    //         if (new Date().getTime() > endTime) {
    //             stotaldis(false);
    //             clearInterval(interval);
    //         }
    //     }, 1000);

    //     return () => clearInterval(interval); // Clear the interval on unmount
    // }, [d2]);

    useEffect(() => {
        // Calculate the end time when d2 changes
        const endTime = new Date().getTime() + votingDuration;
        setVotingEndTime(endTime);

        // Check if the voting time has elapsed
        const interval = setInterval(() => {
            if (new Date().getTime() > endTime) {
                stotaldis(false);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval); // Clear the interval on unmount
    }, [totaldi]);


    
    function getd() {
        var currentDate = new Date();

  // Get the current year, month, and day
  var year = currentDate.getFullYear().toString().slice(-2); // Get the last two digits of the year
  var month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Month is zero-based, so add 1
  var day = ('0' + currentDate.getDate()).slice(-2);

  // Get the current hour and minute
  var hours = ('0' + currentDate.getHours()).slice(-2);
  var minutes = ('0' + currentDate.getMinutes()).slice(-2);

  // Format the date and time
  var formattedDate = `${day}-${month}-${year}`;
  var formattedTime = `${hours}:${minutes}`;

  return `${formattedDate} at ${formattedTime}`;
      }
      
    return (
        <div>{
         totaldi?   d? d2? <Success emai={emm} tim={getd} />:<Poll aem={emm} nds={sss} /> :<Login  callback={hd} /> : <Result/>
            }
           
        </div>
    )
}

export default App;