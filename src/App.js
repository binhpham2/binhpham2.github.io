import './App.css';
import Background from './components/background/Background'
import Welcome from './components/welcome/Welcome'
import Panel from './components/panel/Panel';
import { useEffect, useState } from 'react'
import splashGif from './images/ink/splash.gif'
import Employment from './components/employment/Employment';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
import { components } from './data/sections';

const App = () => {

  const [currentViewedSection, setCurrentViewedSection] = useState(components[0])

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
      <Panel currentViewedSection={currentViewedSection} setCurrentViewedSection={setCurrentViewedSection} />
      {/* Animated sumi-e background and animated leafs. */}
      <Background />

      {/*--------------*/}
      {/* CONTENT VIEW */}
      {/*--------------*/}
      {/* Unlike other sections, Welcome is loaded once, and never removed. Reason is specified in ./components/welcome/Welcome.jsx */}
      <Welcome currentViewedSection={currentViewedSection}/>
      {/* View only one section at a time. */}
      { 
        (currentViewedSection === 'Employment') ? <Employment /> 
        : (currentViewedSection === 'Education') ? <Education /> 
        : (currentViewedSection === 'Projects') ? <Projects />
        : null 
      }
    </div>
  );
}

export default App;
