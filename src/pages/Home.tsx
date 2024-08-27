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
      <div className="home-hero">
        <form action="" className='home-hero-fm d-f'>
          <div className="select-bl d-f align-center">
            <select name="chekin">
              <option value="0">Checkin</option>
            </select>
            <div className="select-divider"></div>
            <select name="chekout">
              <option value="0">Checkout</option>
            </select>
          </div>
          <button type="button">Book room</button>
        </form>
      </div>
      <section className='home-info d-f jc-sb'>
        <div>
          <div className="home-info-phone">+38 032 297 50 20</div>
          <div className="home-info-address">8 Lystopadovoho Chynu, Lviv</div>
        </div>
        <p className="home-info-desc">Art & Congress hall</p>
      </section>
      <section className='home-about d-f jc-sb align-center'>
        <div><img src="/images/home-about1.png" alt="home-about1" /></div>
        <div>
          <h2 className="home-about-title">About <span>US</span></h2>
          <h4 className="home-about-subtitle">High quality</h4>
          <p className="home-about-desc">
            The five-star Bank Hotel was reopened to visitors in 2016. The building was renovated
            and modernized to meet the expectations of the most demanding guests. We offer luxurious rooms,
            numerous facilities, and exceptional service.
          </p>
        </div>
        <div>
          <div><img src="/images/home-about3.png" alt="home-about3" /></div>
          <div style={{ marginLeft: "83px", marginTop: "-42px" }}><img src="/images/home-about2.png" alt="home-about2" /></div>
          <div className="home-about-rooms">
            <div className="rooms-title"> <span>Rooms</span> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  and apartments</div>
            <a href="" className="rooms-link"><img src="/images/arrow-down.svg" alt="arrow-down" /></a>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home