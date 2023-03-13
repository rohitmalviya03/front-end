import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';

import './style.css';           
export default function Sellerdash() {
  return (
    <>
 
  
    <div class=" navbar-collapse" >
      <h3>Seller Dashboard</h3>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/changepwd">Change Password</Link>
        </li>
     
        <li class="nav-item">
          <Link class="nav-link" to="/addcategory">Add Category</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/addproduct">Add Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/addproduct">View Orders</Link>
        </li>
        </ul>
    </div>
 
    
    </>
     );
}
