import React from 'react'
import AnimeList from '../components/AnimeList'
import SectionTitle from '../components/SectionTitle'

export default function BatchAnime({ data }) {
  return (
    <section className='container my-20'>
      <SectionTitle title={'Download batch ANIME'} href={'/'} isVisible />

      <AnimeList data={data} />
    </section>
  )
}
