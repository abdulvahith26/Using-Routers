import React from 'react';
import Card from './Card';

const Home = ({products,addToCart}) => {
    // console.log(products);
    
    return (
        <div className='flex flex-wrap  mx-auto justify-between'>
            {
            products.map((item)=>(
                <div key={item.id}>

                    <Card product={item} addToCart={addToCart} />
                
                </div>
            ))
            }
        </div>
    );
};

export default Home;
