function getSomething(num){
    return [24,5]
}
console.log(...getSomething())

const [num1,num2] = getSomething()
console.log(num1,num2)

function useState(initialValue){
  let state = initialValue;
  function setState(newValue){
    state =  newValue;
  }
  return [state,setState]
}