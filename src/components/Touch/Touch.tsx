import React from 'react'

const Touch = () => {
  return (
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
  )
}

export default Touch