import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
import Link from 'next/link';

const navItems = ['Process', 'Work', 'FAQs', 'Webflow', 'Blog', 'Contact'];

const Nav = () => {
  return (
    <nav>
      <ul className='flex items-center'>
        {
          navItems.map((item, index) => {
            return <Link href={'#'} key={`${item}-${index}`}>
              <li className={`relative ${index === navItems.length - 1 ? '' : 'mr-9'} text-white/75 group hover:text-white duration-200`}>
                <span className='absolute inline-block left-0 bottom-0 h-0.5 w-0 bg-white duration-200 group-hover:w-full transition-[width] ease-linear'/>
                {item}
              </li>
            </Link> 
          })
        }
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header className='flex items-center justify-between w-[1440px] mx-auto pt-16 px-12'>
      <div className='w-20 h-auto'>
        <Image src={logo} alt='logo' className='w-full h-auto' />
      </div>
      <Nav />
    </header>
  )
}

export default Header