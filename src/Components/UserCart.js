import React,{useState} from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import { getCart,clearCart } from '../Services/userService';
import { getId ,getUser} from '../Services/AuthService';

export default function UserCart() {
    var userid=getId();
    var username=getUser();
    const navigate=useNavigate();
    var cart =getCart(userid);
 const [cartdata, setCartdata] = useState([]);

cart.then(response => {
    
    setCartdata(response.data);
    

  });
  let total = 0;
  cartdata.forEach(item => {
    total += item.price * item.quantity;
  });
  
//   console.log("cartdata",cartdata[0].custid)
  const handlesaveOrder=(e)=>{
    

    cartdata.forEach(item=>{
        axios.post('http://127.0.0.1:9996/api/users/saveorder',
        
        { custid: item.custid, productid: item.productid}
   
        )
       
    })

alert(username+" Your Order is Placed Successfully.")
navigate('/myorders');
  }
 const  handleCartClear= (e) => {
    console.log("de",userid);
    var clear=clearCart(userid)
    clear.then(response => {
       alert("Item Deleted from Cart..");
      });

    }


  return (
    <>
<div className='container-lg'>
    <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
                    <div className="order-details-confirmation">
        
                        <div className="cart-page-heading">
                            <h5> <span className='text-bg-danger'>Your total cart value is :  {total}</span> </h5>
                            <p>The Details</p>
                        </div>
        
                     <ul className="order-details-form mb-4">
                            <li><span>Product</span> <span>Quantity</span><span>Price</span><span>Total</span></li>
                            {cartdata.map(item=>(<li><span>{item.cartitemid}{item.name}</span><span>{item.quantity}</span> <span>{item.price}</span><span>{item.price*item.quantity}</span></li>))}
                            <li><span>Subtotal</span> <span>{total}</span></li>
                            <li><span>Shipping</span> <span>Free</span></li>
                            <li><span>Total</span> <span className='text-bg-dark'>{total}</span></li>
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
                        {/* {cartdata.map(item=>(<p>{item.productid}</p>))} */}
                        <button onClick={handlesaveOrder} className="btn essence-btn">Place Order</button>
                        <button onClick={handleCartClear} className="btn essence-btn m-3">Clear Cart</button>
                    </div>
                </div>
                </div>
    </>
  );
}
