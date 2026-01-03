import React, { useEffect, useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const { products, currency, cartItems,updateQuantity,navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          )

          if (!productData) return null

          return (
            <div
              key={index}
              className='py-4 border-t border-b border-gray-200 text-gray-700'
            >
              <div className='flex items-start gap-6'>
                {/* IMAGE */}
                <img
                  className='w-16 sm:w-20'
                  src={productData.image[0]}
                  alt=''
                />

                {/* DETAILS */}
                <div className='w-full'>
                  <p className='text-xs sm:text-lg font-medium'>
                    {productData.name}
                  </p>

                  {/* PRICE | SIZE | QUANTITY | BIN */}
                  <div className='grid grid-cols-[3fr_1fr_0.5fr] items-center gap-4 mt-2'>
                    
                    {/* PRICE + SIZE */}
                    <div className='flex items-center gap-4'>
                      <p>
                        {currency} {productData.price}
                      </p>
                      <p className='px-2 sm:px-3 sm:py-1 border border-gray-200 bg-slate-50'>
                        {item.size}
                      </p>
                    </div>

                    {/* QUANTITY (CENTER) */}
                    <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))}
                      className='border border-gray-200 text-center w-12 sm:w-16 py-1'
                      type='number'
                      min={1}
                      defaultValue={item.quantity}
                    />

                    {/* BIN (LAST) */}
                    <img onClick={()=>updateQuantity(item._id,item.size,0)}  className='w-4 sm:w-5 cursor-pointer justify-self-end'
                      src={assets.bin_icon}
                      alt=''
                    />
                     
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex justify-end my-20'>
          <div className='w-full sm:w-112.5'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3 rounded cursor-pointer'>PROCEED TO CHECKOUT</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Cart
