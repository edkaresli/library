import React from 'react'
import Book from './Book';

const BooksShelf = (props) => {  
  const getBooksFromShelf = (shelf) => {    
    const isInShelf = (item) => {      
      return item.shelf === shelf;
    }
    return props.books.filter(isInShelf, shelf);    
  }
  
  const getProperShelfName = (shelf) => {
    switch(shelf) {
      case 'Currently Reading':
        return 'currentlyReading';
      case 'Want to Read':
        return 'wantToRead';
      case 'Read':
        return 'read';
      default:
        return 'none';
    }
  } 
  const createBookComponents = (shelf) => {
    const currentShelfBooks = getBooksFromShelf(shelf);
    const bookComponents = currentShelfBooks.map(item => {
      return (
        <li key={400*Math.random() + 10}>
          <Book key={100*Math.random() + 10} info={item} />
        </li>
      );                    
    });

    return bookComponents;
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">                    
          {props.books.length > 0 ? (createBookComponents(getProperShelfName(props.shelfName))) : (<h3>Not fetched yet</h3>)}                                                           
        </ol>
      </div>
    </div>
  )
}

export default BooksShelf;
