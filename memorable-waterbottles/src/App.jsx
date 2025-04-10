import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

// const BottlesPromise = fetch('https://raw.githubusercontent.com/ARNOB663/bottles-data/refs/heads/main/bottles.json').then(res => res.json)
// const BottlesPromise2= fetch('https://raw.githubusercontent.com/ARNOB663/bottles-data/refs/heads/main/bottles.json').then(res => res.json)

const bottlesPromise = fetch('bottles.json').then(res => res.json())
function App() {

  // const bottles = [
  //   {id:1, name:' Pink Nike Bottle', price: 250,color: 'pink'},
  //   {id:2, name:' Pink Nike Bottle', price: 350,color: 'pink'},
  //   {id:3, name:' Pink Nike Bottle', price: 450,color: 'pink'},
  //   {id:4, name:' Pink Nike Bottle', price: 550,color: 'pink'},
  //   {id:5, name:' Pink Nike Bottle', price: 650,color: 'pink'},
  // ]
  return (
    <>
     <h1>Buy Awesome Water Bottle</h1>
     <Suspense fallback={<h3></h3>}>
      <Bottles BottlesPromise={bottlesPromise}></Bottles>
     </Suspense>
    </>
  )
}

export default App
