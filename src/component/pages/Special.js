import React from 'react';
import Buttons from './component/Buttons';
import Header from './component/Header';
import '../../css/first.css'
import SpecialLoad from './SpecialLoad';
import Footer from './component/Footer'

function Special() {
  return (
      <div>
          <Header/>
          <Buttons/>
          <SpecialLoad/>
          <Footer/>
      </div>
  )
}

export default Special;
