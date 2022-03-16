import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/button.css';

function buttons() {
  return (
      <div className='buttons'>
          <div className='btn1' id='btn1'>
          <Link to='/projects/minor' className='txtdec1'>
            <div>
                Minor
            </div>
          </Link>
        </div>
        <hr/>
        <div className='btn2'>
          <Link to='/projects/major' className='txtdec2'>
            <div>
                Major
            </div>
          </Link>
        </div>
        <hr/>
        <div className='btn3'>
          <Link to='/projects/special' className='txtdec3'>
            <div>
                Special
            </div>
          </Link>
        </div>
      </div>
  )
}

export default buttons;