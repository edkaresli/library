import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { Panel } from 'rsuite';

function SignOut() {
  
  // const { username, jwt } = useSelector(state => state.jwt);
  // const dispatch = useDispatch();

  // useEffect(() => {    
  //   const res = fetch(url, {
  //     method: "DELETE",                
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${jwt}`           
  //     },
  //     body: JSON.stringify({
  //       username        
  //     }),        
  //   })
  //   .then( d => d.json())
  //   .then(data => console.log("Data: ", data))    
  //   .catch(e => console.error(e));
  // }, [])

  return (   
    <div className='signout'>
      <Panel header="Logged out" shaded>
        <div>
          You have been successfully signed out.
        </div>
        <div>To sign in again go to <Link to="/login">login.</Link></div>
      </Panel>
    </div>         
  );
}

export default SignOut
