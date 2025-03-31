import Posts from "./Posts";
export default function Post({Post})
{ 
    return (
        <div>
           <p>{Post.body}</p>
        </div>
    )

}