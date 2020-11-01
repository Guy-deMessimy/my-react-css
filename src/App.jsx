import styles from './css.module.css';
import React from 'react';
import MySendForm from './components/MySendForm';

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <img src="/photos/wave.jpg" className={styles.Applogo} alt="" />
      </header>
      <section className="App-section">
        <h2 className={styles.mytitle}>Margaret River</h2>
        <div class={styles.rating}>
          <a href="#5" title="Donner 5 étoiles">☆</a>
          <a href="#4" title="Donner 4 étoiles">☆</a>
          <a href="#3" title="Donner 3 étoiles">☆</a>
          <a href="#2" title="Donner 2 étoiles">☆</a>
          <a href="#1" title="Donner 1 étoile">☆</a>
          <p className={styles.vote}>4,5 (413)</p>
        </div>
        <h4 className={styles.mytitle2}>Discover the soul of western Australia</h4>
        <p className={styles.description}>From 3 hours drive to Perth and easily accessible by public airlines and bus transportation. <br>
        </br>Visit the vineyards, discover the surf and windsurf famous spot, and enjoy nighlife with some friends.  </p>
      </section>
      <hr className={styles.trait}/>
      <footer className={styles.appfooter}>
        <h3 className={styles.mytitle3}>See our best selection</h3>
        <div className={styles.buttongroup}>
          <button className={styles.button}>HOTELS</button>
          <button className={styles.button}>RESTAURANTS</button>
          <button className={styles.button}>NIGHTLIFE</button>
          <button className={styles.button}>VINEYARD</button>
        </div>
        < div className={styles.comments}>
          <MySendForm />
          <button className={styles.button2}>Send</button>
        </div>
        
      </footer>  
    </div>
  );
}

export default App;
