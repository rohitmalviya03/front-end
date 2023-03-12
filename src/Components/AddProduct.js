
import React, { useEffect, useState  } from 'react';
import { upload } from '../Services/userService';
import axios from "axios";

export default function AddProduct() {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get('http://127.0.0.1:9996/api/users/getcategory');
        setData(response.data);
      }
      fetchData();
    }, []);
    console.log(data);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        file: null,
        price:'',
        category_id:''
      });
      
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('file', formData.file);
        data.append('category_id', formData.category_id);
        data.append('price', formData.price);
        console.log(formData);
        // send the form data to the API using fetch or axios
      
        axios.post('http://127.0.0.1:9996/api/users/saveproduct', formData,{
            headers: { 'Content-Type': 'multipart/form-data' }
          })
        .then(response => {
          console.log('Form data submitted successfully!',formData);
          alert("Product save Succesfully..");
        })
        .catch(error => {
          console.error('Error occurred while submitting form data:', error);
        });
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
                               <br/>
                        <br/><br/>
                          <h5>Add Product</h5>
                        </div>
                     <form  onSubmit={handleSubmit}  enctype="multipart/form-data">
                            <div className="row">
                              
                                <div className="col-md-6 mb-3">
                                    <label for="first_name">Product Name <span>*</span></label>
                                    <input type="text" className="form-control" name="name" id="first_name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="last_name">Description<span>*</span></label>
                                    <input type="text" className="form-control"  name="description" id="last_name" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required />
                                </div>
                               <div className="col-md-6 mb-3">
                                    <label for="last_name">Price<span>*</span></label>
                                    <input type="text" className="form-control"  name="price" id="last_name" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required />
                                </div>
        
                                {/* <div className="col-md-6 mb-3">
                                    <label for="last_name">cat<span>*</span></label>
                                    <input type="text" className="form-control"  name="category" id="category" vvalue={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} required />
                                </div> */}
       
       <div className="col-md-6 mb-3">  <label for="first_name">Category<span>*</span></label>
                <select className="form-control" id="country" name="category_id"  onChange={(e) => setFormData({...formData, category_id: e.target.value})}>
                <option>Category</option>  {data.map(item => (
        <option value={item.id}>{item.name}</option>
      ))}</select></div>
                                {/* <div className="col-12 mb-3">
                                    <label for="country">Category <span>*</span></label>
                                    <select className="w-100" id="country" name="category" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                                        <option value="mobiles">Mobile</option>
                                        <option value="laptops">Laptops</option>
                                        <option value="cloths">Cloths</option>
                                        <option value="watchs">Watches</option>
                                        <option value="camera">Camera & Accessories</option>
                                    </select>
                                </div> */}
                                <div className="col-md-6 mb-3">
                                <label for="last_name">Image<span>*</span></label>
                                <input type="file" name="file"  onChange={(e) => setFormData({...formData, file: e.target.files[0]})} className="custom-file-input"
                    id="customFile" /></div>
                                
                               
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
                            </div><br />
                                 <input type="submit" className="btn essence-btn"  value="Save Product" />
                 
                        </form>
                    </div>
                </div>
        
                <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
                    <div className="order-details-confirmation">
        
                        <div className="cart-page-heading">
                            <h5>Your Order</h5>
                            <p>The Details</p>
                        </div>
        
                        <ul className="order-details-form mb-4">
                            <li><span>Product</span> <span>Total</span></li>
                            <li><span>Cocktail Yellow dress</span> <span>$59.90</span></li>
                            <li><span>Subtotal</span> <span>$59.90</span></li>
                            <li><span>Shipping</span> <span>Free</span></li>
                            <li><span>Total</span> <span>$59.90</span></li>
                        </ul>
        
                        <div id="accordion" role="tablist" className="mb-4">
                            <div className="card">
                                <div className="card-header" role="tab" id="headingOne">
                                    <h6 className="mb-0">
                                        <a data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><i className="fa fa-circle-o mr-3"></i>Paypal</a>
                                    </h6>
                                </div>
        
                                <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab" id="headingTwo">
                                    <h6 className="mb-0">
                                        <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="fa fa-circle-o mr-3"></i>cash on delievery</a>
                                    </h6>
                                </div>
                                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis in veritatis officia inventore, tempore provident dignissimos.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab" id="headingThree">
                                    <h6 className="mb-0">
                                        <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="fa fa-circle-o mr-3"></i>credit card</a>
                                    </h6>
                                </div>
                                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo sint repudiandae suscipit ab soluta delectus voluptate, vero vitae</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" role="tab" id="headingFour">
                                    <h6 className="mb-0">
                                        <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour"><i className="fa fa-circle-o mr-3"></i>direct bank transfer</a>
                                    </h6>
                                </div>
                                <div id="collapseFour" className="collapse show" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cum autem eveniet saepe fugit, impedit magni.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <a href="#" className="btn essence-btn">Place Order</a>
                    </div>
                </div>
            </div>
        </div>
        </div>  
          </>
  );
}
