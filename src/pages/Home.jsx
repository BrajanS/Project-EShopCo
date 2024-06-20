import React from 'react'
// Logos:
import Xlogo from '../imgs/Vector.png'
import SearchLogo from '../imgs/Search.png'
import LoginLogo from '../imgs/Login.png'
import CartLogo from '../imgs/CartLogo.png'
import EmailLogo from '../imgs/EmailLogo.png'

import AppleP from '../imgs/paiement-options/Apple-Pay.png'
import GooglepP from '../imgs/paiement-options/G-Pay.png'
import MasterP from '../imgs/paiement-options/Mastercard.png'
import PaypalP from '../imgs/paiement-options/Paypal.png'
import VisaP from '../imgs/paiement-options/Visa.png'

import FacebookLogo from '../imgs/socialMedia/facebook.png'
import InstagramLogo from '../imgs/socialMedia/instagram.png'
import GithubLogo from '../imgs/socialMedia/logo-github.png'
import TwitterLogo from '../imgs/socialMedia/logo-twitter.png'

import Calvin from '../imgs/partenaires/calvin.png'
import Gucci from '../imgs/partenaires/gucci-logo-1.png'
import Prada from '../imgs/partenaires/prada-logo-1.png'
import Versace from '../imgs/partenaires/versace.png'
import Zara from '../imgs/partenaires/zara-logo-1.png'


// Fins Logos //

const options = [
  { value: '1', label: 'Shop' },
  { value: '2', label: 'Limited edition' }
];

