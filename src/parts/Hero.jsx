import React from 'react'
import Button from '../components/Button'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/autoplay'

export default function Hero({ data }) {
  return (
    <>
      <Swiper modules={[Autoplay]} spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000, disableOnInteraction: false }}>
        {data.map((item, index) => {
          return (
            <SwiperSlide key={item.uuid}>
              <section className='h-96 overflow-hidden relative md:h-[450px] lg:h-[550px]'>
                <div className='absolute inset-0 bg-gradient-to-b from-dark-200/30 to-dark-200 text-white flex justify-center flex-col px-8 md:items-center md:px-32 md:text-center lg:bg-gradient-to-r lg:items-start lg:text-left lg:from-dark-200 lg:to-dark-200/30'>
                  <header className='mb-3 space-y-1 text-[##EAECF2] lg:mb-5'>
                    <h1 className='text-base font-semibold lg:text-xl'>
                      {item.jp_anime_title} ({item.anime_type})
                    </h1>
                    <h2 className='text-sm lg:text-lg'>{item.en_anime_title}</h2>
                  </header>
                  <article className='text-lite text-light-50 font-normal leading-5 line-clamp-4 lg:max-w-xl lg:text-sm lg:leading-8'>
                    <p>{item.synopsis}</p>
                  </article>

                  <div className='mt-14'>
                    <Button isPrimary hasShadow type={'link'} href={'/'}>
                      Download Now
                    </Button>
                  </div>
                </div>
                <figure className='w-full h-full'>
                  <img src={item.image} alt={`image of ${item.jp_anime_title}`} className='w-full h-full object-cover' />
                </figure>
              </section>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
