const handleAddToStorage =() =>{
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    localStorage.setItem("Name",name);

    const data = {id,name}
    localStorage.setItem(id,JSON.stringify(data))
}

const storedItem = localStorage.getItem("123")
console.log(JSON.stringify(storedItem))
const handleClear = () =>{
    localStorage.clear()
}
