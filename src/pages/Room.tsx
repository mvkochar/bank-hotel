import React from 'react'
import './css/Room.css'
import Touch from '../components/Touch/Touch'

const Room = () => {
    return (
        <>
            <main className='room-main d-f jc-sb'>
                <div>
                    <h1 className="room-main-title">Superior twin</h1>
                    <p className="room-main-desc">
                        All room decoration was made with ecological certified and safe materials.
                    </p>
                </div>
                <button className='room-main-btn'>Book room</button>
            </main>
            <section className='room-hero'>
                <div className="d-f jc-sb">
                    <div>
                        <div className="room-hero-year">Since 1973</div>
                        <h2 className="room-hero-title">
                            All suites have a unique design because we want our every guest to feel special.
                        </h2>
                    </div>
                    <p className="room-hero-desc">
                        The Superior twin would perfectly match the needs of those who plan to stay long.
                        The bright and airy room is equipped with superior soft Italian furniture. Large windows
                        open a beautiful view to the historical part of the city. Contemporary interior design and
                        comfortable beds will make your stay cozy and delightful.
                    </p>
                </div>
                <div className="room-hero-premier">Premier Standard</div>
                <div><img src="/images/room-hero.png" alt="room-hero" /></div>
            </section>
            <section className='room-info'>
                <div className="room-info-label"><img src="/images/premium-label2.svg" alt="premium-label2" /></div>
                <div className="room-info-box d-f jc-sb">
                    <div>
                        <div><img src="/images/room-info1.png" alt="room-info1" /></div>
                        <h2 className="room-info-title">Superior twin</h2>
                        <p className="room-info-desc">
                            All rooms in Bank Hotel have a special charm achieved through a combination
                            of modern functional design and original 20th century layout.
                        </p>
                        <button className='room-info-btn'>/Book room</button>
                    </div>
                    <div>
                        <div><img src="/images/room-info2.png" alt="room-info2" /></div>
                        <p className="room-info-desc info-desc__large">
                            The Superior twin includes two functional zones: a living room with the best 
                            Italian furniture, and an isolated cozy bedroom with a large bed. Here, you 
                            will find space both for work and comfortable rest. Hotel offers supreme comfort 
                            and outstanding 24-hour room service to make sure that the time you spend here is 
                            enjoyable and pleasant.
                        </p>
                    </div>
                </div>
            </section>
            <Touch />
        </>
    )
}

export default Room