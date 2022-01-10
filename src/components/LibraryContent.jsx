import React from 'react'
import { Link } from 'react-router-dom';
import BooksShelf from './BooksShelf';
import { useSelector } from 'react-redux';
import LoggedUser from './LoggedUser';

export default function LibraryContent() {
  const books = useSelector(state => state.librarian.books);
  return (
    <div className="list-books">
      <div className='logged-user'>
        <div className="list-books-title">                  
          <h2><Link className="my-reads" to="/">MyReads</Link></h2> 
          <h3><Link className="search-titles" to="/search">Search for titles</Link></h3>                                  
        </div>
        <LoggedUser />
      </div>
      
      <div className="list-books-content">
        <div>
          <BooksShelf books={books} shelfName="Currently Reading" />      
          <BooksShelf books={books} shelfName="Want to Read" />  
          <BooksShelf books={books} shelfName="Read" />                                                    
        </div>
      </div>              
    </div>
  )
}
