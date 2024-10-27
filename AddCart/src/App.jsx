import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NoMatchFound from './Pages/NoMatchFound';

const App = () => {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState([]);
 

  
  useEffect(() => {
    fetchProducts();
}, [])
  
const fetchProducts = async () => {
  try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
          throw new Error("Failed to fetch Data");
      }
      const data = await response.json();
     data.map((item)=>({...item,productQuantity:0, productPrice:0}))
      // console.log(data);
      setProducts(data);
  } catch (error) {
      console.log("Error:", error);

  }
}

const addToCart=(product)=>{
  if(cart.includes(product)){
    return alert("Product already added to cart section")
  }
  else{
    product.productQuantity=+1;
    product.productPrice=+product.price;
    setCart([...cart,product]);
    console.log(cart);
  }
}
const increaseQuantity = (product) => {
  const updatedCart = cart.map((item) => {
    if (item.id === product.id) {
      item.productQuantity += 1;
      item.productPrice = item.productQuantity * item.price;
    }
    return item;
  });
  setCart(updatedCart);
};
const decreaseQuantity = (product) => {
  const updatedCart = cart.map((item) => {
    if (item.id === product.id && item.productQuantity > 1) {
      item.productQuantity -= 1;
      item.productPrice = item.productQuantity * item.price;
    }
    return item;
  });
  setCart(updatedCart);
};



const removeProduct=(product)=>{
    setCart(cart.filter((item)=>item.id!==product.id));
}

const calculateTotal = () => {
  return cart.reduce((total, item) => total + item.productPrice, 0).toFixed(2);
};




  
  return (
    <div className='bg-black'>
      <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path='/' element={<Home products={products} addToCart={addToCart}  />} />
        <Route path='/cart' element={<Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeProduct={removeProduct} calculateTotal={calculateTotal()}/>} />
        <Route path='*' element={<NoMatchFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;