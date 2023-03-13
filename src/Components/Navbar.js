import React, { Component ,useEffect ,useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './style.css';
import ProductCard from './ProductCard';
import cat1 from '../assets/img/cat/at3.webp'
import { getUser,Cartlength } from '../Services/AuthService';

export default function Navbar(props) {
const navigate=useNavigate();
const user=getUser();
// const cartLen=Cartlength();
// const [len,setLen]=useState(0);

const [isLogged, setisLogged] = useState(false);
useEffect(() => {
  checkStorage();
  return () => {};
}, [isLogged]   );
function checkStorage() {
  if (user) {
    setisLogged(true);
  } else {
    setisLogged(false);
  }
}

const logout = () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("id");
  sessionStorage.removeItem("usertype");
  setisLogged(false);
  alert("Logout Done Successfully");
  navigate("/");window.location.reload(); 
};
const useretype=sessionStorage.getItem('usertype');
console.log(useretype);  
return (
    
    
    <header className='header_area'>
      {/* {!isLogged ? (
          <Link color="inherit">Login</Link>
        ) : (
          <Link color="inherit" onClick={logout}>
            Logout
          </Link>
        )} */}
<nav className="navbar navbar-expand-lg navbar-light bg-light"  >
  <div class="container-fluid" >
    <a class="navbar-brand"  href="#">Oneplace</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        {useretype!="seller" ? 
        <li class="nav-item">
        <Link class="nav-link" to="registrationform">New User : Create an Acount</Link>
        
      </li>:
       
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item"><li class="nav-item">
          <Link class="nav-link" to="/sellerdash">Seller Home</Link>
        </li>

         </li>
        <li class="nav-item">
          <Link class="nav-link" to="addproduct">Add Product</Link>
        </li>
     
        </ul>
        
        
}   
       
      </ul>
     
      <ul class="navbar-nav">
      {!isLogged ? (<ul class="navbar-nav">
      <li class="nav-item">
          <Link class="nav-link " to="login" >Login</Link>
        </li></ul>):(
        <ul class="navbar-nav"> 
        <li class="nav-item">
          <span className='nav-link'>Welocme {user}</span>
        </li>
        {useretype!="seller" ?  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Action :
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="cart">View Cart
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></Link></li>
            <li ><Link className="dropdown-item" to="myorders">My Orders</Link></li>
            <li><Link className="dropdown-item" onClick={logout}>Logout</Link></li>
            <li><hr className="dropdown-divider" /></li>
          </ul>
        </li>
       : <li  class="nav-item"  ><Link class="nav-link" onClick={logout}>Logout</Link></li>
      }
        </ul>
        )}
       
        
       
        </ul>
    </div>
  </div>
</nav>
      </header>
  );
}
