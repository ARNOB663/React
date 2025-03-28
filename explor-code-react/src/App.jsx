import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './Todo'
import './App.css'

function App() {

  return (
 <>
  <h1>React Core concept</h1>
  {/* <Student/>
  <Person age='20' name='arnb'/>
  <Developer name='akkas' tech='JS'> </Developer> 
  <Developer name='sakib' tech='C++'/>
  <Developer name='Daddy' tech="java"/>
  <Player name='tamim' runs="6000"/>
  <Player name='mushi' runs="5000"/>
  <Salary name='Alex' amont='6k'/> 
  <Salary name='Alex' />  */}
  <Todo Task="learn react" isDone={true}/>
 </>
  )
}
//const {name,tech} = {}
function Salary({name,amont=0})
{
return (
<div className='Student'>
  <h4>salary For: {name} </h4>
  <p>Amount: {amont} </p>

</div>
)

}


function Player({name,runs})
{
  return (
    <div className='Student'>
      <h3>Name: {name} </h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

function Developer(props)
{ 
  console.log(props)
  return (
    <div style={{
      border: '2px solid green',
      borderRadius:'20px',
      margin:'10px'
    }}>
      <h3>Developer:  {props.name} </h3>
      <p>Technology:  {props.tech} </p>
    </div>
  )
}

function Student(){
  return (
    <div className='Student'>
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  )
}

function Person(props){
  
  const personStyle={
    color:'red',
    textAlign:'center',
    border:'2px solid white',
    borderRadius:"10px",
    padding:'20px'
  }
  return (
    <p style={personStyle}>i am a {props.age} and name {props.name} </p>
  )
}
function Pet(){
return (
  <h1>Dogesh</h1>
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
