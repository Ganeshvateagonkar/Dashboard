
import './App.css';
import SideMenu from './components/SideMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Content from './components/Content';
import Contact from './components/Contact';
import Design from './components/Design';

function App() {

  const [inactive, setInactive] = useState(false);

  return (
    <div className="App" >
      <Router>
        <SideMenu onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive)
        }} />

        <div className={`container ${inactive ? 'inactive' : ''}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/content' element={<Content />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/design' element={<Design />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
