import { use } from "react"
export default function  users({fetchUser}){

    const users = use(fetchUser)

    //console.log(fetchUser)

return (
   <div className="card">
    <h3>Users: {users.length}</h3>
   </div>

)
}