export function Home() {
  return (
    <div id='homeID'>
        <header>
            <div id='optionalElement' className='bg-[#000000] flex justify-between py-3'>
                <div></div>
                <div className='flex gap-[5px]'><p className='text-[white]'>Sign up and get 20% off to your first order.</p>
                <a className='text-[white] underline font-[450]' href="https://github.com/">Sign Up Now</a></div>
                <button onClick={()=>{
                  document.getElementById('optionalElement').remove()
                  }} className='flex items-center relative right-[100px]'><img className='h-[14px]' src={Xlogo} alt="Close message" /></button>      
            </div>
            <nav className='mx-[100px] flex justify-between relative'>
                <div className='p1Logo w-[140px]'>
                  <h2 className='text-[32px] font-[700]'>SHOP.CO</h2>
                </div>
                <div className='p2NavBrowse w-[315px] flex items-center gap-5'>
                  <select className='text-black w-[57px]'>
                    <option value={options[0]}>{options[0].label}</option>
                    <option value={options[1]}>{options[1].label}</option>
                  </select>
                  <a href='https://www.google.com'>On Sale</a>
                  <a href='https://www.google.com'>New Arrivals</a>
                  <a href='https://www.google.com'>Brands</a>
                </div>
                <div className='p3NavSearch flex items-center gap-3'>
                  <img id='searchHover' onClick={()=>{
                    console.log("Search button clicked !");
                    document.getElementById('searchInput').focus();
                  }} src={SearchLogo} alt="Click to search" />
                  <input id='searchInput' className='bg-[#CCCCCC] outline-[none] w-[100%] py-[12px] px-[16px]
                  border-[1px] border-[solid] border-[white] rounded-[30px]
                  ' type="text" placeholder='Search for products...' />
                </div>
                <div className='p4PurchaseLogin gap-[14px] w-[fit] flex items-center'>
                  <a href="https://www.google.com"><img src={CartLogo} alt="Mettre dans le panier" /></a>
                  <a href="https://www.google.com"><img src={LoginLogo} alt="Se connecter" /></a>
                </div>
            </nav>
        </header>
        <main>
          <div>
            <div className="bg-2-people bg-no-repeat bg-cover">
              <h2>Test</h2>
              
            </div>
            <div className='bg-[#000000] m-auto'>
              <div className='flex mx-[100px] py-[20px] justify-between'>
                <img alt="" src={Versace} />
                <img alt="" src={Zara} />
                <img alt="" src={Gucci} />
                <img alt="" src={Prada} />
                <img alt="" src={Calvin} />
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </main>
        <footer className='mx-[100px]'>
          <div className='mb-[50px] bg-black flex items-center justify-between px-[64px] py-[34px] rounded-[15px]'>
            <h3 id='subNews' className='text-white'>STAY UPTO DATE ABOUT <br/> OUR LATEST OFFERS</h3>
            <form className='flex flex-col gap-3' action="submit">
              <div className='flex items-center bg-white px-[16px] py-[12px] rounded-[30px] gap-[10px]'>
                <img className='h-[16px]' src={EmailLogo} alt="Email logo" />
                <input id="emailInput" type="email" placeholder='Enter your email address'/>
              </div>
              <button className='bg-white rounded-[30px] px-[16px] py-[12px]' type='submit'>Subscribe to Newsletter</button>
            </form>
          </div>
          <div className='mb-[70px] flex justify-between gap-[50px]'>
            <div className='flex flex-col gap-[20px]'>
              <div><h2 className='text-[32px] font-[700]'>SHOP.CO</h2></div>
              <p className='text-[#00000099]'>We have clothes that suits your style and<br/> which you’re proud to wear. From<br/> women to men.</p>
              <div className='flex gap-2'>
                <div className='flex justify-center items-center w-[28px] h-[28px] border-[1px] border-[solid] border-[black] rounded-[50%]'><img src={TwitterLogo} alt="Twitter" /></div>
                <div className='flex justify-center items-center w-[28px] h-[28px] border-[1px] border-[solid] border-[black] rounded-[50%]'><img src={FacebookLogo} alt="Facebook" /></div>
                <div className='flex justify-center items-center w-[28px] h-[28px] border-[1px] border-[solid] border-[black] rounded-[50%]'><img src={InstagramLogo} alt="Instagram" /></div>
                <div className='flex justify-center items-center w-[28px] h-[28px] border-[1px] border-[solid] border-[black] rounded-[50%]'><img src={GithubLogo} alt="Github" /></div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div><h2>COMPANY</h2></div>
              <div className="flex flex-col gap-[10px]">
                <a className='text-[#00000099]' href="https://www.google.com/">About</a>
                <a className='text-[#00000099]' href="https://www.google.com/">Features</a>
                <a className='text-[#00000099]' href="https://www.google.com/">Works</a>
                <a className='text-[#00000099]' href="https://www.google.com/">Career</a>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div><h2>HELP</h2></div>
              <div className="flex flex-col gap-[10px]">
                <a className='text-[#00000099]' href="https://www.google.com/">Customer Support</a>
                <a className='text-[#00000099]' href="https://www.google.com/">Delivery Details</a>
                <a className='text-[#00000099]' href="https://www.google.com/">Terms & Conditions</a>
                <a className='text-[#00000099]' href="https://www.google.com/">Privacy Policy</a>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div><h2>FAQ</h2></div>
              <div className="flex flex-col gap-[10px]">
                <a className='text-[#00000099]' href="https://www.google.com/">Account</a>
                <a className='text-[#00000099]' href="https://www.google.com/">Manage Deliveries</a>
                <a className='text-[#00000099]' href="https://www.google.com/">Orders</a>
                <a className='text-[#00000099]' href="https://www.google.com/">Payments</a>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div><h2>RESSOURCES</h2></div>
              <div className="flex flex-col gap-[10px]">
                <a className='text-[#00000099]' href="https://www.google.com/">Free eBooks</a>
                <a className='text-[#00000099]' href="https://www.google.com/">Development Tutorial</a>
                <a className='text-[#00000099]' href="https://www.google.com/">How to - Blog</a>
                <a className='text-[#00000099]' href="https://www.google.com/">Youtube Playlist</a>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className='flex w-fit gap-[12px]'>
              <div className='flex justify-center items-center'><img src={VisaP} alt="Paiment method accpeted Visa" /></div>
              <div className='flex justify-center items-center'><img src={MasterP} alt="Paiment method accpeted MasterCard" /></div>
              <div className='flex justify-center items-center'><img src={PaypalP} alt="Paiment method accpeted Paypal" /></div>
              <div className='flex justify-center items-center'><img src={AppleP} alt="Paiment method accpeted Apple" /></div>
              <div className='flex justify-center items-center'><img src={GooglepP} alt="Paiment method accpeted Google play" /></div>
            </div>
          </div>
        </footer>
    </div>
  )
}
