import './App.scss';
import '../node_modules/bootstrap/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Parent from './components/Parent/Parent';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  );

}

export default App;

