import React from 'react';
import axios from "axios";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser,removeCart,getId } from '../Services/AuthService';
import { getProduct } from '../Services/userService';
 
export default function ProductCard() {
const data=getUser();
const userID=getId();


var getproduct=getProduct();


    const [products, setProducts] = useState([]);
    const [id ,setId]=useState();
    const [cartItems, setCartItems] = useState([]);
    const[quantity,setQuantity]=useState(0);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts,setFilteredProducts]=useState([]);
    const[msg,setMsg]=useState('');
    useEffect(() => { getproduct.then(response => {
     
      setProducts(response.data);
     
    });
    
    });
 
  function prodcutSearchCategory(event){
    
    setSelectedCategory(event.target.value);
    
    console.log("cat",selectedCategory);
   
    const filteredProducts = selectedCategory
      ? products.filter(product => product.category.name === selectedCategory)
      : products;
      setFilteredProducts(filteredProducts);
     
  }
    // const filteredProducts = selectedCategory
    //   ? products.filter(product => product.category.name === selectedCategory)
    //   : products;
    //   console.log(
    //     "dssd",filteredProducts);

    function productSearchList(){

      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
        
      );setFilteredProducts(filteredProducts);
      //   if(Object.keys(filteredProducts).length>0){
      //     setMsg("");
      //     setFilteredProducts(filteredProducts);}
      // else{     
      //   setMsg("Product not Found...");
      //   setFilteredProducts([]);
      //   console.log(msg)
       
      // }
      
    }

   

  
  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
    
  }
   
    function handleCategoryChange(event) {
        console.log(event.target.value);
      setSelectedCategory(event.target.value);
     
      
    }

    const handleOnchange=(event)=>{
      const { name, value } = event.target;
      setCartItems((cartItems) => ({ ...cartItems, [name]: value }));
     
    
     }
    // const addToCart = (item) => {
    //   setCartItems([...cartItems, item]);
    //   sessionStorage.setItem('cart', cartItems);
    //   console.log("adad",item);
    // };

    
    
    const handleAddToCart = (id,name,price,quantity) => {
      console.log(userID);
      setCartItems({productid: id,
      name:name,
    price:price,
  quantity:quantity,
  custid:userID});
      
        axios.post('http://localhost:9996/api/users/cart/'+userID+'/items/', { productid: id,
        name:name,
      price:price,
    quantity:quantity,custid:userID })
            .then(() => {
                alert('Item added to cart!');
            })
            .catch((error) => {
                console.error('Error adding item to cart:', error);
            });
    };

  return (
    <>

<div className='container-fluid'>

<div className='row'>
{/* {this.state.category.map((item)  =>(  

<div className='col-2'>{item.name}</div>

))}
     */}   
    <div className='col-2'>
{/* <div className='row m-4'><div>All Category</div><hr></hr>
{this.state.category.map((item)  =>(
    <Link class="nav-link" to="/add?"><div className='mt-2'>{item.name}</div></Link>))}
 
</div> */}
<div className='form-control'>
  <h3></h3>
        <label>Filter by category:</label>
        
        <select className='form-control mt-3' value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value='Mobile'>Mobile</option>
          <option value="Laptops">Laptops</option>
          <option value="AC">AC</option>
          <option value="Watches">Watches</option>
          <option value="Car">car</option>
        </select>
        <button class="btn form-control btn-outline-success mt-3" onClick={prodcutSearchCategory} type="submit">Search</button>
    
    </div>
    <div className='form-control'>
    <label>Search Product by Name :</label>
        
      <input type="text" className='form-control' value={searchQuery} onChange={handleSearchInputChange} />
      <button class="btn form-control btn-outline-success mt-3" onClick={productSearchList} type="submit">Search</button>
     </div>
     <div>Cart ({cartItems.length})</div>
     </div>
    <div className='col-lg-10'>
        <div className='row'>
   
    {filteredProducts.map((item) => (
 
<div id={item.id} className="card  mb-3" style={{width: "16rem"}}>

<img src={"data:image/png;base64," + item.image}   style={{ width: 200, height: 130 }} className="card-img-top" alt="..." />
<div className="card-body">
 <h5 className="card-title">{item.name}</h5>
 <p className="card-text">{item.description}</p>
 <p className="card-text">{item.category.name}</p>
 <span>Price :</span><p className="card-title">{item.price}</p>
 
 
 <div class="card-footer position-sticky">
 <div className="add-to-cart-btn">
  {/* <input type="text" name="id" onChange={handleOnchange} value={item.id}></input>
  <input type="text" name="name" onChange={handleOnchange} value={item.name}></input>
  <input type="text" name="price" onChange={handleOnchange} value={item.price}></input>
  */}
 <select name="quantity" className='form-control m-3' onChange={e => setQuantity(e.target.value)}>
 <option value="1">Choose Quantity</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
   </select>
  
   <button className="card-footer essence-btn" onClick={() => handleAddToCart(item.id,item.name,item.price,quantity)}>Add to Cart</button>
   
    </div></div>
</div>
</div> 

))   
}</div></div>
</div></div>

</> 
  );
}
