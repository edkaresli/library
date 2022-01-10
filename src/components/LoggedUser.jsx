import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Dropdown } from 'rsuite';
import MemberIcon from '@rsuite/icons/Member';
import { updateJWT } from '../redux/jwtSlice';

export default function LoggedUser() {
  const history = useHistory();
  const { username, jwt } = useSelector(state => state.jwt);
  const dispatch = useDispatch();
  const handleSignout = async () => {
    const url = 'http://localhost:5000/logout';
    try {
      const res = await fetch(url, {
        method: "POST",                
        headers: {
          "Content-Type": "application/json",          
        },
        body: JSON.stringify({
          username, 
          jwt
        }),        
      })      

      if(res.status === 200) {        
      //  console.log('Data: ', data);
        dispatch(updateJWT({ username: '', jwt: '' }));
        history.push('/logout');
      }
      else {
        throw new Error("Signout error!");
      }            
    } catch (error) {
      console.error(error);
    }    
  }   
  
  return (
    <div>
      <Dropdown title="Current user" icon={<MemberIcon />}>
        <Dropdown.Item>{username}</Dropdown.Item>
        <Dropdown.Item><Button onClick={handleSignout}>Sign out</Button></Dropdown.Item>
      </Dropdown>
      {/* <div>User: <span>{username + ' '}</span></div>
      <div><Button onClick={handleSignout}>Sign out</Button></div> */}
    </div>
  )
}
