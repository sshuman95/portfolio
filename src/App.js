import React from 'react';
import logo from './logo.jpg';
import newLogo from './new_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='mainHead'>
      <hgroup className='header'>
        <figure>
            <img src={newLogo}/>
          </figure>
        <h3>Web Developer - Portfolio</h3>
      </hgroup>
      <nav className='headNav'>
        <ul>
          <li>Github</li>
          <li>LinkedIn</li>
          <li>third</li>
        </ul>
      </nav>
      <section className='headSec'>
        <article>
          <figure>
            <img src={logo} className='me'/>
          </figure>
          <h3>About Me</h3>
          <p>My name is Sidney Shuman. I am web developer located in Richmond, Virginia. I'm skilled in HTML, CSS, JS, React, Node, and Express. Feel free to browse the projects I've worked on below. </p>
        </article>
      </section>
      </header>
      <main>
        <section className='section1'>
          <article>
            <header>
              <h3>KJPresley Designs</h3>
              <p><a href='http://www.google.com' target='_blank' rel="noopener noreferrer">Github</a> | <a href='google.com' rel="noopener noreferrer" target='_blank'>Live</a></p>
            </header>
            <p>Any thoughts on this?</p>
          </article>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
