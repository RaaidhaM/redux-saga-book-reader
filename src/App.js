import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooksRequested } from '../src/app/actions/userActions'

function App() {
  const dispatch = useDispatch()
  const books = useSelector(state => state.books)
  const status = useSelector(state => state.status)

  const handleFetchBooks = () => {
    dispatch(fetchBooksRequested())
  }

  return (
    <div>
    <h1>Redux-Saga Book Reader</h1>
    <button onClick={handleFetchBooks}>Fetch Books</button>

    {status === 'INPROGRESS' && <p>Processing Request...</p>}
    {status === 'COMPLETED' && (
       <ul>
          {books.map(book => (
             <li key={book.isbn}>{book.name}</li>
          ))}
       </ul>
    )}
    {status === 'FAILED' && <p>Failed to fetch books</p>}
 </div>
  )
}

export default App
