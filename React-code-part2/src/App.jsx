import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Users  from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts  from './Posts'

// const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res =>res.json())

// const fetchFriends = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   return res.json()

// }
const fetchPost = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}


function App() {
 // const friendPromise =fetchFriends()
 const postPromise= fetchPost();

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


       <Suspense fallback={ <h4>Post are coming.....</h4>  }>
          <Posts postPromise={postPromise} ></Posts>
       </Suspense>

        {/* <Suspense fallback={<h3>Loading...</h3>}>
          <Users fetchUser={fetchUser} ></Users>
        </Suspense> */}

       {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
           <Friends friendPromise={friendPromise}></Friends>
       </Suspense> */}
         

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