import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
/* 
  RUN: 'npm run deploy' 
  every time you want to update the publication of the website
*/
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About /> 
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
