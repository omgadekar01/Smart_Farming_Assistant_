import { NavLink } from '../lib/router'
import fieldImage from '../../CROP.jpeg'
import './Home.css'

const units = [
  {
    number: '01',
    title: 'Fixed field unit',
    hardware: 'ESP32-S3 · soil moisture · BME280 · rain sensor',
    detail: 'Measures soil and local weather conditions, then sends readings over local Wi-Fi.',
    tone: 'field',
  },
  {
    number: '02',
    title: 'Central Edge-AI box',
    hardware: 'Raspberry Pi 4 · 4 GB · microSD · cooling',
    detail: 'Combines sensor data and crop images to generate on-device crop and water advice.',
    tone: 'edge',
  },
  {
    number: '03',
    title: 'Portable farmer app',
    hardware: 'Smartphone camera · KISANEDGEX app',
    detail: 'Captures crop images in the field and brings alerts and recommendations to the farmer.',
    tone: 'mobile',
  },
]

const capabilities = [
  { title: 'Field conditions', text: 'Soil moisture, temperature, humidity and rain status.' },
  { title: 'Crop-image review', text: 'Capture leaf or crop symptoms and send them for local AI analysis.' },
  { title: 'Practical advice', text: 'Get irrigation guidance, crop-health information and alerts.' },
  { title: 'Works offline', text: 'The core workflow runs over a local Wi-Fi network without internet.' },
]

function Home() {
  return (
    <main className="brochure">
      <header className="brochure-header">
        <a className="brand-lockup" href="/" aria-label="KISANEDGEX home">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>KISANEDGEX</span>
        </a>
        <nav className="brochure-nav" aria-label="Main navigation">
          <a href="#prototype">Prototype</a>
          <a href="#workflow">How it works</a>
          <a href="#technology">Technology</a>
        </nav>
        <NavLink to="/dashboard" className="header-cta">Open dashboard <span aria-hidden="true">↗</span></NavLink>
      </header>

      <section className="intro-section">
        <div className="intro-copy">
          <p className="eyebrow"><span className="status-dot" /> A local-first smart farming prototype</p>
          <h1>Better crop decisions, closer to the field.</h1>
          <p className="intro-lede">KISANEDGEX connects field sensors, edge AI and a farmer’s smartphone to turn live conditions into useful crop and irrigation advice, even without internet.</p>
          <div className="intro-actions">
            <NavLink to="/dashboard" className="primary-cta">Explore the live dashboard <span aria-hidden="true">→</span></NavLink>
            <a className="text-cta" href="#prototype">See the prototype <span aria-hidden="true">↓</span></a>
          </div>
          <div className="intro-facts" aria-label="Project highlights">
            <div><strong>3</strong><span>connected units</span></div>
            <div><strong>0</strong><span>internet required</span></div>
            <div><strong>1</strong><span>local farm network</span></div>
          </div>
        </div>
        <figure className="field-visual">
          <img src={fieldImage} alt="Crop field monitored by the KISANEDGEX prototype" />
          <figcaption><span className="visual-tag"><span className="status-dot" /> FIELD SYSTEM</span><span>Observe · process · advise</span></figcaption>
          <span className="visual-index">01 / 03</span>
        </figure>
      </section>

      <section className="prototype-section" id="prototype">
        <div className="section-heading">
          <p className="eyebrow">THE PROPOSED PROTOTYPE</p>
          <h2>Three units. One local intelligence loop.</h2>
          <p>Each part has a clear role, from sensing the field to putting the result in the farmer’s hands.</p>
        </div>
        <div className="unit-flow">
          {units.map((unit, index) => (
            <article className={`unit-card unit-${unit.tone}`} key={unit.number}>
              <div className="unit-topline"><span>{unit.number} / UNIT</span><span className="unit-symbol" aria-hidden="true">{index === 0 ? '⌁' : index === 1 ? '◈' : '▣'}</span></div>
              <h3>{unit.title}</h3>
              <p className="unit-hardware">{unit.hardware}</p>
              <p className="unit-detail">{unit.detail}</p>
              <div className="unit-connector" aria-hidden="true"><span /></div>
            </article>
          ))}
        </div>
        <div className="flow-caption"><span className="flow-line" /> LOCAL WI-FI CONNECTS THE SYSTEM <span className="flow-line" /></div>
        <div className="prototype-notes">
          <article><span>FIELD SENSING</span><p>Calibrate the capacitive moisture probe before use. The BME280 connects over I²C (SDA GPIO8, SCL GPIO9); the rain module detects rain or surface wetness.</p></article>
          <article><span>POWER &amp; PLACEMENT</span><p>Protect electronics in a water-resistant enclosure. Use regulated power, a common ground, input voltage protection and a resettable fuse.</p></article>
          <article><span>IMAGE CHECK</span><p>Crop photos travel from the phone over local Wi-Fi. If an image is unclear, the app can ask for a better capture before analysis.</p></article>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="workflow-heading">
          <p className="eyebrow">FROM FIELD TO FARMER</p>
          <h2>Data stays close.<br />Advice comes back clear.</h2>
          <p>The central box receives sensor readings and crop photos, processes them locally, then returns an advisory to the smartphone.</p>
          <NavLink to="/dashboard" className="text-cta">View the dashboard <span aria-hidden="true">↗</span></NavLink>
        </div>
        <div className="workflow-list">
          <div className="workflow-row"><span className="workflow-step">01</span><div><strong>Sense</strong><p>ESP32-S3 collects moisture and environmental readings.</p></div><span className="workflow-arrow">→</span></div>
          <div className="workflow-row"><span className="workflow-step">02</span><div><strong>Capture</strong><p>Farmer photographs a crop or leaf with a smartphone.</p></div><span className="workflow-arrow">→</span></div>
          <div className="workflow-row"><span className="workflow-step">03</span><div><strong>Analyze</strong><p>Edge AI fuses sensor data and image analysis on the Raspberry Pi.</p></div><span className="workflow-arrow">→</span></div>
          <div className="workflow-row"><span className="workflow-step">04</span><div><strong>Advise</strong><p>Irrigation guidance, crop-health alerts and recommendations return to the app.</p></div><span className="workflow-arrow">✓</span></div>
        </div>
      </section>

      <section className="capabilities-section" id="technology">
        <div className="capabilities-title">
          <p className="eyebrow">BUILT FOR FIELD CONDITIONS</p>
          <h2>Useful signals.<br />Actionable output.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <article className="capability" key={capability.title}>
              <span className="capability-number">0{index + 1}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="technology-strip">
        <div><p className="eyebrow">EDGE SOFTWARE STACK</p><h2>Designed to run on the farm.</h2></div>
        <div className="tech-tags" aria-label="Proposed software technologies">
          <span>Python</span><span>OpenCV</span><span>TensorFlow Lite</span><span>SQLite</span><span>Local Wi-Fi</span>
        </div>
      </section>

      <footer className="brochure-footer">
        <a className="brand-lockup" href="/" aria-label="KISANEDGEX home"><span className="brand-mark" aria-hidden="true">K</span><span>KISANEDGEX</span></a>
        <p>Field insight, without the cloud dependency.</p>
        <NavLink to="/dashboard" className="footer-link">Open project dashboard <span aria-hidden="true">↗</span></NavLink>
      </footer>
    </main>
  )
}

export default Home