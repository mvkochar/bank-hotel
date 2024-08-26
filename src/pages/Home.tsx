import React from 'react'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main d-f jc-sb'>
        <div>
          <h1 className="home-main-title">Bank<span>Hotel</span></h1>
          <div className="home-main-info">rooms // restaurant // congress hall // wine bar</div>
        </div>
        <div>
          <div className="home-main-year">Since 1973</div>
          <p className="home-main-desc">
            The luxurious hotel in the most beautiful European city with an exclusive restaurant, conference-hall, and art-bar.
          </p>
        </div>
        <button className='home-main-btn'><img src="/images/arrow-down.svg" alt="arrow-down" /></button>
      </main>
    </>
  )
}

export default Home