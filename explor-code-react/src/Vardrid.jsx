import './App.css'
export default function Vardrid({vardrid}){
    return (

          <div className='Student'>
              <h3>Name: {vardrid.name}</h3>
              <p>age: {vardrid.age}</p>
              <p>father: {vardrid.father}</p>
          </div>

    )
}