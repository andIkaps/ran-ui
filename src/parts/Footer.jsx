import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import BrandIcon from './BrandIcon'

function Footer() {
  return (
    <Fade direction='up' triggerOnce={true}>
      <footer className='container my-20 grid grid-cols-2 gap-8 lg:grid-cols-5'>
        <section className='col-span-2 md:col-span-1 lg:col-span-2'>
          <BrandIcon />
          <p className='mt-5 text-light-100 leading-8 text-xs'>
            RAN merupakan sebuah platform download anime gratis yang disediakan oleh kami untuk kebutuhan para wibu-wibu yang ingin menonton anime tetapi tidak mampu untuk berlangganan pada situs
            ANIME berbayar.
          </p>
        </section>
        <section className='col-span-2 md:col-span-1'>
          <h1 className='text-dark-200 font-semibold'>For Begginers</h1>

          <ul className='flex flex-col space-y-7 mt-5 text-light-100 text-xs md:mt-8'>
            <li>
              <Link to={'/'}>Create account (optional)</Link>
            </li>
            <li>Choose ANIME</li>
            <li>Download ANIME</li>
          </ul>
        </section>
        <section className='col-span-1'>
          <h1 className='text-dark-200 font-semibold'>Explore Us</h1>

          <ul className='flex flex-col space-y-7 mt-5 text-light-100 text-xs'>
            <li>
              <Link to={'/'}>Seasonal</Link>
            </li>
            <li>
              <Link to={'/'}>Genre</Link>
            </li>
            <li>
              <Link to={'/'}>Schedule</Link>
            </li>
          </ul>
        </section>
        <section className='col-span-1'>
          <h1 className='text-dark-200 font-semibold'>Connect Us</h1>

          <ul className='flex flex-col space-y-7 mt-5 text-light-100 text-xs'>
            <li>
              <Link to={'/'}>Facebook</Link>
            </li>
            <li>
              <Link to={'/'}>Discord</Link>
            </li>
          </ul>
        </section>
        <section className='col-span-2 lg:col-span-5 text-center mt-10'>
          <p className='text-xs text-light-100'>
            Made with <span className='text-red-600'>♥</span> by RAN Team
          </p>
        </section>
      </footer>
    </Fade>
  )
}

export default Footer
