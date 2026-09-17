import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <span>&lt;/&gt;</span>
          <strong>Amar Suleman Kujur</strong>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#rom-releases">ROMs</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="github-link"
          href="https://github.com/Lordputin404/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.88 10.94.58.11.79-.25.79-.56v-2.01c-3.21.7-3.89-1.54-3.89-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
            />
          </svg>
        </a>
      </header>


      {/* Hero */}
      <main id="home" className="hero-section">
        <div className="hero-content">

          <p className="eyebrow">Hi, I'm</p>

          <h1>
            Amar <span> Suleman Kujur</span>
          </h1>

          <h2>
            BCA Student <span>•</span> Developer <span>•</span> Open Source
            Enthusiast
          </h2>

          <p className="hero-description">
            I build software and explore systems through Android, AOSP and Linux.
            My work includes custom ROM development, Linux kernel development,
            automation and open-source projects, with a focus on learning by
            building, experimenting and sharing.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work <span>→</span>
            </a>

            <a
              href="https://github.com/Lordputin404/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>
          </div>

          <p className="quote">
            "Learning, Building, Breaking, Fixing, Repeating..."
          </p>

        </div>

        <div className="hero-decoration">
          <div className="glow"></div>
          <div className="code-symbol">&lt;/&gt;</div>
        </div>
      </main>


      {/* Quick Stats */}
      <section className="stats">
        <div className="stat">
          <strong>Android</strong>
          <span>Application Development</span>
        </div>

        <div className="stat">
          <strong>AOSP</strong>
          <span>Custom ROM Development</span>
        </div>

        <div className="stat">
          <strong>Linux</strong>
          <span>Kernel &amp; System Work</span>
        </div>

        <div className="stat">
          <strong>Open Source</strong>
          <span>GitHub Projects &amp; Releases</span>
        </div>
      </section>


      {/* About */}
      <section id="about" className="section">
        <div className="section-heading">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-card">

          <div className="about-text">
            <p>
              I'm a BCA student and developer who enjoys building things and
              exploring how technology works beyond the surface. My main interests
              are Android, AOSP, Linux and open-source development.
            </p>

            <p>
              From building custom ROMs and working with Linux kernels to creating
              software projects and automation workflows, I like learning through
              hands-on experimentation, solving problems and turning ideas into
              working projects.
            </p>

            <div className="about-tags">
              <span>Problem Solver</span>
              <span>Self Learner</span>
              <span>Open Source</span>
              <span>Linux Enthusiast</span>
            </div>
          </div>

          <div className="about-quote">
            <div>
              <strong>Same curiosity.</strong>
              <strong>Different tools.</strong>
              <strong>Bigger horizons.</strong>
            </div>

            <code>$ chase_progress --not --perfection</code>
          </div>

        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-heading">
          <span>02</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          {/* 01 - Custom ROM */}
          <article className="project-card featured-project">
            <div className="project-number">01</div>

            <div className="project-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="5" y="2.5" width="14" height="19" rx="2.5" />
                <circle cx="12" cy="18" r="1" />
                <path d="M9 6h6M9 9h6M9 12h3" />
              </svg>
            </div>

            <h3>Custom ROM Development</h3>

            <p>
              Android custom ROM development and builds across multiple ROM
              projects and devices, working with AOSP, device trees, vendor,
              kernels and automated build pipelines.
            </p>

            <div className="tags">
              <span>AOSP</span>
              <span>Android</span>
              <span>Linux</span>
              <span>GitHub Actions</span>
            </div>

            <a href="#rom-releases" className="project-link">
              View ROM Releases →
            </a>
          </article>


          {/* 02 - GP Connect */}
          <article className="project-card">
            <div className="project-number">02</div>

            <div className="project-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 19.5a4.5 4.5 0 0 1 0-9h10a4.5 4.5 0 0 1 0 9H7Z" />
                <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
                <circle cx="9" cy="15" r="1" />
                <circle cx="15" cy="15" r="1" />
              </svg>
            </div>

            <h3>GPC Connect</h3>

            <p>
              An Android application built for the college community, bringing
              useful student-focused features and resources together in one place.
            </p>

            <div className="tags">
              <span>Android</span>
              <span>Java/Kotlin</span>
            </div>

            <a
              href="https://github.com/Lordputin404/GP-Connect"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </article>


          {/* 03 - Kernel */}
          <article className="project-card">
            <div className="project-number">03</div>

            <div className="project-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="6" y="6" width="12" height="12" rx="2" />
                <path d="M9 9h6v6H9z" />
                <path d="M9 2v4M12 2v4M15 2v4M9 18v4M12 18v4M15 18v4M2 9h4M2 12h4M2 15h4M18 9h4M18 12h4M18 15h4" />
              </svg>
            </div>

            <h3>SM8250 Kernel Development</h3>

            <p>
              Linux kernel development and experimentation for Snapdragon SM8250
              based devices, including kernel modifications, builds and Android
              integration.
            </p>

            <div className="tags">
              <span>Linux Kernel</span>
              <span>Clang</span>
              <span>Android</span>
            </div>

            <a
              href="https://github.com/Lordputin404/xiaomi_sm8250_kernel_e404"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </article>


          {/* 04 - Rom Mirror */}
          <article className="project-card">
            <div className="project-number">04</div>

            <div className="project-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 7v5h-5" />
                <path d="M4 17v-5h5" />
                <path d="M6.2 9a7 7 0 0 1 11.3-2L20 12" />
                <path d="M17.8 15a7 7 0 0 1-11.3 2L4 12" />
              </svg>
            </div>

            <h3>ROM Mirror Automation</h3>

            <p>
              Automation workflow for mirroring Android ROM releases across hosting
              platforms, helping streamline file transfers, release handling and
              distribution.
            </p>

            <div className="tags">
              <span>GitHub Actions</span>
              <span>Shell / Bash</span>
              <span>Automation</span>
              <span>SourceForge</span>
            </div>

            <a
              href="https://github.com/Lordputin404/rom-mirror-automation"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </article>

        </div>
      </section>

            {/* ROM Releases */}
      <section id="rom-releases" className="section">
        <div className="section-heading">
          <span>03</span>
          <h2>ROM Releases</h2>
        </div>

        <p className="section-description">
          Android custom ROM builds for POCO F4 (munch), covering multiple
          ROM projects based on Android 15 and Android 16.
        </p>

        <div className="rom-grid">

          <article className="rom-card">
            <span className="rom-number">01</span>
            <h3>Lunaris-AOSP</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 16</span>
          </article>

          <article className="rom-card">
            <span className="rom-number">02</span>
            <h3>Project Infinity-X</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 16</span>
          </article>

          <article className="rom-card">
            <span className="rom-number">03</span>
            <h3>Project Matrixx</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 16</span>
          </article>

          <article className="rom-card">
            <span className="rom-number">04</span>
            <h3>VoltageOS</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 16</span>
          </article>

          <article className="rom-card">
            <span className="rom-number">05</span>
            <h3>AxionOS</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 16</span>
          </article>

          <article className="rom-card">
            <span className="rom-number">06</span>
            <h3>YAAP</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 16</span>
          </article>

          <article className="rom-card">
            <span className="rom-number">07</span>
            <h3>TheCloverProject</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 16</span>
          </article>

          <article className="rom-card">
            <span className="rom-number">08</span>
            <h3>Mist OS</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 16</span>
          </article>

          <article className="rom-card">
            <span className="rom-number">09</span>
            <h3>AlphaDroid</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 16</span>
          </article>

          <article className="rom-card">
            <span className="rom-number">10</span>
            <h3>Evolution X</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 16</span>
          </article>

          <article className="rom-card">
            <span className="rom-number">11</span>
            <h3>RisingOS Revived</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 16</span>
          </article>

          <article className="rom-card">
            <span className="rom-number">12</span>
            <h3>eOS</h3>
            <p>POCO F4 • munch</p>
            <span className="rom-version">Android 15</span>
          </article>

        </div>

        <div className="rom-action">
          <a
            href="https://sourceforge.net/projects/munch-roms/files/"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            View All ROM Releases →
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-heading">
          <span>04</span>
          <h2>Tech Stack</h2>
        </div>

        <div className="stack-category">
          <h3>Core &amp; Hands-on</h3>

          <div className="skills">
            <span>Python</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Linux</span>
            <span>Android</span>
            <span>AOSP</span>
            <span>Linux Kernel</span>
            <span>GitHub Actions</span>
            <span>C</span>
            <span>C++</span>
            <span>Shell / Bash</span>
          </div>
        </div>

        <div className="stack-category">
          <h3>Android &amp; System</h3>

          <div className="skills">
            <span>Custom ROM Building</span>
            <span>Device Trees</span>
            <span>Vendor Trees</span>
            <span>Kernel Building</span>
            <span>Android System</span>
            <span>Build Automation</span>
          </div>
        </div>

        <div className="stack-category">
          <h3>Familiar &amp; Additional</h3>

          <div className="skills">
            <span>Java</span>
            <span>Kotlin</span>
            <span>JavaScript</span>
            <span>MySQL</span>
            <span>ESP32</span>
            <span>Arduino</span>
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <span>05</span>
          <h2>Let's Connect</h2>
        </div>

        <p>
          Interested in my projects, open-source work, or just want to connect?
        </p>

        <div className="contact-links">

          {/* GitHub */}
          <a
            href="https://github.com/Lordputin404/"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.88 10.94.58.11.79-.25.79-.56v-2.01c-3.21.7-3.89-1.54-3.89-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
              />
            </svg>
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/amar-s-kujur/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M5.25 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 8.5h3.5V20H3.5V8.5ZM9 8.5h3.36v1.57h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41V20h-3.5v-5.63c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.15 1.46-2.15 2.97V20H9V8.5Z" />
            </svg>
            LinkedIn
          </a>

          {/* Email */}
          <a href="mailto:amarkujur4583@gmail.com">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13ZM5.5 5a.5.5 0 0 0-.5.5v.62l7 4.67 7-4.67V5.5a.5.5 0 0 0-.5-.5h-13ZM19 8.52l-6.45 4.3a1 1 0 0 1-1.1 0L5 8.52v9.98a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V8.52Z" />
            </svg>
            Email
          </a>

        </div>
      </section>


      {/* Footer */}
      <footer>
        <div>
          <strong>Amar Kujur</strong>
          <p>BCA Student • Developer • Open Source Enthusiast</p>
        </div>

        <p>Build • Learn • Share • Repeat</p>
      </footer>

    </div>
  )
}

export default App