import React from 'react'
import { useDispatch } from 'react-redux';
import { update } from '../services/BooksAPI';
import { GetAllBooks } from '../services/thunks';

const BookShelfChanger = (props) => {  
  const dispatch = useDispatch();

  const handleChange = (event) => {        
    const result = update(props.info, event.target.value);
    result.then(data => {           
      dispatch(GetAllBooks());
      if(props.searchPage) {
        alert("Book added to shelf");
      }
    })
    .catch(e => {
      console.error(e);
    });
  }

  return (
    <div className="book-shelf-changer">
      <select value={props.info.shelf || 'none'} onChange={handleChange}>
        <option value="move" disabled>
        Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;
