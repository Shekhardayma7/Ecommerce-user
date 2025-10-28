import React from 'react'
import { assets } from '../assets/assets'

const Fottter = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-15 text-sm'>
               <div>
                  <img src={assets.logo} className='mb-5 w-32' alt="" />
                  <p className='w-full  md:2/3 text-gray-600'>
                    this is the best site for buying the new brand clothes and all clothes are of original brand
                    and all type of clothes are available here like for children ,  ,boys ,girls
                  </p>
               </div>
               <div>
                   <p className='text-xl font-medium mb-5'>Company</p>
                   <ul className='flex flex-col gap-1 text-gray-600'>
                       <li>Home</li>
                       <li>About us</li>
                       <li>Delivery</li>
                       <li>Privacy Policy</li>
                   </ul>
               </div>
               <div>
                <p className='text-xl font-medium mb-5'>Get in Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1 -348-278-9</li>
                    <li>celeancut@gmail.com</li>
                </ul>
               </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>copyright 2024@cleancut.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Fottter
