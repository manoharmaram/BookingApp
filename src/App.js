//import logo from './logo.svg';
import './App.css';
//import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom' 
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Reviews from './components/reviews';
import MemberShip from './components/membership';
import More from './components/more';



function App() {
  
  return (
  
    <div className="App">
       <Header/>
      <Main/>
     

      <footer>
      <Routes>
<Route path="footer" element={<Footer/>}/>
<Route path="reviews" element={<Reviews/>}/>
<Route path="membership" element={<MemberShip/>}/>
<Route path="more" element={<More/>}/>

</Routes>
      </footer>
      
    </div>
  );
}

export default App;
