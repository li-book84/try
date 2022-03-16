import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/FAQLoad.css'
import FAQHead from './FAQHead'

function FAQLoad() {
  return (
      <div className='main'>
          <FAQHead/>
            <div className='questions'>
                <div className='question-list'>
                    <Link to='/FAQ/How+to+buy+a+project' className='links'>
                        + How to buy a project ?
                    </Link>
                </div>
            </div>
      </div>
  )
}


export default FAQLoad