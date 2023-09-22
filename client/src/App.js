import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home/Home';
import {Cart} from './pages/cart/Cart';
import {Navbar} from './components/Navbar';
import {Explore} from './pages/explore/Explore';
// import {Event} from './pages/events/Event';
import {About} from './pages/about_us/About';
import {Account} from './pages/account/Account'; 
import {Bestseller} from './pages/bestseller/Bestseller';
import { ShopContextProvider } from './context/shop_context';
import { Checkout } from './components/checkout';
import{AddProduct} from './components/add_product';
// import 'font-awesome/css/font-awesome.min.css';
 

function App() {
  return (
    <div className="App">
     <ShopContextProvider>
     <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/bestseller' element={<Bestseller/>}/>
          <Route path='/explore' element={<Explore />} />
          {/* <Route path='/event' element={<Event />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/account' element={<Account />} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/add_product' element={<AddProduct/>}/>
        </Routes>
      </Router>
     </ShopContextProvider>
      
    </div>
  );
}

export default App;
