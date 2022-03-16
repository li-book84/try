import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/header.css'

function Header() {
  return (
      <div>
        <Link to='/projects' className='textc'>
          <div className='backFor'>
            <h1>College projects</h1>
          </div>
        </Link>
      </div>
  )
}

export default Header;
