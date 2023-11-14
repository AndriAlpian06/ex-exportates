import './App.css';
import Beranda from './pages/Beranda';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topbar from './components/TopBar';
import Footer from './components/Footer';
import Our_Work from './pages/Our_Work';
import Contact_Us from './pages/Contact_Us';
import Products from './pages/Products';
import Login from './pages/Login'
import SignUp from './pages/SignUp'

import {Cart} from './pages/cart/cart'
import { ShopContextProvider } from './context/shop-context';
import {Shop} from './pages/shop/shop'
import { AuthProvider } from './components/AuthToken';
import { UserProvider } from './components/UserContext';

function App() {

  return (
    <AuthProvider>
      <UserProvider>
        <ShopContextProvider>
          <Router>
            <div>
              <Topbar />
              <Navbar />
              <Routes>
                <Route path='/' element={<Beranda />} />
                <Route path='/our_work' element={<Our_Work />} />
                <Route path='/contact_us' element={<Contact_Us />} />
                <Route path='/products' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
              </Routes>
              {/* <ButtonUp />*/}
              <Footer />
            </div> 
          </Router>
        </ShopContextProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
