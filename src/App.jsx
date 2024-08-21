// src/App.jsx
import React from 'react';
import styles from './App.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from "./components/Contact/Contact";
import { LanguageProvider } from './components/language/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className={styles.App}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
