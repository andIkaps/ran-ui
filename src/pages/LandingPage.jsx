import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import db from '../json/db_test.json'
import NewRelease from '../parts/NewRelease'

export default function LandingPage() {
  return (
    <>
      <header className='pt-8 pb-6 border-b border-b-[#EAECF2]'>
        <Header />
      </header>

      <Hero data={db[0].landing_page.most_downloaded} />

      <main>
        <NewRelease data={db[0].landing_page.new_release} />
      </main>
    </>
  )
}
