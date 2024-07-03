import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Home/Header/Header';
import Subhead from './component/Home/Header/SubHead';
import Home from './component/Home/Home';
import Shop from './component/Home/routes/Shop';
import MensRoute from './component/Home/routes/MensRoute';
import WomenRoute from './component/Home/routes/WomenRoute';
import KidsRoute from './component/Home/routes/KidsRoute';
import Login from './component/auth/Login';
import Signup from './component/auth/Signup';
import Cart from './component/Cart';
import WishList from './component/WishList';
import Product from './component/product/Product';



function App() {
  return(<>
    <Router>
      <Header/>
      <Subhead/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/shop' element={<Shop/>}/>
        <Route exact path='/men' element={<MensRoute/>}/>
        <Route exact path='/women' element={<WomenRoute/>}/>
        <Route exact path='/kids' element={<KidsRoute/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/wishlist' element={<WishList/>}/>
        <Route exact path='/product' element={<Product/>}/>

      </Routes>
        <h1>Footer</h1>
      {/* <Footer/> */}
    </Router>
  </>)
}

export default App
