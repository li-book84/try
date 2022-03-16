import React from 'react';
import Buttons from './component/Buttons';
import Header from './component/Header';
import Footer from './component/Footer';
import FirstLoad from './FirstLoad';
import '../../css/first.css'
import FAQ from './FAQ';

function First() {
  return (
      <div>
          <Header/>
          <Buttons/>
          <FAQ/>
          <FirstLoad/>
          <Footer/>
      </div>
  )
}

export default First;