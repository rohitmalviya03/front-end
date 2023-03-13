import axios from 'axios';
import imgs from '../Components/assets/img/cat/a.png'

import React ,{ useEffect, useState  }from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import { setUserSession } from '../Services/AuthService';
export default function Sellerlogin(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[session ,setSession]=useState("sdfsdf");
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(false);
  const[userType,setUserType]=useState('');
 const navigate=useNavigate();
  const [error, setError] = useState(null);

  const [user ,setUser]  = useState({

    email:'',
    password:''
  });
 
 const handleOnchange=(event)=>{
  const { name, value } = event.target;
  setUser((user) => ({ ...user, [name]: value }));

 }
 const handleSubmit = (e) => {
  setError(null);
  e.preventDefault();
  const data = new FormData();
  data.append('email',user.email);
  data.append('password',user.password);
 console.log("dad",data);

  axios.post('http://127.0.0.1:9996/api/users/authenticateseller', { email: user.email, password: user.password },{
   
  } 
  
  )
.then(response => {
  console.log('Form data submitted successfully!',response);
  console.log('dgf',response.data.id);
  setUserSession(response.data.token, response.data.name,response.data.id);
  sessionStorage.setItem('usertype', "seller");
  navigate("/sellerdash");window.location.reload(); 
  
  
})
.catch(error => {
  setLoading(false);
  if (error.response.status === 401) setError("Invalid Password");
  else if(error.response.status === 500) setError("Invalid Email");
  else setError("Something went wrong. Please try again later.");
  console.error('Error occurred while submitting form data:', error);
});


 }

 



  return (
   <>
     <div class="checkout_area">
        <div class="container">
            <div class="row"> 
   <div class="col-12 col-md-6 ">
                    <div class="checkout_details_area clearfix ml-30">
<p></p>
	<br/>
<br/><br/><br/>
                        <div class="cart-page-heading  ">
                            <h5>Seller  Login Form</h5>
                        </div>
                        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                        <form onSubmit={handleSubmit}>
                            <div class="row ">
                                <div class="col-md-6 mb-3">
                                    <label for="first_name">User Name or Email <span>*</span></label>
                                    <input type="text" class="form-control" name="email" id="email" onChange={handleOnchange} value={user.email} required />
                                    <label for="last_name">Password<span>*</span></label>
                                    <input type="password" class="form-control" name="password" onChange={handleOnchange} id="password" value={user.password} required />
                               
                                </div>
                                <div class="col-md-6 mb-3">
                              </div>
                               
                            </div>
                            
                        <input type="submit" class="btn essence-btn"  value="Login"/>
                        
                        </form>
                        <br></br>
                        <Link to="/registrationform" className="btn essence-btn">Create an Account</Link>  
        
                    </div>
                    <br/><br/>
                                   </div>
                                   <div class="col-12 col-md-6 col-lg-5 ml-lg-auto">
                    <div class="order-details-confirmation">

                      

                        

                     <img src={imgs}></img>
                    </div>
                </div>
                       </div></div></div>     
   </>
  );
}
