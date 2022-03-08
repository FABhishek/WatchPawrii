import React from 'react'
import './Home.css'
import Navigation from './Navigation'
import AppBody from './AppBody'


const Home = () => {
  return (
    <div className="Title">
      <Navigation />
      <AppBody />
    </div>
  )
}

export default Home
