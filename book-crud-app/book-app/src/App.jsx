
import { useState } from 'react';
import BookForm from './components/BookForm'
import BookList from './components/BookList'

function App() {
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleEdit = (book) => {
    setBookToEdit(book);
  };
  const handleCancelEdit = (book) => {
    setBookToEdit(null);
  };


  return (
    <div className='App'>
      <BookForm
       bookToEdit={bookToEdit}
       onCancel={handleCancelEdit}
       /> 
      <BookList  onHandleEdit={handleEdit}/>
    </div>
  )
}

export default App