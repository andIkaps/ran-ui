import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import db from '../json/db_test.json'
import NewRelease from '../parts/NewRelease'
import OnGoing from '../parts/OnGoing'
import Recommendations from '../parts/Recommendations'
import BatchAnime from '../parts/BatchAnime'

export default function LandingPage() {
  return (
    <>
      <header className='pt-8 pb-6 border-b border-b-[#EAECF2]'>
        <Header />
      </header>

      <Hero data={db[0].landing_page.most_downloaded} />

      <main>
        <NewRelease data={db[0].landing_page.new_release} />
        <OnGoing data={db[0].landing_page.on_going} />
        <Recommendations data={db[0].landing_page.recommended} />
        <BatchAnime data={db[0].landing_page.batch_anime} />
      </main>
    </>
  )
}
