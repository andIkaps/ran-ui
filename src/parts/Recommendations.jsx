import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

function CardRecommendation({ className, item }) {
  return (
    <div className={['col-span-1 rounded-md row-span-1 w-full h-72 bg-gray-300 md:col-span-2 lg:col-span-1 relative overflow-hidden lg:h-full', className].join(' ')}>
      <Link to='/' className='absolute inset-0 bg-gradient-to-b from-dark-200/30 to-dark-200 flex flex-col justify-end text-white px-5 pb-5'>
        <h1 className='font-semibold text-sm truncate'>
          {item.anime.jp_anime_title} ({item.anime.anime_type})
        </h1>
        <h2 className='font-normal text-xs my-2'>{`${item.anime.episode.length} Episode`}</h2>
        <p className='font-normal text-lite text-light-200'>{item.anime.user_recommended} User Recommended</p>
      </Link>
      <figure className='w-full h-full'>
        <img src={item.anime.image} alt={item.anime.jp_anime_title} className='w-full h-full object-cover' />
      </figure>
    </div>
  )
}

export default function Recommendations({ data }) {
  const item = data[0]
  return (
    <Fade>
      <section className='container my-20'>
        <SectionTitle title={'Recommendations'} href={'/'} isVisible />

        <div className='mt-8 md:hidden'>
          <Swiper spaceBetween={10} slidesPerView={2} modules={[Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: false }}>
            {data.map((item, index) => (
              <SwiperSlide key={`${item.uuid}${index}`}>
                <CardRecommendation item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <main className='hidden md:grid gap-5 grid-cols-1 grid-rows-1 mt-8 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-3'>
          {data.map((item, index) => {
            let className = ''
            if (index + 1 === 2) className = 'md:col-span-2 md:row-span-2 md:h-full lg:col-span-1 lg:row-span-1'
            if (index + 1 === 3) className = 'md:col-span-2 lg:col-span-1 lg:row-span-2'
            if (index + 1 === 4 || index + 1 === 5) className = 'md:hidden lg:block'
            return <CardRecommendation key={`${item.uuid}${index}`} item={item} className={className} />
          })}
        </main>
      </section>
    </Fade>
  )
}
