import './App.css';
import Background from './components/background/Background'
import Welcome from './components/welcome/Welcome'
import Panel from './components/panel/Panel';
import { useEffect } from 'react'
import splashGif from './images/ink/splash.gif'
import Employment from './components/employment/Employment';
import Education from './components/education/Education';

const App = () => {
  // Handle animation and scrolling effects
  useEffect(() => {
    /*------------------*/
    /* INITIAL SETTINGS */
    /*------------------*/
    // Make sure page is scrolled to top on reload
    window.history.scrollRestoration = 'manual'

    /*-----------------------------*/
    /* INK-SPLASH ANIMATION HANDLE */
    /*-----------------------------*/
    // Disable scrolling on reload so that ink-splash animation has enough time to finish...
    document.documentElement.style.overflow = "hidden";

    // ...Enable again scrolling in a few seconds after ink-splash animation almost finishes.
    setTimeout(() => {
        document.documentElement.style.overflow = "auto";
    }, 6000);

    // Reload GIFs so that ink-splash animation is rerun on reload.
    const element = document.querySelector(".FirstBackground");
    if (element) {
      const timestamp = new Date().getTime(); // Generate a unique timestamp
      element.style.maskImage = `url(${splashGif}?cacheBust=${timestamp})`;
      element.style.WebkitMaskImage = `url(${splashGif}?cacheBust=${timestamp})`; // For WebKit browsers
    }
  }, []);

  return (
    <div className='App'>
      {/*------------------*/}
      {/* ALTERNATIVE VIEW */}
      {/*------------------*/}
      {/* Text on dark screen covering everything. Shown when the screen width is too small. */}
      <p>Please enlarge your window or rotate your phone.</p>

      {/*-----------------*/}
      {/* PERSISTING VIEW */}
      {/*-----------------*/}
      {/* Menu of buttons on top of the screen for navigation assistance. */}
      <Panel />
      {/* Animated sumi-e background and animated leafs. */}
      <Background />

      {/*--------------*/}
      {/* CONTENT VIEW */}
      {/*--------------*/}
      {/* Name and a brief self-introduction. */}
      <Welcome />
      {/* Employment summary and history. */}
      <Employment />
      {/* Education. */}
      <Education />
      {/* Projects. */}
      <></>
      {/* Certificates. */}
      <></>
    </div>
  );
}

export default App;
