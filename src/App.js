//import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom' 
import Footer from './components/Footer';
//import Header from './components/Header';
import Main from './components/Main';
import Reviews from './components/reviews';
import MemberShip from './components/membership';
import More from './components/more';
import Cartimg from '../src/img/grocery-store.png';
import Cart from './components/cart'
import Login from './components/login';
import Loginimg from '../src/img/enter.png';




function App() {
  return (
    <div className="App">
       <header>
      <nav>
           <Link to="footer">Home</Link>
           <Link to="reviews">Reviews</Link>
          <Link to="membership">MemberShip</Link>
          <Link to="more">More</Link>
          <Link to="cart"><img src={Cartimg} alt='cart'/></Link>
          <Link to="login"><img src={Loginimg} alt='login'/></Link>
        </nav>
      </header> 
      <Main/>  
      <footer>
      <Routes>
<Route path="footer" element={<Footer/>}/>
<Route path="reviews" element={<Reviews/>}/>
<Route path="membership" element={<MemberShip/>}/>
<Route path="more" element={<More/>}/>
<Route path="cart" element={<Cart/>}/>
<Route path="login" element={<Login/>}/>
</Routes>
      </footer>
      
    </div>
  );
}

export default App;
