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
      <section className='home-rooms'>
        <div className='d-f jc-sb'>
          <h2 className="home-rooms-title">Rooms & apartments</h2>
          <h4 className="home-rooms-subtitle">All room decoration was made with ecological certified and safe materials.</h4>
        </div>
        <div className="home-rooms-box d-f jc-sb">
          <div>
            <div><img src="/images/home-rooms1.png" alt="home-rooms1" /></div>
            <div style={{ marginTop: "315px" }}><a href=""><img src="/images/polygon3.png" alt="polygon3" /></a></div>
          </div>
          <div>
            <div className="home-rooms-year">Since 1973</div>
            <div className="home-rooms-twin">
              <h3 className="twin-title">Superior Twin</h3>
              <p className="twin-desc">
                The Superior twin is perfect for those who plan to stay long. The spacious and bright
                room is equipped with deluxe Italian furniture and has a beautiful view to the historical
                part of the city. Stylish interior design and comfortable beds will make your stay cozy
                and pleasant.
              </p>
            </div>
            <div className="home-rooms-pages"><span>01</span>&nbsp; &nbsp;  / &nbsp;&nbsp;  04</div>
          </div>
          <div className="home-pages-book">
            <a href="" className="book-link">Book room</a>
          </div>
        </div>
        <div className="home-bl-divider"></div>
      </section>
      <section className='home-facilities'>
        <div className="d-f jc-sb">
          <div>
            <h4 className="home-facilities-subtitle">Art & Congress hall</h4>
            <div style={{ marginTop: "336px" }}><img src="/images/home-facilities1.png" alt="home-facilities1" /></div>
          </div>
          <div>
            <h2 className="home-facilities-title">Our <br /> faci <br /> <span>lities</span> </h2>
            <p className="home-facilities-desc">
              Bank Hotel offers you a wide range of additional services and facilities.
              Visit our restaurant to try exclusive meals, book a conference hall
              to organize a business meeting, or relax in the art-bar.
            </p>
          </div>
          <div className='pos-r'>
            <div className="home-facilities-label"><img src="/images/premium-label.svg" alt="premium-label" /></div>
            <div style={{ marginTop: "82px" }}><img src="/images/home-facilities2.png" alt="home-facilities2" /></div>
          </div>
        </div>
        <div className="home-facilities-one d-f jc-sb align-center">
          <div><a href=""><img src="/images/polygon5.png" alt="polygon5" /></a></div>
          <div>
            <h3 className="facilities-num">01</h3>
            <h3 className="facilities-item-title">Ice Restaurant</h3>
            <p className="facilities-item-desc">
              The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant.
              Author’s menu, extensive wine card, and live music will set you for the correct mood.
            </p>
          </div>
          <div><img src="/images/home-facilities3.png" alt="home-facilities3" /></div>
        </div>
        <div className="home-facilities-item d-f jc-sb align-center">
          <div><img src="/images/home-facilities4.png" alt="home-facilities4" /></div>
          <h3 className="facilities-num">02</h3>
          <h3 className="facilities-item-title">Conference Hall</h3>
          <div><a href=""><img src="/images/arrow-right.png" alt="arrow-right" /></a></div>
        </div>
        <div className="home-facilities-item d-f jc-sb align-center">
          <div><img src="/images/home-facilities5.png" alt="home-facilities4" /></div>
          <h3 className="facilities-num">03</h3>
          <h3 className="facilities-item-title">Wine Bar “Reserve”</h3>
          <div><a href=""><img src="/images/arrow-right.png" alt="arrow-right" /></a></div>
        </div>
      </section>
      <section className='home-best'>
        <h2 className='home-best-title'>Best apartments</h2>
        <p className="home-best-desc">
          All room decoration was made with ecological certified and safe materials.
        </p>
      </section>
      <section className='home-gallery d-f'>
        <div>
          <h4 className="home-gallery-subtitle">Art & Congress hall</h4>
          <div><img src="/images/gallery1.png" alt="gallery1" /></div>
          <div style={{ marginTop: "341px", marginLeft: "30px" }}>
            <img src="/images/gallery2.png" alt="gallery2" />
          </div>
        </div>
        <div style={{ width: "916px", marginLeft: "173px" }}>
          <div className='home-gallery-label'><img src="/images/gallery-label.png" alt="gallery-label" /></div>
          <h2 className="home-gallery-title">Our Gallery</h2>
          <p className="home-gallery-desc">
            Explore our spacious rooms with the gorgeous view to the historical part of the city.
            Each room has an exclusive interior design decorated with modern art pieces that will
            make your stay unforgettable.
          </p>
          <div><img src="/images/gallery3.png" alt="gallery3" /></div>
          <p className="home-gallery-note">It is our pleasure to meet your most unrealistic expectations.</p>
        </div>
        <div>
          <div style={{ marginLeft: "173px" }}><img src="/images/gallery4.png" alt="gallery4" /></div>
          <div style={{ marginTop: "902px" }}><img src="/images/gallery5.png" alt="gallery5" /></div>
        </div>
      </section>
      <section className='home-touch d-f jc-sb'>
        <div>
          <div className="home-touch-phone">+38 032 297 50 20</div>
          <form action="" className='home-touch-fm'>
            <h3>Find a room</h3>
            <div className="d-f">
              <div className="select-box d-f">
                <div className="select-bl">
                  <select name="checkin">
                    <option value="0">Check in</option>
                  </select>
                </div>
                <div className="select-bl">
                  <select name="checkout">
                    <option value="0">Check out</option>
                  </select>
                </div>
              </div>
              <button type='button'>Book room</button>
            </div>
          </form>
        </div>
        <div>
          <div className="home-touch-address">8 Lystopadovoho Chynu, Lviv</div>
          <div><img src="/images/home-touch.png" alt="home-touch" /></div>
        </div>
        <h2 className="home-touch-title">Get in <br /> <span>touch</span></h2>
      </section>
    </>
  )
}

export default Home