import axios from "axios";

let BASE_URL='http://localhost:9996/api/users';
export const signUp=(user)=>{
    
    return axios.post(BASE_URL+'/save',user)

};
export const sellersave=(seller)=>{
    console.log("adadada",seller);
    return axios.post(BASE_URL+'/sellerregistration',seller)

};
export const addcart=(data,userId)=>{
   
    return axios.post(BASE_URL+'/cart/'+userId+'/items/',data)

};
export const getCart=(userId)=>{
    
    return axios.get(BASE_URL+'/getcart/'+userId )
   
};
export const clearCart=(userId)=>{
    
    return axios.delete(BASE_URL+'/deletecartcust/'+userId )
   
};
export const getProduct=()=>{
    return axios.get(BASE_URL+'/getProduct')
   
};

export const upload=(data)=> {
    console.log("hii",data);
    console.log("call upload service");
    
    return axios.post(BASE_URL+'/saveProduct', data,{
        
        });
};

export const placeOrder=(user)=>{
    
    return axios.post(BASE_URL+'/saveorder',user)

};

export const getOrder=(userId)=>{
    
    return axios.get(BASE_URL+'/getorder/'+userId)

};


export const getProductbyId=(pId)=>{
    
    return axios.get('http://localhost:9996/api/users/getproductbyid/'+pId)

};