import React from 'react';
import './KJP.css';
import Image from './kjp_image.PNG'
function KJP() {
    return (
          <section className='kjp'>
             <header>
                <h3>KJPresley Designs</h3>
                <p><a href='https://github.com/sshuman95/kjpresleydesigns' target='_blank' rel="noopener noreferrer">GitHub</a> | <a href='https://www.kjpresleydesigns.com/' rel="noopener noreferrer" target='_blank'>Live</a></p>
              </header>
            <article>
              <figure>
                <img src={Image} alt='KJPresley Designs Website' className='kjpImage'/>
              </figure>
              <div style={{display:'flex',flexDirection:'column'}}>
              <p>This project was an e-commerce application for a personal knitting store. </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </article>
          </section>
    );
  }
  
  export default KJP;