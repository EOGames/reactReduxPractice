import React from 'react'

function PrivateRoutes(props) 
{
  const auth = localStorage.getItem('session');
  return (
    <>
        {
            auth? 
              props.children : window.location.href ='/login' 
        }
    </>
  )
}

export default PrivateRoutes