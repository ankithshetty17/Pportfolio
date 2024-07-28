

import { useRef } from 'react';
import './App.css';
import { About, Contact, Experience, Footer, Header, Profile, Projects, Skills } from './components';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
       <section ref={homeRef} id="home">
      <Header />
     
        <Profile />
      </section>
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={experienceRef} id="experience">
        <Experience />
      </section>
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      <section ref={skillsRef} id="skills">
        <Skills />
      </section>
      <section ref={contactsRef} id="contacts">
        <Contact />
      </section>
      <Footer
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactsRef={contactsRef}
      />
    </div>
  );
}

export default App;
