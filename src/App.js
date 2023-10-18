import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Title from './components/Title';

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <About />
      <Projects />
    </div>
  );
}

export default App;
