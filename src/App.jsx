import React from 'react'
import HomeMap from './components/HomeMap'
import Navbar from './components/Navbar'
import MainInfo from './components/MainInfo'
import SecondaryInfo from './components/SecondaryInfo'

export default function App() {

  return (
    <>
      <Navbar />
      <HomeMap />
      <MainInfo />
      <SecondaryInfo/>
    </>
  )
}

