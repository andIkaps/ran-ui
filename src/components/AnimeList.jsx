import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'
import Button from './Button'
import ArrowRight from './icons/ArrowRight'

function Card({ image, title, type, episode, timestamp, uploaded_by, synopsis, href }) {
  return (
    <Link to={'/'} className='col-span-1 flex flex-col items-center md:flex-col'>
      <figure className='w-full h-52 overflow-hidden rounded-md md:w-full lg:h-80'>
        <img src={image} alt={`image of ${title}`} className='w-full h-full object-cover' />
      </figure>

      <article className='w-full mt-3 md:w-full md:mt-5'>
        <h1 className='text-xs font-semibold truncate text-dark-200 sm:text-sm md:text-base' title={title}>
          {title} ({type})
        </h1>
        <div className='text-light-200 md:flex md:justify-between md:flex-col lg:flex-row lg:items-center lg:justify-between'>
          <h2 className='text-xs my-1 md:text-sm lg:my-2 text-dark-200/80'>{episode}</h2>
          <span className='text-lite md:text-xs lg:whitespace-nowrap text-dark-200/70'>
            {timestamp} by : {uploaded_by}
          </span>
        </div>

        <p className='text-[8px] xs:text-lite leading-4 line-clamp-3 my-3 text-dark-200/60 md:text-lite md:leading-5 lg:line-clamp-4 lg:my-5' title={synopsis}>
          {synopsis}
        </p>

        {/* <Button ClassName={'font-normal'} isPlain type='link' href={href}>
          <span className='mr-3'>Read more</span>
          <ArrowRight />
        </Button> */}
      </article>
    </Link>
  )
}

export default function AnimeList({ data }) {
  return (
    <main className='grid grid-cols-2 gap-5 mt-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-8'>
      <Fade cascade damping={0.1} triggerOnce={true}>
        {data.map((item, index) => {
          return (
            <Card
              key={`${item.uuid}${index}`}
              image={item.image}
              title={item.jp_anime_title}
              type={item.anime_type}
              episode={'Epsisode 7'}
              timestamp={'14 minutes ago'}
              uploaded_by={item.uploaded_by}
              synopsis={item.synopsis}
              href={'/'}
            />
          )
        })}
      </Fade>
    </main>
  )
}
