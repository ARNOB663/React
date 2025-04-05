// function getSomething(num){
//     return [24,5]
// }
// console.log(...getSomething())

// const [num1,num2] = getSomething()
// console.log(num1,num2)

// function useState(initialValue){
//   let state = initialValue;
//   function setState(newValue){
//     state =  newValue;
//   }
//   return [state,setState]
// }


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(res => res.json())
  .then(data => {
    console.log(data); // Log the data here
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Handle errors
  });
