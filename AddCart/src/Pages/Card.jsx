import React, { useState } from 'react';

const Card = ({ product, addToCart }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false); // State to track if the product is added to the cart

  const handleAddToCart = () => {
    addToCart(product); // Call the addToCart function passed as a prop
    setIsAddedToCart(true); // Set the state to true to disable the button
  };

  return (
    <div className='flex justify-center'>
    <div className="relative m-10 flex justify-center w-[350px] lg:h-[400px] max-w-xs  flex-col overflow-hidden rounded-lg border border-gray-100 bg-black shadow-md cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0px_0px_15px_rgba(0,255,255,0.7)]">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl justify-center bg-white" onClick={() => addToCart(product)}>
        <img className="object-cover " src={product.image} alt="product" />
      </a>
      
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xs tracking-tight text-inherit text-neutral-400 ">{product.title}</h5>
        </a>
        
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-100">${product.price}</span>
          </p>
          
          <div className="flex items-center">
            {/* Display rating value */}
            <span className="rounded bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold flex items-center">
              {product.rating.rate}
            </span>

            {/* Star Rating */}
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => {
                const ratingValue = index + 1;
                if (product.rating.rate >= ratingValue) {
                  // Full star
                  return (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927a1 1 0 011.902 0l1.454 4.473a1 1 0 00.95.69h4.724a1 1 0 01.593 1.806l-3.826 2.778a1 1 0 00-.364 1.118l1.454 4.473a1 1 0 01-1.539 1.118L10 15.347l-3.826 2.778a1 1 0 01-1.539-1.118l1.454-4.473a1 1 0 00-.364-1.118L1.899 9.896a1 1 0 01.593-1.806h4.724a1 1 0 00.95-.69l1.454-4.473z" />
                    </svg>
                  );
                } else if (product.rating.rate >= ratingValue - 0.5) {
                  // Half star
                  return (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 15.273l-3.262 2.13c-.392.256-.902-.118-.767-.608l1.074-4.564L2.282 8.97c-.322-.271-.154-.837.283-.856l4.593-.182 1.45-4.508c.154-.48.832-.48.986 0l1.45 4.508 4.593.182c.437.019.605.585.283.856l-3.763 3.26 1.074 4.564c.135.49-.375.864-.767.608L10 15.273z" />
                    </svg>
                  );
                } else {
                  // Empty star (outline)
                  return (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927a1 1 0 011.902 0l1.454 4.473a1 1 0 00.95.69h4.724a1 1 0 01.593 1.806l-3.826 2.778a1 1 0 00-.364 1.118l1.454 4.473a1 1 0 01-1.539 1.118L10 15.347l-3.826 2.778a1 1 0 01-1.539-1.118l1.454-4.473a1 1 0 00-.364-1.118L1.899 9.896a1 1 0 01.593-1.806h4.724a1 1 0 00.95-.69l1.454-4.473z" />
                    </svg>
                  );
                }
              })}
            </div>
          </div>
        </div>
                    <a onClick={()=>addToCart(product)} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to Cart</a>
                </div>
            </div>
            </div>

    );
};

export default Card;