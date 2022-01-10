import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { search } from '../services/BooksAPI';
import Book from './Book';
import { useSelector } from 'react-redux';

function SearchPage(props) {  
  const [searchResults, setSearchResults] = useState([]);
  const { jwt } = useSelector(state => state.jwt);
  // console.log('SearchPage, jwt is: ', jwt);
  const searchFor = async (term) => {
    try {
    //   console.log('Inside searchFor(), jwt = : ', jwt);
    //  console.log('Inside searchFor(), term = : ', term);
      const result = await search(term, jwt);
      console.log('inside searchFor(), result: ', result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearch = (e) => {
  //  console.log('Inside handleSearch()');
  //  console.log('e.key: ', e.key);

    if (e.key !== 'Enter') {
      return;
    }
    const result = searchFor(e.target.value);
    console.log('result: ', result);
    result.then(data => {
      console.log('data: ', data);
      setSearchResults(data);
    })
    .catch(err => {
      console.error(err);
    })
  }

  const createBookComponents = () => {
    const components = searchResults.map(item => {
      return (
        <li key={400*Math.random() + 10}>
          <Book key={100*Math.random() + 10} info={item} />
        </li>
      )
    });
    return components;
  }
  
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => handleClick()}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms in SEARCH_TERMS.MD

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */              
          }
          <input type="text" placeholder="Search by title or author" onKeyPress={(e) => handleSearch(e)}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid" >
          {searchResults && searchResults.length > 0 ? (createBookComponents()) : (<h3>Nothing found!</h3>)}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;
