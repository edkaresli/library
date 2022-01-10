import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, ButtonToolbar } from 'rsuite';

function Register() {
  const history = useHistory();
  const resetForm = () => {
    document.querySelectorAll('input[type="text"]').forEach(item => item.value = '');
    document.querySelector('input[type="password"]').value = '';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = document.querySelector('input[name="username"]').value;    
    const firstName = document.querySelector('input[name="firstName"]').value;    
    const lastName = document.querySelector('input[name="lastName"]').value;    
    const thumbnail = document.querySelector('input[name="thumbnail"]').value;        
    const password = document.querySelector('input[type="password"]').value;

    // console.log(`Register data: ${username}, ${firstName}, ${lastName}, ${thumbnail}, ${password}`);
    
    const url = 'http://localhost:5000/register';
    try {
      const res = await fetch(url, {
        method: "POST",                
        headers: {
          "Content-Type": "application/json",          
        },
        body: JSON.stringify({
          username, 
          firstName, 
          lastName, 
          thumbnail,
          password
        }),        
      });

      // const data = await res.json();

      if(res.status === 201) {        
        // console.log('Success! ', data);
        history.push('/login');
      }
      else {
        console.log('Status: ', res.status);
        // console.log('Message: ', data.msg);
      }            
    } catch (error) {
      console.error(error);
    }
    finally {
      resetForm();
    }
  }

  const handleCancel = (e) => {
    resetForm();
  }

  return (
    <div className="register">
      <h1>Register Below</h1>
      <Form fluid onSubmit={(e) => handleSubmit(e)} method='post'>
        <Form.Group controlId="username">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control name="username" autoComplete="off"/>          
        </Form.Group>  
        <Form.Group controlId="firstName">
          <Form.ControlLabel>First name</Form.ControlLabel>
          <Form.Control name="firstName" autoComplete="off"/>          
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.ControlLabel>Last name</Form.ControlLabel>
          <Form.Control name="lastName" autoComplete="off"/>          
        </Form.Group>
        <Form.Group controlId="thumbnail">
          <Form.ControlLabel>Thumbnail</Form.ControlLabel>
          <Form.Control name="thumbnail" autoComplete="off"/>          
        </Form.Group>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control name="password" type="password" autoComplete="off" />
        </Form.Group> 
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" type='submit' onClick={(e) => handleSubmit(e)}>Submit</Button>
            <Button appearance="default" onClick={handleCancel}>Cancel</Button>
          </ButtonToolbar>
        </Form.Group>        
      </Form>
      <div style={{marginTop: '20px' }}><span>Already have an account?</span><Link to="/login"> Login!</Link></div>
    </div>
  )
}

export default Register