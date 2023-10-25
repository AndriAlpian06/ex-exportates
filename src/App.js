
import './App.css';
import Beranda from './pages/Beranda';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topbar from './components/TopBar';
import Footer from './components/Footer';
import Our_Work from './pages/Our_Work';
import Contact_Us from './pages/Contact_Us';
import Products from './pages/Products';


function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='/our_work' element={<Our_Work />} />
          <Route path='/contact_us' element={<Contact_Us />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        {/* <ButtonUp />*/}
        <Footer />
      </div> 
    </Router>
  );
}

export default App;
