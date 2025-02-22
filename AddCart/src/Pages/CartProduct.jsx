import React from 'react';

const CartProduct = ({product,increaseQuantity,decreaseQuantity,removeProduct}) => {
    return (
        
        <div>
            
           
            <div className=" z-10  rounded-3xl border-2 bg-white border-gray-200 p-2  grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 w-[80%] mx-auto ">
                    <div className="col-span-12 lg:col-span-2 img box">
                        <img src={product.image} alt="speaker image" className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"/>
                    </div>
                    <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                        <div className="flex items-center justify-between w-full mb-4">
                            <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">{product.title}</h5>
                            <button className="rounded-full group flex items-center justify-center p-0 border-none" onClick={()=>{
                                removeProduct(product)
                            }}>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle className="fill transition-all duration-500 group-hover:fill-red-800"
                                        cx="17" cy="17" r="17" fill="" />
                                    <path className="stroke-red-800 transition-all duration-500 group-hover:stroke-white"
                                        d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                                        stroke="#EF4444" stroke-width="1.6" stroke-linecap="round" />
                                </svg>
                            </button>
                        </div>
                        <p className="font-thin text-sm leading-7 text-slate-700 mb-6">
                            {product.description}. <a href="javascript:;"
                            className="text-indigo-600">More....</a>
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1 relative left-80 pl-96 pt-20 ">
                                <button
                                    className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                                    onClick={()=>{decreaseQuantity(product)}}
                                    >
                                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                        width="18" height="19" viewBox="0 0 18 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 9.5H13.5" stroke="" strokeWidth="1.6" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </button>
                               <p className='text-black'>{product.productQuantity}</p>
                                <button
                                    onClick={()=>{increaseQuantity(product)}}
                                    className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                    <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                        width="18" height="19" viewBox="0 0 18 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" strokeWidth="1.6"
                                            strokeLinecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <h6 className=" text-red-600 font-sans font-bold text-2xl leading-9 pr-16 text-right">${product.productPrice.toFixed(2)}</h6>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CartProduct;