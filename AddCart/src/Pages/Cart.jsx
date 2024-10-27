import React from 'react';
import CartProduct from './CartProduct';

const Cart = ({ cart, increaseQuantity, decreaseQuantity, removeProduct, calculateTotal }) => {
    return (
        <div className="min-h-screen flex flex-col">
            

            {/* Cart Heading */}
            

            {/* Cart Items Section */}
            <section className="flex-1 overflow-y-auto py-4">
            <div className=" mt-2 mb-2 text-center">
                <h2 className="font-manrope font-bold text-4xl text-center">Cart</h2>
            </div>
                {cart.length === 0 ? (
                    <p className="text-center text-2xl font-semibold ml-96 pl-48 mt-14">Your cart is empty.</p>
                ) : (
                    
                    <div className="px-4">
                        {cart.map((item) => (
                            <div key={item.id} className="mt-8">
                                <CartProduct 
                                    product={item} 
                                    increaseQuantity={increaseQuantity} 
                                    decreaseQuantity={decreaseQuantity} 
                                    removeProduct={removeProduct} 
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Footer with Total Amount */}
            <footer className="fixed bottom-0 left-0 w-full bg-gray-800 py-4 shadow-inner">
                <div className="text-right pr-6 text-white font-manrope font-bold text-2xl">
                    Total Amount - ${calculateTotal}
                </div>
            </footer>
        </div>
    );
};

export default Cart;
