import React from 'react'
import { BrowserRouter as Router, Switch, Route, /* useHistory,*/ Redirect } from 'react-router-dom';
import { useSelector /*, useDispatch */ } from 'react-redux';
import { Container, Content } from 'rsuite';

import SearchPage from './components/SearchPage';
import Login from './components/Login';
import Register from './components/Register'; 
import LibraryContent from './components/LibraryContent';
import SignOut from './components/SignOut';

import './App.css'

const App = () => {
  // const books = useSelector(state => state.librarian.books);
  // let changed = useSelector(state => state.librarian.changed);    
  let {jwt} = useSelector(state => state.jwt); 
  console.log(`From App.js, jwt: ${jwt}`);
  // const dispatch = useDispatch();
  // let history = useHistory();
 
  return (
    <Router>      
      <Container>
        <Content>
          <Switch>
            <Route exact path="/login">
              <Login />   
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/logout">
              <SignOut />
            </Route>
            <Route exact path="/search">
              <SearchPage />
            </Route>
            <Route exact path="/books">
              <LibraryContent />            
            </Route>
            <Route exact path="/">            
              { !jwt? (<Redirect to="/login" />) : (<Redirect to="/books" />)}
            </Route>
          </Switch>
        </Content>         
      </Container>                               
    </Router>    
  );
}

export default App;

