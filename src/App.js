import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import Login from './Components/Login';
import Logout from './Components/Logout';
import UserCart from './Components/UserCart';
import Footer from './Components/Footer';
import MyOrders from './Components/MyOrders';
import Sellerdash from './Components/Sellerdash';
import SellerRegistration from './Components/SellerRegistration';
import Sellerlogin from './Components/Sellerlogin';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import RegistrationForm from './Components/userRegistration';
import AddProduct from './Components/AddProduct';

function App(props) {


  return (
  <>
  
  <Router>
  
  <Navbar/>
    <Routes> 
    <Route path='registrationform' element={<RegistrationForm/> } />
    <Route path='/' element={<ProductCard/>} />
    <Route path='addproduct' element={<AddProduct/>} />
    <Route path='login' element={<Login/>} />
    <Route path="logout" element={<Logout/>}/>
    <Route path="cart" element={<UserCart/>}/>
    <Route path="sellerdash" element={<Sellerdash/>}/>
    <Route path="registerseller" element={<SellerRegistration/>}/>
    <Route path="sellerlogin" element={<Sellerlogin/>}/>
<Route path="myorders" element={<MyOrders></MyOrders>}></Route>

     </Routes>
    <Footer></Footer>
     </Router>
     </>
  );
}

export default App;
