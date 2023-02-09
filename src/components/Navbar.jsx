import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import DownIcon from './icons/DownIcon'

function DropDown({ refDropdown }) {
  return (
    <div
      className='absolute -bottom-44 2xl:-bottom-52 -left-10 px-4 py-3.5 w-44  bg-primary rounded-md shadow-xl shadow-primary/20 transition-all'
      ref={refDropdown}
    >
      <ul className='flex flex-col text-lite xs:text-xs font-medium text-white md:text-sm 2xl:text-lg'>
        <li>
          <Link to='/' className='inline-block w-full px-2 py-2 hover:bg-light-50/10'>
            Anime List
          </Link>
        </li>
        <li>
          <Link to='/' className='inline-block w-full px-2 py-2 hover:bg-light-50/10'>
            Seasonal
          </Link>
        </li>
        <li>
          <Link to='/' className='inline-block w-full px-2 py-2 hover:bg-light-50/10'>
            Genre
          </Link>
        </li>
        <li>
          <Link to='/' className='inline-block w-full px-2 py-2 hover:bg-light-50/10'>
            Schedule
          </Link>
        </li>
      </ul>
    </div>
  )
}

function Navbar() {
  const [isShow, setIsShow] = useState(false)
  const refDropDown = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (refDropDown.current && !refDropDown.current.contains(event.target)) {
        setIsShow(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [refDropDown])

  return (
    <ul className='flex flex-col text-lite xs:text-xs font-medium md:flex-row md:space-x-5 md:text-sm 2xl:text-lg'>
      <li>
        <Link to='/' className='inline-block w-full px-2 py-2 hover:bg-light-50/10'>
          Home
        </Link>
      </li>
      <li className='hidden md:block relative'>
        <Link to='/' className='inline-flex items-center w-full px-2 py-2 hover:bg-light-50/10' onClick={() => setIsShow(!isShow)}>
          ANIME
          <DownIcon />
        </Link>

        {isShow && <DropDown refDropdown={refDropDown} />}
      </li>
      <li className='md:hidden'>
        <Link to='/' className='inline-block w-full px-2 py-2 hover:bg-light-50/10'>
          Anime List
        </Link>
      </li>
      <li className='md:hidden'>
        <Link to='/' className='inline-block w-full px-2 py-2 hover:bg-light-50/10'>
          Seasonal
        </Link>
      </li>
      <li className='md:hidden'>
        <Link to='/' className='inline-block w-full px-2 py-2 hover:bg-light-50/10'>
          Genre
        </Link>
      </li>
      <li className='md:hidden'>
        <Link to='/' className='inline-block w-full px-2 py-2 hover:bg-light-50/10'>
          Schedule
        </Link>
      </li>
      <li>
        <Link to='/' className='inline-block w-full px-2 py-2 hover:bg-light-50/10'>
          Recommendations
        </Link>
      </li>
    </ul>
  )
}

function Mobile({ refNavbar }) {
  return (
    <div className='absolute -bottom-44 px-4 py-3.5 w-full right-0 bg-primary rounded-sm shadow-xl shadow-primary/20 transition-all' ref={refNavbar}>
      <nav className='text-white'>
        <Navbar />
      </nav>
    </div>
  )
}

Navbar.mobile = Mobile

export default Navbar
