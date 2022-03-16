import React from 'react';
import Buttons from './component/Buttons';
import Header from './component/Header';
import '../../css/first.css'
import MinorLoad from './MinorLoad';
import Footer from './component/Footer';

function Minor() {
  return (
      <div>
          <Header/>
          <Buttons/>
          <MinorLoad/>
          <Footer/>
      </div>
  )
}
export default Minor;