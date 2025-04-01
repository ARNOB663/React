import { useEffect, useState } from "react"
export default function Players()
{

    const [Players,setPlayers] = useState([])

    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res =>res.json())
        .then(data => setPlayers(data))
    },[]);
   return (
    <div className="card">
        <h4>Players: {Players.length}</h4>
          <ol>
            {
          Players.map(Players => <li>{Players.body}</li>)
            }
          </ol>
           

        
    </div>
   )


}