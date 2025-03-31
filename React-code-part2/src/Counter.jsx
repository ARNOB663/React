import  {useState} from "react"
export default function  Counter(){
    const  [count,setCount]= useState(0)

    const handleAdd = () =>{
      const newCount = count +1
      setCount(newCount);
      
      // Count++;
        //console.log("Clicked")
    }
    
    const conterStyle={
        border: '2px solid yellow'
    }
    return (
        <div style={conterStyle}> 
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}