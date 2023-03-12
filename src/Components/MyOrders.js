import React ,{useState}from 'react';
import { getOrder,getProductbyId } from '../Services/userService';
import { getId } from '../Services/AuthService';
import { getProduct } from '../Services/userService';
import { Link } from 'react-router-dom';
export default function MyOrders() {

    const [order, setOrder] = useState([]);
    const [orderDetails, setOrderDetails] = useState([]);
    const [data,setData]=useState([]);
    var userid=getId();
    var orderList =getOrder(userid);
    
    const handleOrder=(event)=>{

    
    orderList.then(response => {
    
        setOrder(response.data);
        
    
      });
     
      order.forEach(item => {
      console.log("order",item.productid);
      var product=getProductbyId(item.productid);
      product.then(response => {
        setOrderDetails(response.data);
        orderDetails.forEach(item=>{
            console.log("item",item);
            
          })
          ;
      })})
     
console.log("orderdetails",orderDetails);
console.log("ordeonly",data);
}
  return (
    <>
   
   <div className='container'>
    <h3 className='text-bg-info'>Your Orders : </h3>
    <button onClick={handleOrder}>Click here to view Your Orders</button>
 
    
   <div className='container'>
   <div class="row ">
   {order.map(item=> (<div class="col-sm-4">
     <div class="card mt-2">
       <div class="card-body">
       <img class="card-img-top" style={{ width: 200, height: 100 }} src={"data:image/png;base64," + orderDetails.image}  alt="Card image cap"/>
         <h5 class="card-title mt-3">{data.name}</h5>
         <p class="card-text">{orderDetails.description}</p>
         <p class="card-text">{orderDetails.price}</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
     </div>
   </div>
   ))}
 </div>
   </div></div>
    </>
  );
}
