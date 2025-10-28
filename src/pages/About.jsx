import React from 'react'
import Titles from '../components/Titles'
import { assets } from '../assets/assets'
import Newsletterbox from '../components/Newsletterbox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
           <Titles text1={'ABOUT '} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img  className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
                <p>Welcome to CELAN CUT, your one-stop destination for everything you love to shop online.
We believe shopping should be simple, enjoyable, and trustworthy, which is why we bring together a wide range of high-quality products at prices you’ll love.

From fashion, electronics, and beauty essentials to home décor, lifestyle, and more, our catalog is designed to make sure you find what you need – and discover what you’ll love.</p>
                <p>we offer everything from fashion, electronics, beauty, and health products to home essentials, lifestyle accessories, and more. Our goal is simple: to bring you the best products at the best prices, all in one place. Whether you’re upgrading your wardrobe, revamping your home, or searching for the perfect gift, we’ve got you covered.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Our mission is to make online shopping accessible to everyone while maintaining a strong commitment to quality and customer happiness. With 24/7 customer support, exciting offers, and continuous updates to our catalog, we aim to become your go-to destination for everything you need.</p>
            </div>
            
        </div>
        <div className='text-xl py-4'>
                <Titles text1={'WHY '} text2={'CHOOSE US'}/>
                <div className='flex flex-col md:flex-row text-sm mb-20'>
                     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                        <b>QUALITY ASSURANCE:</b>
                        <p className='text-gray-600'>Our QA strategy ensures that every feature of the app—from browsing and search to checkout and delivery tracking—works flawlessly across all devices and platforms. We follow industry best practices, rigorous testing methodologies, and continuous monitoring to guarantee performance, security, and usability.</p>
                     </div>
                     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                        <b>CONVENIENCE:</b>
                        <p className='text-gray-600'>We are committed to delivering a bug-free, secure, and reliable shopping app that enhances customer satisfaction. By continuously testing and improving, we make sure your shopping journey is not just easy—but exceptional. We follow industry best practices, rigorous testing methodologies, and continuous monitoring to guarantee performance, security, and usability.</p>
                     </div>
                     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                        <b>EXCEPTIONAL CUSTOMER SERVICE:</b>
                        <p className='text-gray-600'>Our dedicated support team is available to assist you with order inquiries, product guidance, returns, exchanges, and technical support. Whether it’s through live chat, email, or phone, we ensure that every query is handled quickly, politely, and effectively.</p>
                     </div>
                     
                </div>
                <Newsletterbox/>
        </div>
    </div>
  )
}

export default About
