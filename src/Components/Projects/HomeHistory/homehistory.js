import React from 'react';
import './homehistory.css';
import Image from './home.PNG'

function HomeHistory() {
    return (
          <section className='homeHistory'>
             <header>
                <h3>Home History</h3>
                <p><a href='https://github.com/sshuman95/homehistory' target='_blank' rel="noopener noreferrer">GitHub</a> | <a href='https://homehistory.org/' rel="noopener noreferrer" target='_blank'>Live</a></p>
              </header>
            <article>
            <figure>
                <img src={Image} className='homeHistoryImage'/>
              </figure>
              <div style={{display:'flex',flexDirection:'column'}}>
              <p>This project was an e-commerce application for a personal knitting store. </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              
            </article>
          </section>
    );
  }
  
  export default HomeHistory;