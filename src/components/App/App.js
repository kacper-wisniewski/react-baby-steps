import React from 'react';
import styles from './App.scss';
import Hero from '../Hero/Hero.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <Hero/>
      </main>
    )
  }
}

export default App;
