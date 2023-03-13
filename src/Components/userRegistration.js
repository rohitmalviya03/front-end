
import axios, {isCancel, AxiosError} from 'axios';
import { signUp } from '../Services/userService';
import imgs from '../Components/assets/img/cat/regg.png'
import React, { useEffect, useState  } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function UserRegistration() {
    
    const initialFormState = {
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
    console.log(group);
    signUp(group).then(res=>{
        console.log("data send to APIxx`")
        navigate('/AddProduct');
    } )
       
      }
    return (
    <>  
    <div className="checkout_area ">
       
        <div className="container">
            <div className="row">

                <div className="col-12 col-md-6">
                    <div className="checkout_details_area  clearfix">

                        <div className="cart-page-heading mb-30">
                   
                        <span></span>
                               <br />
                        <br /><br/>
                          <h5>Customer Registration Form</h5>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                              
                                <div className="col-md-6 mb-3">
                                    <label for="first_name">First Name <span>*</span></label>
                                    <input type="text" className="form-control" name="firstName" id="firstName" value={group.firstName || ''}
                   onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="last_name">Last Name <span>*</span></label>
                                    <input type="text" className="form-control"  name="lastName" id="last_name"  value={group.lastName || ''}
                   onChange={handleChange} required />
                                </div>
                              
                                <div className="col-12 mb-3">
                                    <label for="country">Country <span>*</span></label>
                                    <select className="w-100" id="country" name="country"  onChange={(event) => this.submit(event.target.value)}>
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
                                
                                <div className="col-12 mb-3">
                                    <label for="postcode">Postcode <span>*</span></label>
                                    <input type="text" name="pincode" className="form-control" id="pincode"  value={group.pincode || ''}
                   onChange={handleChange} />
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="city">Town/City <span>*</span></label>
                                    <input type="text" name="city" className="form-control" id="city" value={group.city || ''}
                   onChange={handleChange} />
                                </div>
                                
                                <div className="col-12 mb-3">
                                    <label for="phone_number">Phone No <span>*</span></label>
                                    <input type="number" name="phoneNumber" className="form-control" id="phoneNumber"  value={group.phoneNumber || ''}
                   onChange={handleChange}  />
                                </div>
                                <div className="col-12 mb-4">
                                    <label for="email_address">Email Address <span>*</span></label>
                                    <input type="email" name="email" className="form-control" id="email" value={group.email || ''}
                   onChange={handleChange}  />
                                </div>
 <div className="col-12 mb-4">
                                    <label for="email_address">Password<span>*</span></label>
                                    <input type="password" name="password" className="form-control" id="password" value={group.password || ''}
                   onChange={handleChange} />
                                </div>
                                <div className="col-12">
                                    <div className="custom-control custom-checkbox d-block mb-2">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" for="customCheck1">Terms and conitions</label>
                                    </div>
                                    <div className="custom-control custom-checkbox d-block mb-2">
                                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                        <label className="custom-control-label" for="customCheck2">Create an accout</label>
                                    </div>
                                    <div className="custom-control custom-checkbox d-block">
                                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                        <label className="custom-control-label" for="customCheck3">Subscribe to our newsletter</label>
                                    </div>
                                </div>
                            </div>
                <br/>
                              <input type="submit" className="btn essence-btn"  value="Submit"/>
                 
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
