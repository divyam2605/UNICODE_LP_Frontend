import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Experience from './pages/Experience'
import ContactMe from './pages/ContactMe'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DrawerAppBar from './pages/DrawerAppBar';
import Contribute from './pages/Contribute';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
} 

export default App;
