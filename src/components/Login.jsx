import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form, ButtonToolbar, Button, Loader } from 'rsuite';

import { updateJWT } from '../redux/jwtSlice';

function Login() {
  const [showLoader, setShowLoader] = useState(false);
  let { jwt } = useSelector(state => state.jwt);   
  const dispatch = useDispatch();  
  const handleSubmit = async (e) => {        
    e.preventDefault();
    setShowLoader(true);
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="password"]').value = '';
    
    const url = 'http://localhost:5000/login';
    try {
      const res = await fetch(url, {
        method: "POST",                
        headers: {
          "Content-Type": "application/json",          
        },
        body: JSON.stringify({
          username, 
          password
        }),        
      })
      const data = await res.json();
      
      setShowLoader(false); 

      if(res.status === 201) {        
        console.log('Data: ', data);
        // setTimeout(async () => await console.log('Just a delay...'), 1000);
        dispatch(updateJWT({ username: data.username, jwt: data.jwt }));
      //  setShowLoader(false);
      }
      else {
        console.log('Status: ', res.status.toString());
        console.log('Response data: ', data);
      }            
    } catch (error) {
      console.error(error);
    }             
  }
  
  const handleCancel = (e) => {
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="password"]').value = '';
  }

  const history = useHistory(); 

  useEffect(() => {
    if(jwt && jwt !== '') {            
      history.push('/books');
    }        
  }, [jwt, history]);

  return (    
    <div className='login'>
      {!showLoader && (<div>
        <h1>Please Login!</h1>
        <Form fluid onSubmit={(e) => handleSubmit(e)} method="post">                                   
          <Form.Group controlId="name">
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name="name" autoComplete="off"/>          
          </Form.Group>  
          <Form.Group controlId="password">
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control name="password" type="password" autoComplete="off" />
          </Form.Group> 
          <Form.Group>
            <ButtonToolbar>
              <Button appearance="primary" type='submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
              <Button appearance="default" type="button" onClick={handleCancel}>Cancel</Button>
            </ButtonToolbar>
          </Form.Group>               
          <div><span>Don't have an account yet? <Link to="/register">Register!</Link></span></div>     
        </Form>
      </div>)} 
      { showLoader && (<div><Loader size="md" center content="Loading..."/></div>)}     
    </div>    
  );
}

export default Login
