import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
 <>
  <h1>Vite + React</h1>
  <Person></Person>
 </>
   
  )
}

function Person(){
  const age =17
  const name ="arnob"
  return (
    <p>i am a person {age} and name {name}</p>
  )
}
function Sports(){
  return (
    <div>
          <h3>Cricket</h3>
          <p>Playing and losing</p>
    </div>
  )
}

export default App
