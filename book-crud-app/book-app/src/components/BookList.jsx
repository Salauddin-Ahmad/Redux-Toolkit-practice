import { useSelector } from "react-redux";

const BookList = () => {
    const books = useSelector((state) => state.booksR.books);
    console.log(books)

    const handleDelete = () => {
        console.log(id);
    }

    return (
        <div>


            <h2>List of books</h2>
            {books && books.length > 0 ? (
                <ul>
                    {books.map((book) => {
                       return (
                            <li key={book.id}>
                                {book.title} by {book.author} -
                                ${book.price} - {book.quantity} pcs
                                <button onClick={handleDelete}>Delete</button>
                            </li>
                        )
                    })}
                </ul>) : (<p>no book exists</p>)}

        </div>
    );
};

export default BookList;
