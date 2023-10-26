import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Title from './components/Title';

function App() {
  return (
    <div className='bg-slate-200'>
      <Navbar />
      <div className='p-10'>
        <Title />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
