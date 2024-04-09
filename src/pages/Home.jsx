import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import endpoints from '../services/MovieServices'

const Home = () => {
  return (
    <>
      <Hero />
      <MovieRow title='upcoming' url={endpoints.upcoming} />
      <MovieRow title='trending' url={endpoints.trending} />
      <MovieRow title='top rated' url={endpoints.topRated} />
      <MovieRow title='comdey' url={endpoints.comedy} />
      <MovieRow title='popular' url={endpoints.popular} />
    </>
  )
}

export default Home