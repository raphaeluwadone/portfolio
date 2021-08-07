import About from './About/About';
import './App.css';
import Cta from './Contact/Cta';
import Home from './Home/Home';
import Navbar from './nav/Navbar';
import Projects from './Projects/Projects';
import Dropdown from './sidebar/Dropdown';
import Sidebar from './sidebar/Sidebar';
import Tools from './Tools/Tools';
import React, {useState} from 'react'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Navbar />
      <Sidebar open={open} setOpen={setOpen}/>
      <Dropdown open={open} setOpen={setOpen}/>
      <Home />
      <About/>
      <Tools />
      <Projects />
      <Cta />
    </>
  );
}

export default App;
