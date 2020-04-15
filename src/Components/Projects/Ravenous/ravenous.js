import React from 'react';
import './ravenous.css';
import Image from './ravenous.PNG'

function Ravenous() {
    return (
          <section className='ravenous'>
             <header>
                <h3>Ravenous</h3>
                <p><a href='https://github.com/sshuman95/ravenous' target='_blank' rel="noopener noreferrer">GitHub</a> | <a href='https://wrong-cherries.surge.sh/' rel="noopener noreferrer" target='_blank'>Live</a></p>
              </header>
            <article>
              <div style={{display:'flex',flexDirection:'column'}}>
              <p>This project was an e-commerce application for a personal knitting store. </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <figure>
                <img src={Image} className='ravenousImage' alt='Ravenous website'/>
              </figure>
            </article>
          </section>
    );
  }
  
  export default Ravenous;