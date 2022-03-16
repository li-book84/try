import React from 'react';
import fb from '../../../images/fb.svg'
import instagram from '../../../images/instagram.svg'
import youtube from '../../../images/youtube.svg'
import twitter from '../../../images/twitter.svg'
import linkedin from '../../../images/linkedin.svg'
import github from '../../../images/github.svg'
import pinterest from '../../../images/pinterest.svg'
import '../../../css/footer.css'

function Footer() {
  return (
      <div className='fixit'>
          <div className='footer-social'>
              <div className='icon-div'>
                <img src={fb} alt='fb' className='icon fb' onClick={fbLink}/>
              </div>
              <div className='icon-div'>
                <img src={instagram} alt='instagram' className='icon instagram' onClick={instagramLink}/>
              </div>
              <div className='icon-div'>
                <img src={youtube} alt='youtube' className='icon youtube' onClick={youtubeLink}/>
              </div>
              <div className='icon-div'>
                <img src={twitter} alt='twitter' className='icon twitter' onClick={twitterLink}/>
              </div>
              <div className='icon-div'>
                <img src={linkedin} alt='linkedin' className='icon linkedin' onClick={linkedinLink}/>
              </div>
              <div className='icon-div'>
                <img src={github} alt='github' className='icon github' onClick={githubLink}/>
              </div>
              <div className='icon-div'>
                <img src={pinterest} alt='pinterest' className='icon pinterest' onClick={pinterestLink}/>
              </div>
          </div>
      </div>
  )
}

function fbLink(){
    window.open('https://www.facebook.com/#');
}

function instagramLink(){
    window.open('https://www.instagram.com/#');
}

function youtubeLink(){
    window.open('https://www.youtube.com/#');
}

function twitterLink(){
    window.open('https://www.twitter.com/#');
}

function linkedinLink(){
    window.open('https://www.linkedin.com/#');
}

function githubLink(){
    window.open('https://www.github.com/#');
}

function pinterestLink(){
    window.open('https://www.pinterest.com/#');
}

export default Footer;
