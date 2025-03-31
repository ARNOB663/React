import Books from "./Books"
export default function Libarary({books})
{ 
    return (
        <div>
            <h2>My nationl Central Library</h2>
            <p>book collection: {books.length}</p>
            <p>address:</p>
            <ul>
             {
                books.map(book => <Books key={book.id}  book={book}></Books>)
             }
            </ul>
        </div>
    )
}