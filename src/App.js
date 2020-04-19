import React from 'react';
import logo from './logo.png';
import newLogo from './new_logo.png';
import KJP from './Components/Projects/KJPresleyDesigns/KJP';
import Ravenous from './Components/Projects/Ravenous/ravenous';
import HomeHistory from './Components/Projects/HomeHistory/homehistory';
import Resume from './Components/Resume/resume';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className='mainHead'>
      <hgroup className='header'>
        <figure>
            <img src={newLogo} alt='Logo'/>
          </figure>
        <h3>Web Developer - Portfolio</h3>
      </hgroup>
      <nav className='headNav'>
        <ul>
          <li><a href="https://github.com/sshuman95" rel="noopener noreferrer" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/sidney-shuman-604966160/" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li>Contact</li>
         
        </ul>
      </nav>
      <section className='headSec'>
        <article>
          <figure>
            <img src={logo} alt='Sidney Shuman' className='me'/>
          </figure>
          <h3>About Me</h3>
          <p>My name is Sidney Shuman. I am web developer located in Richmond, Virginia. I like to code things from scratch, and enjoy bringing ideas to life. Feel free to check out the projects I've worked on below. </p>
        </article>
      </section>
      </header>
      <main>
        <article id='projects'>
          <KJP/>
          <Ravenous/>
          <HomeHistory/>
        </article>
        <article id='resume'>
          <Resume/>
        </article>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;