import { use } from "react"
import Post from "./Post";

export default  function Posts({postPromise}){

    console.log(postPromise)

    const posts = use(postPromise);
    console.log(posts);

  return (
    <div className="card">
        <h2>All Post are here {posts.length}</h2>
        {
          posts.map(post =><Post Post={post}></Post>)
        }
    </div>

  )

}