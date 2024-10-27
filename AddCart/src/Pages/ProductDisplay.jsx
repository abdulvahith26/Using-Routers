import React, { useEffect, useState } from 'react';
import Card from './Card';
import NavigationBar from './NavigationBar';
import Cart from './Cart';

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([]);
    const [Loading, setLoading] = useState(true);
    const [Cartstatus, setCartstatus] = useState(false);
    const [status,setStatus]=useState("Add to Cart");
    const[totalprice,setTotal]=useState(0);
    const [Error, setError] = useState(null);
    useEffect(() => {
        fetchProducts();
    }, [])
    

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                throw new Error("Failed to  Data");
            }

            const data = await response.json();
            setProducts(data);
            setLoading(false);

        } catch (error) {
            console.log("Error:", error);
            setError(error)

        }
    }




    const addToCart=(product)=>{
        const productInCart=cart.find((item)=> item.id === product.id);
        if(productInCart){
            alert(" already added to the Cart");
            
        }else{
            setCart([...cart,product]);
            setTotal(totalprice+parseFloat(product.price));

            
        }
    }
    const removeFromCart=(product)=>{
        setCart(cart.filter((item)=>item!==product));
        setTotal(totalprice-parseFloat(product.price))
    }




    if (Loading == true) {
        return <><div className=''>Loading...</div> </>
    }

    if (Error) {
        return console.log("Error:", Error);

    }

    
    



    return (
        <div>
            <div>
                <NavigationBar cartCount={cart.length}
                 openCart={() => setCartstatus(true)}
                  />
            </div>
            <div className='flex flex-wrap justify-center items-center'>
            {products.map((item)=>(
                <div key={item.id}> 
                    <Card product={item} addToCart={addToCart} removeFromCart={removeFromCart} status={status} />
                </div>
            ))}
            {Cartstatus && (
        <Cart
          cart={cart}
          closeCart={() => setCartstatus(false)}
          removeFromCart={removeFromCart}
          totalprice={totalprice}
        />
      )}
            </div>
        </div>
    );
};

export default ProductDisplay;