import React, { useEffect, useRef, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import DownIcon from '../components/icons/DownIcon'
import Menu from '../components/icons/MenuIcon'
import { SearchIcon } from '../components/icons/SearchIcon'
import Navbar from '../components/Navbar'
import BrandIcon from './BrandIcon'

export default function Header() {
  const [isShow, setIsShow] = useState(false)
  const refNavbar = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (refNavbar.current && !refNavbar.current.contains(event.target)) {
        setIsShow(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [refNavbar])

  return (
    <section className='container grid grid-cols-1 gap-5 relative lg:grid-cols-2'>
      <div className='col-span-1 flex justify-between items-center lg:justify-start lg:space-x-16'>
        <Link to={'/'}>
          <BrandIcon />
        </Link>

        <nav className='hidden md:block text-dark-200'>
          <Navbar />
        </nav>

        {isShow && <Navbar.mobile refNavbar={refNavbar} />}

        <Button isPlain onClick={() => setIsShow(true)} ClassName='md:hidden'>
          <Menu />
        </Button>
      </div>
      <div className='col-span-1 flex justify-center items-center space-x-4 text-dark-200 font-medium lg:justify-end lg:space-x-6'>
        <Button isPlain ClassName={'font-medium space-x-3'}>
          <span>Search ANIME</span>
          <SearchIcon />
        </Button>
        <span className='text-xs'>|</span>
        <div className='flex items-center space-x-3 lg:space-x-6'>
          <Button isPlain type={'link'} href={'/'} ClassName='font-medium'>
            Login
          </Button>
          <Button type={'link'} href={'/'} isPrimary hasShadow>
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  )
}
