import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/bookSlice";

const BookList = ({ onHandleEdit }) => {
    const books = useSelector((state) => state.booksR.books);
    console.log(books)

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }

    const handleEdit = (book) => {
        onHandleEdit(book)
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
                                <button onClick={() => handleEdit(book)}>Edit</button>
                                <button onClick={() => handleDelete(book.id)}>Delete</button>
                            </li>
                        )
                    })}
                </ul>) : (<p>no book exists</p>)}

        </div>
    );
};

export default BookList;
