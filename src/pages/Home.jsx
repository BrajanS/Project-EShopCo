import React from 'react'
import Xlogo from '../imgs/Vector.png'

export function Home() {
  return (
    <div>
        <div className='bg-[#000000] flex justify-center py-3 gap-[5px]'>
            <p className='text-[white]'>Sign up and get 20% off to your first order.</p>
            <a className='text-[white] underline font-[450]' href="#">Sign Up Now</a>
            <img className='h-[14px] absolute right-[100px] top-[18px]' src={Xlogo} alt="Close message" />
        </div>
        <header>
            <nav>
                <div className='p1Logo'>
                  <h2 className='text-[32px] font-[700]'>SHOP.CO</h2>
                </div>
                <div className='p2NavBrowse'>
                  <select className='text-black' options={[{
                    value: 'Shop',
                    label: 'Shop'
                  },{
                    value: 'Merchandise',
                    label: 'Merchandise'
                  }
                  ]} name="" id="">Shop</select>
                  <h2></h2>
                  <h2></h2>
                  <h2></h2>
                </div>
                <div className='p3NavSearch'>

                </div>
                <div className='p4PurchaseLogin'>

                </div>
            </nav>
        </header>
        <main></main>
        <footer></footer>
    </div>
  )
}
