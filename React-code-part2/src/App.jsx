
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'

function App() {
  function handleClick(){
    alert("i am clicked.")
  }
  const handleClick3 = () =>{
    alert('clicked 3')
  }
  const handleAdd5 =(num)=>{
    const newNum=num+5;
alert(newNum)
  }
 
  return (
    <>
       <h3>Vite + react</h3>
       <Batsman></Batsman>

       <Counter></Counter> 
      
      {/* <button noClick="handleClick()">click Me</button> */}
       <button onClick={handleClick}>Click Me</button>
       <button onClick={function handleClick2()
        {
          alert('clicked 2')
        }
       }>Click Me 2</button>
       <button onClick={handleClick3}>Click me 3</button>
       <button onClick={() => alert('clicked 4')}>click me 4</button>
       <button onClick={()=>handleAdd5(7)}>Click Add 5 </button>
    </>
  )
}

export default App