import React from 'react'
import AnimeList from '../components/AnimeList'
import SectionTitle from '../components/SectionTitle'

export default function OnGoing({ data }) {
  return (
    <section className='container my-20'>
      <SectionTitle title={'ANIME on-going'} href={'/'} isVisible />

      <AnimeList data={data} />
    </section>
  )
}
