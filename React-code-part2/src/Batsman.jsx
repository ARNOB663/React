import { useState } from "react"
export default function Batsman(){

    const [runs,setRuns] = useState(0)
    const [six,setSix] = useState(0)
    const [four,setfour] = useState(0)

    const handleSingle=()=>{
        let newRun = runs+1;
        setRuns(newRun)
    }
    const handleSix = () =>{
        const newRun = runs+6;
        const numofSix = six+1;
        setSix(numofSix);
        setRuns(newRun);
    }
    const handleFour=()=>{
        const newRun = runs+4;
        const numofFour=  four+1;
        setfour(numofFour)
        setRuns(newRun);
    }

  return  (
    <div>
        <h3>
            Player: BD Batsman
        </h3>
        <h2>Number of Six: {six}</h2>
        <h2>Number of Four: {four}</h2>
        {  
             runs => 50 && <p>Your have scord half century</p>
        }
        <h1> Score: {runs}</h1>
        <button onClick={handleSingle}>Single</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>

    </div>

  )

}