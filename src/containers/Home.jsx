import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

function Home() {

  return (
    <div className="Home">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home;
