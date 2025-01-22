//"./App.css";
import Navbar from "./Navbar";
import styles from "./App.module.css";
import app from "./img/App.png";
import visual from "./img/Visual.png";
import visual2 from "./img/Visual2.png";

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

      <section className={styles.featuresSection}>
        {/* Judul utama */}
        <h2 className={styles.title3}>Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</h2>

        {/* Grid fitur */}
        <div className={styles.grid2}>
          {/* Baris pertama */}
          <div className={`${styles.card2} ${styles.cardSquare}`}>
            <img src={visual} alt="SEO goal setting" className={styles.image} />
            <h3>SEO goal setting</h3>
            <p>Helps you set and achieve SEO goals with guided assistance.</p>
          </div>

          <div className={`${styles.card2} ${styles.cardWide}`}>
            <img src="./img/feature2.png" alt="User-friendly dashboard" className={styles.image} />
            <h3>User-friendly dashboard</h3>
            <p>Perform complex SEO audits and optimize with a single click.</p>
          </div>

          {/* Baris kedua */}
          <div className={`${styles.card2} ${styles.cardWide}`}>
            <img src="./img/feature3.png" alt="Visual reports" className={styles.image} />
            <h3>Visual reports</h3>
            <p>Visual insights into your site's performance.</p>
          </div>

          <div className={`${styles.card2} ${styles.cardSquare}`}>
            <img src={visual2} alt="Smart Keyword Generator" className={styles.image} />
            <h3>Smart Keyword Generator</h3>
            <p>Automatic suggestions and the best keywords to target.</p>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection1}>
        {/* Judul utama */}
        <h2 className={styles.featuresTitle}>Elevate your SEO efforts.</h2>

        {/* Grid daftar fitur */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <h3>User-friendly dashboard</h3>
            <p>Perform complex SEO audits and optimizations with a single click.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Content evaluation</h3>
            <p>Simple corrections for immediate improvements.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Link Optimization Wizard</h3>
            <p>Guides you through the process of creating and managing links.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Visual reports</h3>
            <p>Visual insights into your site's performance.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>SEO goal setting</h3>
            <p>Helps you set and achieve SEO goals with guided assistance.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>One-click optimization</h3>
            <p>Perform complex SEO audits and optimizations with a single click.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Smart Keyword Generator</h3>
            <p>Automatic suggestions and the best keywords to target.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Automated alerts</h3>
            <p>Automatic notifications about your SEO health, including quick fixes.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Competitor reports</h3>
            <p>Provides insights into competitors' keyword strategies and ranking.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
