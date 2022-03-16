import React from 'react';
import Buttons from './component/Buttons';
import Header from './component/Header';
import '../../css/first.css'
import MajorLoad from './MajorLoad';
import Footer from './component/Footer';

function Major() {
  return (
      <div>
          <Header/>
          <Buttons/>
          <MajorLoad/>
          <Footer/>
      </div>
  )
}

export default Major;
