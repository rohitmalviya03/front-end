// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
  
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
  export const getId = () => {
    const userID = sessionStorage.getItem('id');
    if (userID) return JSON.parse(userID);
    else return null;
  }
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    
    return sessionStorage.removeItem('user');
  }
  
  // set the token and user from the session storage
  export const setUserSession = (token, user,id) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('user', JSON.stringify(user));
  }


  
  export const Cartlength = () => {
    return sessionStorage.getItem('cart').length;
  }

  
  