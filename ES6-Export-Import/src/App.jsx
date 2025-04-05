import './App.css'
import { add, diff, mult } from './utils/math'

function App() {

  const sum= add(2,4)

  console.log(sum)

  const subs = diff(2,4)
 console.log(subs)
 const m= mult(3,4)

 console.log(m)
  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
