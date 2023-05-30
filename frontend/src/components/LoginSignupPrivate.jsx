
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginSignupPrivate(props)
 {
  const auth = localStorage.getItem('session');
  const navi =   useNavigate();

  useEffect(()=>
  {
    if (auth)
    {
        navi('/');
        return;
    }
  },[]);

  return (
    
        props.children
    
    
    );
}

export default LoginSignupPrivate