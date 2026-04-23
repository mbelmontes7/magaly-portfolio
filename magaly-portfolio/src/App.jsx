import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import SectionNav from './SectionNav';

function App()
{
  return (
    <main className="relative isolate">
      <SectionNav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
export default App;
