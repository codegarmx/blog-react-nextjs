// Import core libraries
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Import assets
import siteLogo from '../assets/logo-blog.png'

const Header = ({navlinks}) => {
  return (
    <header className='flex flex-row'>
      {/* */}
      <div className='basis-1/4'>
        <Link href={'/'}>
          <Image
            src={siteLogo}
            alt='Blog'
          />
        </Link>
      </div>
      {/* Navbae */}
      <nav className='basis-3/4'>
        <ul className='flex h-full flex-row justify-end items-center'>
          {
            navlinks.map((item, index) => (
              <li key={`navbar-item-${index}`}>
                <Link className='font-bold py-2 px-5 hover:bg-blue-500 hover:text-white hover:rounded' href={item.href}>{item.title}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header
