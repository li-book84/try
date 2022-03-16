import React from 'react'
import Buttons from '../../component/pages/component/Buttons'
import Header from '../../component/pages/component/Header'
import '../../css/Customs/align.css'
import project01 from '../../images/projects/project001/project01.png'
import project02 from '../../images/projects/project001/project02.png'
import project03 from '../../images/projects/project001/project03.png'
import project04 from '../../images/projects/project001/project04.png'
import '../../css/carousel.css'

function Calculator() {
    select1();
  return (
      <div>
          <Header/>
          <Buttons/>
          <div>
              <h1>Calculator</h1>
              <div className='slider'>
                  <div className='preview-slide'>
                      <div className='image' id='image1'>
                          <img src={project01} className='project' alt="project01" />
                      </div>
                      <div className='image' id='image2'>
                          <img src={project02} className='project' alt="project02" />
                      </div>
                      <div className='image' id='image3'>
                          <img src={project03} className='project' alt="project03" />
                      </div>
                      <div className='image' id='image4'>
                          <img src={project04} className='project' alt="project04" />
                      </div>
                  </div>
                  <div className='selecting-slide'>
                      <div className='select1' onClick={select1}>
                          select1
                      </div>
                      <div className='select2' onClick={select2}>
                          select2
                      </div>
                      <div className='select3' onClick={select3}>
                          select3
                      </div>
                      <div className='select4' onClick={select4}>
                          select4
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}


let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let image4 = document.getElementById('image4');

function select1(){
    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
}

function select2(){
    image1.style.display = "none";
    image2.style.display = "block";
    image3.style.display = "none";
    image4.style.display = "none";
}

function select3(){
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "block";
    image4.style.display = "none";
}

function select4(){
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "block";
}

export default Calculator