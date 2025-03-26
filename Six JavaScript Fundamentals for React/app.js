//variable 
// let or const insted of var 
//let and const 
let name="arnob"
name  = "arnob dev nath"
//we can change the value of a variable if we use let 
const Country_name="BD"
//we can not change the value of a variable if we use const 

const num=40;

if(num>=20 || num<=30)
{
    console.log("yes")
}
else
{
    console.log("Nooo")
}

const friends=["HERO","JKR","SRK"]
console.log(friends)//prints the array
console.log(friends[1])//prints the value of 1st index
console.log(friends.length)//prints the length of the array
friends.push("US")//insterts a new string in the array

console.log(friends)
friends.unshift("BD")//puts bd in the front
console.log(friends)
friends.shift()//remove value of an array from the front
console.log(friends)

console.log(friends.slice(2,4))//return from index from 2 to 4

//normal for loop

for(let i=0;i<friends.length;i++)
{
    const element = friends[i];
    console.log(element)
}
//function 
function sum(a,b){ 
 console.log(arguments)//shows the number of argumnents and the arguments
 console.log(...arguments)//prints the arguments 

    console.log(a+b)//returns the sun of a and b
    return a+b
}
sum(2,3)//funtion call
const output=sum(2,3)
//object 
const person = {
    name:"arnob",
    friends:friends,
    age:10,
}
console.log(person)//print the object
console.log(person.name)//prints the name from object 
console.log(person.friends[1])//prints the array index fromn the array 
person.name="Daddy"
console.log(person)


