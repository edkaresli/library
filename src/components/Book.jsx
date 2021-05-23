import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = (props) => {  
  return (
    <div className="book">
      <div className="book-top">
        <div
        className="book-cover"
        style={{
            width: 128,
            height: 192,
            backgroundImage:
            `url(${props.info.imageLinks.thumbnail})`,
        }}
        />
        <BookShelfChanger info={props.info} searchPage={props.info.shelf? false : true} />
      </div>
      <div className="book-title">{props.info.title}</div>
      {props.info.authors ? (<div className="book-authors">{props.info.authors.join(', ')}</div>) : (<div></div>)}
    </div>
  );
}

export default Book; 
 