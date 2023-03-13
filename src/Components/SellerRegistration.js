
import { signUp ,sellersave} from '../Services/userService';
import imgs from '../Components/assets/img/cat/regg.png'
import React, { useEffect, useState  } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function SellerRegistration() {
    const initialFormState = {
       category:'',
       
        firstName: '',
        lastName:'',
        city: '',
        country: '',
        email: '',
        password: '',
        pincode: '',
        phoneNumber:''
      };
      const [group, setGroup] = useState(initialFormState);
      const navigate = useNavigate();
      const { id } = useParams();
    
   
      const handleChange = (event) => {
        const { name, value } = event.target
    
        setGroup({ ...group, [name]: value })
      }
      const handleSubmit = async (event) => {
        event.preventDefault();
    console.log("group",group);
    sellersave(group).then(res=>{
        console.log("data send to APIxx`")
        navigate('/sellerdash');
    } )
       
      }




  return (
    <>
    <div class="checkout_area">
        <div class="container">
            <div class="row">

                <div class="col-12 col-md-6">
                    <div class="checkout_details_area mt-50 clearfix">

                        <div class="cart-page-heading mb-30">
                   
                        <span></span>
                               <br></br>
                        <br></br><br></br>
                          <h5>Seller Registration Form</h5>
                        </div>

                        <form onSubmit={handleSubmit} method="post">
                            <div class="row">
                              
                                <div class="col-md-6 mb-3">
                                    <label for="first_name">First Name <span>*</span></label>
                                    <input type="text" class="form-control" name="firstName" id="first_name" value={group.firstName || ''}
                   onChange={handleChange}  required />
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="last_name">Last Name <span>*</span></label>
                                    <input type="text" class="form-control"  name="lastName" id="last_name" value={group.lastName || ''}
                   onChange={handleChange} required />
                                </div>
                              
                                <div class="col-12 mb-3">
                                    <label for="country">Country <span>*</span></label>
                                    <select class="w-100" id="country" name="country" value={group.country || ''}
                   onChange={handleChange}>
                                        <option value="usa">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="ger">Germany</option>
                                        <option value="fra">France</option>
                                        <option value="ind">India</option>
                                        <option value="aus">Australia</option>
                                        <option value="bra">Brazil</option>
                                        <option value="cana">Canada</option>
                                    </select>
                                </div>
                                  <div class="col-12 mb-3">
                                    <label for="country">  What are you looking to sell on Flipkart? <span>*</span></label>
                                    <select class="w-100" id="category" name="category" value={group.category || ''}
                   onChange={handleChange}>
                                        <option value="All Categories">All Categories</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="clothes">Clothes</option>
                                        
                                       
                                    </select>
                                </div>
                              
                                <div class="col-12 mb-3">
                                    <label for="postcode">Postcode <span>*</span></label>
                                    <input type="text" name="pincode" value={group.pincode || ''}
                   onChange={handleChange} class="form-control" id="postcode" />
                                </div>
                                <div class="col-12 mb-3">
                                    <label for="city">Town/City <span>*</span></label>
                                    <input type="text" value={group.city || ''}
                   onChange={handleChange} name="city" class="form-control" id="city" />
                                </div>
                                <div class="col-12 mb-4">
                                    <label for="email_address">Phone Number  <span>*</span></label>
                                    <input type="text" name="phoneNumber" class="form-control" id="email_address" value={group.phoneNumber || ''}
                   onChange={handleChange} />
                                </div>
                                
                                <div class="col-12 mb-4">
                                    <label for="email_address">Email Address <span>*</span></label>
                                    <input type="email" name="email" class="form-control" id="email_address" value={group.email || ''}
                   onChange={handleChange} />
                                </div>
 <div class="col-12 mb-4">
                                    <label for="email_address">Password<span>*</span></label>
                                    <input type="password" name="password" class="form-control" id="email_address" value={group.password || ''}
                   onChange={handleChange} />
                                </div>
                                <div class="col-12">
                                    <div class="custom-control custom-checkbox d-block mb-2">
                                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                        <label class="custom-control-label" for="customCheck1">Terms and conitions</label>
                                    </div>
                                    <div class="custom-control custom-checkbox d-block mb-2">
                                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                        <label class="custom-control-label" for="customCheck2">Create an accout</label>
                                    </div>
                                    <div class="custom-control custom-checkbox d-block">
                                        <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                        <label class="custom-control-label" for="customCheck3">Subscribe to our newsletter</label>
                                    </div>
                                </div>
                            </div><br></br>
                                 <input type="submit" class="btn essence-btn"  value="Submit" />
                 
                        </form>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-5 ml-lg-auto">
                    <div class="order-details-confirmation">

                      

                        

                     <img src={imgs}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
