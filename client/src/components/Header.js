import React from 'react'
import AlertCheckStatusCode from './AlertCheckStatusCode'
import { Link } from 'react-router-dom'


const Header = ({handleCheckReload, reTest, followReTest}) => {
  return (
    <div className='app-header'>
        <Link to={'/'}><h1 style={{color: 'orange'}}>Check Status Code</h1></Link>
        <AlertCheckStatusCode handleCheckReload={handleCheckReload} reTest={reTest} followReTest={followReTest}/>
    </div>
  )
}

export default Header
