import React from 'react';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';

import styles from '.'

function App() {
  return (
    <main>
      <Navigation />
      <div className={styles.homeImg}>
        <div>
          <h1 className={styles.homeName}>BISRAT AMTATAW</h1>
          <h2 className={styles.homeTitle}>SOFTWARE ENGINEER</h2>
        </div>
      </div>
      <Technologies />
      <Projects />
      <About />
    </main>
  );
}

export default App;