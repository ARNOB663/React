import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './PricingOptions/PricingOptions'

const pricingPromise = fetch('pricingData.json').then(res => res.json());


function App() {
  return (
    <>
      <div>
        <header>
             
             <NavBar></NavBar>
             {/* <DaisyNav></DaisyNav> */}
        </header>   
        <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>

          <PricingOptions pricingPromise={pricingPromise} ></PricingOptions>

        </Suspense>
          
        </main>
      </div>
     
    </>
  )
}

export default App
