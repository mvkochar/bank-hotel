import React from 'react'
import './css/Facility.css'
import Touch from '../components/Touch/Touch'

const Facility = () => {
    return (
        <>
            <main className='facility-main d-f'>
                <div>
                    <h1 className="facility-main-title">“Safe” restaurant</h1>
                    <h4 className="facility-main-subtitle">One of a Kind</h4>
                </div>
                <div>
                    <div className='facility-main-label'><img src="/images/facility-label.png" alt="facility-label" /></div>
                    <p className="facility-main-desc">
                        Bank Hotel proudly welcomes you to the Safe Restaurant, a place where you
                        will wish you could dine every day. The restaurant offers a unique menu
                        developed by the team of professionals led by chef Mary-Ann Jones, the wine
                        list with more than 250 items, the outstanding service, and the unforgettable atmosphere.
                    </p>
                </div>
            </main>
            <section className='facility-info'>
                <div className="d-f jc-sb">
                    <div>
                        <div><img src="/images/facility-info1.png" alt="facility-info1" /></div>
                        <h2 className="facility-info-title">At your service</h2>
                        <p className="facility-info-desc">
                            The team of the Safe Restaurant aims to exceed all expectations of our guests.
                            Our chef worked hard to develop a unique menu that features the best meals of
                            the European cuisine that will match the tastes of the most demanding clients.
                            Friendly and attentive waiters will ensure that you will enjoy your time in our restaurant.
                        </p>
                    </div>
                    <div><img src="/images/facility-info2.png" alt="facility-info2" /></div>
                </div>
                <div className="d-f jc-sb align-center" style={{ marginTop: "300px" }}>
                    <div>
                        <div><img src="/images/facility-info3.png" alt="facility-info3" /></div>
                        <p className="facility-info-note">
                            All room decoration was made with ecological certified and safe materials.
                        </p>
                    </div>
                    <div>
                        <h2 className="facility-info-title" style={{ marginTop: 0, width: "942px" }}>
                            Once you try our cuisine and service, you shall never want to visit another restaurant.
                        </h2>
                        <div style={{ marginTop: "150px" }}><img src="/images/facility-info4.png" alt="facility-info4" /></div>
                        <h2 className="facility-info-title">Spend Your Time <br /> With Us</h2>
                        <p className="facility-info-desc">
                            If you are looking for an exclusive place to have a romantic dinner, organize 
                            a business meeting, or spend an enjoyable evening with friends, visit 
                            Safe Restaurant in Bank Hotel. With our delicious meals, unique interior design, 
                            and atmosphere of comfort and exquisiteness you shall never want to go to a different restaurant.
                        </p>
                    </div>
                </div>
            </section>
            <Touch />
        </>
    )
}

export default Facility