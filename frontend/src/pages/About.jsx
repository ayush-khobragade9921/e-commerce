import React from 'react'
import {assets} from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10  flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At Forever, we believe shopping should feel effortless, exciting, and reliable. That’s why we curate products that blend modern trends, premium quality, and fair pricing, all in one place..</p>
              <p> Whether you’re looking for everyday essentials or something special, Forever is built to keep you ahead — always. Forever isn’t just a store — it’s a promise. A promise of consistency, reliability, and style that lasts beyond trends.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Forever, our mission is to make quality, style, and reliability accessible to everyone.
                We aim to build a shopping experience where customers can trust what they buy, feel confident in their choices, and enjoy products that truly last. By combining modern design, fair pricing, and customer-first thinking, we strive to create value beyond just a transaction.
              </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

        <div className='flex flex-col md:flex-row text-sm mb-20 gap-5'>
              <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Quality Assurence:</b>
                  <p className='text-gray-600'>At Forever, quality comes first. Every product is carefully checked to meet our standards for durability, comfort, and design before reaching you. We ensure consistency and reliability so you can shop with confidence — every time.</p>
              </div>

              <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Convinence:</b>
                  <p className='text-gray-600'>At Forever, we make shopping simple and hassle-free. From easy navigation and secure payments to quick support and smooth delivery, everything is designed to save your time and effort — so you can shop comfortably, anytime, anywhere.</p>
              </div>

               <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Exceptional Customer Service:</b>
                  <p className='text-gray-600'>At Forever, our customers come first. We are committed to providing quick, friendly, and reliable support at every step — ensuring your questions are answered and your shopping experience stays smooth from start to finish.</p>
              </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default About