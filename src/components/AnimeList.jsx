import React from 'react'
import Button from './Button'

function Card({ image, title, type, episode, timestamp, uploaded_by, synopsis, href }) {
  return (
    <div className='col-span-1 flex items-center space-x-4 md:flex-col lg:flex-row'>
      <figure className='w-32 h-52 overflow-hidden rounded-md md:w-full lg:w-72 lg:h-80'>
        <img src={image} alt={`image of ${title}`} className='w-full h-full object-cover' />
      </figure>

      <article className='w-36 md:w-full md:mt-5 lg:w-40 lg:mt-0'>
        <h1 className='text-xs font-semibold truncate text-dark-200 sm:text-sm md:text-base' title={title}>
          {title} ({type})
        </h1>
        <div className='text-light-200 md:flex md:justify-between md:items-center md:flex-col lg:items-start'>
          <h2 className='text-xs my-1 md:text-sm lg:my-2'>{episode}</h2>
          <span className='text-lite md:text-xs lg:whitespace-nowrap'>
            {timestamp} by : {uploaded_by}
          </span>
        </div>

        <p className='text-[8px] leading-4 line-clamp-5 my-3 text-light-100 md:text-lite md:leading-5 lg:line-clamp-6 lg:my-5' title={synopsis}>
          {synopsis}
        </p>

        <Button isPrimary hasShadow ClassName={'w-full lg:w-auto'} type='link' href={href}>
          Read more
        </Button>
      </article>
    </div>
  )
}

export default function AnimeList({ data }) {
  return (
    <main className='grid grid-cols-1 gap-10 mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16'>
      {data.map(item => {
        return (
          <Card
            key={item.uuid}
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
    </main>
  )
}
