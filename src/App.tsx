//"./App.css";
import Navbar from "./Navbar";
import styles from "./App.module.css";
import app from "./img/App.png";

function App() {
  return (
    <>
      <Navbar />
      <main className={styles.hero}>
        {/* Hero Section */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>NEW 🚀 Latest integration just arrived</span>
          <h1 className={styles.title}>Boost your rankings with AI.</h1>
          <p className={styles.subtitle}>Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>
          <button className={styles.startBtn}>Start for free</button>
        </div>

        {/* Dashboard Section */}
        <div className={styles.dashboard}>
          <img src={app} alt="Dashboard Overview" className={styles.dashboardImage} />
        </div>
      </main>

      <div className={styles.trustedSection}>
        <p className={styles.title2}>Trusted by the world’s most innovative teams</p>
        <div className={styles.grid}>
          <div className={styles.card}>Acme Corp</div>
          <div className={styles.card}>Echo Valley</div>
          <div className={styles.card}>Quantum</div>
          <div className={styles.card}>PULSE</div>
          <div className={styles.card}>Outside</div>
          <div className={styles.card}>APEX</div>
          <div className={styles.card}>Celestial</div>
          <div className={styles.card}>2TWICE</div>
        </div>
      </div>
    </>
  );
}

export default App;
