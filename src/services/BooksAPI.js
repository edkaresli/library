
// const api = "https://reactnd-books-api.udacity.com"
// Backend url:
const api = "http://localhost:5000";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const get = (bookId, jwt) => {  
  return fetch(`${api}/books/${bookId}`, { 
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + jwt
    }, 
  })
  .then(res => res.json())
  .then(data => data.book)
  .catch(e => {
    console.error(e);
  });
}

export const getAll = (jwt) => {  
  return fetch(`${api}/books`, { 
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + jwt
    }, 
  })
  .then(res => res.json())
  .then(data => data.book)
  .catch(e => {
    console.error(e);
  });
}

export const update = (book, shelf, jwt) => {  
  return fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + jwt
    },
    body: JSON.stringify({ shelf })
  })
  .then(res => res.json())
}

export const search = (query, jwt) => {
  console.log('Inside search(), query: ', query);
  console.log('Inside search(), jwt: ', jwt);
  return fetch(`${api}/search`, {
    method: 'POST', 
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + jwt
    },
    body: JSON.stringify({ query })        
  }).then(res => res.json())
    .then(data => {
      console.log('books: ', data);
      return data.books;
    })
}
  