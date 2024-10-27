import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ cart }) => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="fixed flex w-full flex-wrap items-center justify-between py-2 shadow-dark-mild bg-slate-800 z-10">
                <div className="flex w-full flex-wrap items-center justify-between px-[80px] py-[10px]">
                    <div className="text-xl font-extrabold font-serif ml-96 pl-32 flex">
                        ADD TO CART
                    </div>

                    {/* Home button */}
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center absolute left-5 hover:scale-105 hover:text-orange-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 mr-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 3.172l-7.071 7.071a.75.75 0 001.061 1.061L12 5.293l6.01 6.011a.75.75 0 001.061-1.061L12 3.172zM4.5 10.5v9.75a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V15h3v5.25a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V10.5H19v9.75a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 0110 20.25V15H8v5.25a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 011.5 20.25V10.5H4.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Home
                    </button>

                    {/* Cart button */}
                    <div
                        className="relative flex items-center cursor-pointer hover:scale-105 hover:text-orange-600"
                        onClick={() => navigate('/cart')}
                    >
                        <span className="ms-3 rounded-[50%] relative left-[70px] top-[-20px] bg-black px-[0.85em] py-[0.6em] text-[1rem] font-bold leading-none text-white transition-all duration-500">
                            {cart.length}
                        </span>
                        <span className="[&>svg]:w-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </nav>

            
            <main className="pt-[80px]">
            </main>
        </div>
    );
};

export default Navbar;
