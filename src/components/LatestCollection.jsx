import React, { useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext';

import { Collection } from 'mongoose';
import Titles from './Titles';
import ProductItem from './ProductItem';


const LatestCollection = () => {
    const  {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,10))
    },[products])
    
  return (
    <div className='my-8'>
       <div className='text-center py-8 text-3xl'>
        <Titles text1={'Latest  '} text2={'Collections'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt blanditiis dolore voluptatibus.</p>
       </div>
        {/* rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grids-cols-4 lg:grids-cols-5 gap-4 gap-y-6'>
            {
              latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} images={item.images[0]} name={item.name} price={item.price}/>
              ))
            }
        </div>

    </div>
  )
}

export default LatestCollection;
