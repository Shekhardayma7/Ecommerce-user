import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {

  const {productId} = useParams();
  // console.log(productId);
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [images,setImages] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async() =>{
        products.map((item)=>{
           if(item._id === productId){
            setProductData(item);
            // console.log(item);
            setImages(item.images[0])
            console.log(item)
            return null;
           }
        })
  }
  // const fetchProductData = () => {
  //   if (!products || products.length === 0) return;

  //   const item = products.find((p) => p._id === productId);
  //   if (item) {
  //     setProductData(item);
  //     setImage(item.image?.[0] || ''); // safe access in case image is missing
  //   }
  // };
  useEffect(()=>{
    fetchProductData();
  },[productId])

  
  return productData? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* --------------product data---------- */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/* ----------product images------------ */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
              <div className='flex sm:flex-col  overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                  {
                    productData.images.map((item,index)=>(
                        <img onClick={()=>setImages(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                    ))
                  }
              </div>
              <div className='w-full sm:w-[80%] '>
                  <img className='w-full h-auto ' src={images} alt="" />
              </div>
          </div>
          {/* -----product imformation */}
          <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_dull_icon} alt="" className="w-3.5"/>
                  <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium' >{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5.'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>select size</p>
                <div className='flex gap-2 '>
                     {productData.sizes.map((item,index)=>(
                      <button onClick={()=>setSize(item)} className={`border py-2 px-4 cursor-pointer bg-gray-100 ${item === size ?'border-orange-500':''}`}  key={index}>{item}</button>
                     ))}
                </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                    <p>100% original product</p>
                    <p>cash on delivery is available on this product</p>
                    <p>Easy return and exchange policy with in 7 days</p>
              </div>
              
          </div>
            
        </div>
        {/* description and review section */}
        <div className='mt-20'>
                 <div className='flex'>
                  <b className='border px-5 py-3 text-sm'>Description</b>
                  <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                  <p>an ecommerce webiste is an online platform that faciliates the buying and selling of the products</p>
                  <p>E commerce website typically  display their product or services along with detail description,images and prices and any variable variations. each product has usually its own properties</p>
                </div>
        </div>

        {/* -------------display related products----------- */}
        <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ):<div className='opacity-0'></div>
}

export default Product
