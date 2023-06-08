import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Images } from '../../assets/Image';
const Clients = () => {
    const carouselOptions = {
        items: 2,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      };
  return (
    <>
        <OwlCarousel className="owl-theme" {...carouselOptions}>

    <div className="client-carousel-item">
                  <img
                    alt=""
                    className="client-img"
                    width={20}
                    src={Images.Manlogo}
                  />
                  <div className="client-box">
                    <img alt="" className="image-quote" src="" />
                    <div className="client-title">
                      <span className="client-name">Harish Sharma</span>
                    </div>
                    <p className="client-description">
                      Yesterday I have visited sanskar prime. I would say my
                      experience is extraordinary. Staff is very supportive.
                      Rooms are so clean and washroom outstanding. One point
                      that I would like to add everything was up to expectations
                      except little bit network issue otherwise I recommend as
                      one of the best hotel in Jaipur in pocket friendly budget.
                    </p>
                  </div>
                </div>
                <div className="client-carousel-item">
                  <img
                    alt=""
                    className="client-img"
                    src={Images.womanlogo}
                  />
                  <div className="client-box">
                    <img alt="" className="image-quote" src="" />
                    <div className="client-title">
                      <span className="client-name">Muskan Mathur </span>
                    </div>
                    <p className="client-description">
                      I have a group of friends who love to travel to other
                      cities frequently… this time they choose to visit Jaipur
                      for the very first time and hence I was worried about
                      their stay, they were traveling by Bus, so I needed a
                      hotel near to the bus stand, so due to that I came across
                      Sanskar Prime Hotel, which was fantastic and everything
                      went smoothly. The staff members were warm, kind, and
                      helpful.
                    </p>
                  </div>
                </div>
                <div className="client-carousel-item">
                  <img
                    alt=""
                    className="client-img"
                    src={Images.Manlogo}
                    width={20}
                  />
                  <div className="client-box">
                    <img alt="" className="image-quote" src="" />
                    <div className="client-title">
                      <span className="client-name">Aman Kayat</span>
                    </div>
                    <p className="client-description">
                      I recently stayed at the Sanskar Prime Hotel and I have to
                      say that my experience was wonderful. The staff at the
                      hotel was incredibly friendly and welcome, and they went
                      out of their way to make my stay comfortable and
                      memorable.
                    </p>
                    <p>
                      Overall, I would highly recommend the Sanskar Prime Hotel
                      to anyone looking for a comfortable and luxurious stay in
                      Jaipur.
                    </p>
                  </div>
                </div>
                <div className="client-carousel-item">
                  <img
                    alt=""
                    className="client-img"
                    src={Images.Manlogo}
                  />
                  <div className="client-box">
                    <img alt="" className="image-quote" src="" />
                    <div className="client-title">
                      <span className="client-name">Mahesh Sharma</span>
                    </div>
                    <p className="client-description">
                      One of the best hotels in Jaipur, superb service,
                      supportive staff, rooms and bathroom are clean.
                    </p>
                  </div>
                </div>
                </OwlCarousel>
    </>
  )
}

export default Clients