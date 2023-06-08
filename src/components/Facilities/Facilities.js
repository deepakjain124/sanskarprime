import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Images } from '../../assets/Image';

const Facilities = () => {
    const carouselOptions = {
        items: 3,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      };
  return (
    <>
    <OwlCarousel className="owl-theme " style={{marginTop:"100px"}} {...carouselOptions}>
    <div className="partner-carousel-item">
    <div className="single-facility-blog">
      <span className="facility-icon">
        <img src={Images.Ac} alt="" />
      </span>
      <span className="title-type">
        High Speed wifi
      </span>
    </div>
  </div>
  <div className="partner-carousel-item">
    <div className="single-facility-blog">
      <span className="facility-icon">
        <img
          src={Images.parking}
          alt=""
        />
      </span>
      <span className="title-type"> Free Parking</span>
    </div>
  </div>
  <div className="partner-carousel-item">
    <div className="single-facility-blog">
      <span className="facility-icon">
        <img
          src={Images.restaurent}
          alt=""
        />
      </span>
      <span className="title-type">
        Multi Cuisine Restaurant
      </span>
    </div>
  </div>
  <div className="partner-carousel-item">
    <div className="single-facility-blog">
      <span className="facility-icon">
        <img
          src={Images.toilet}
          alt=""
        />
      </span>
      <span className="title-type">
        Rennovate Toilets
      </span>
    </div>
  </div>
  <div className="partner-carousel-item">
    <div className="single-facility-blog">
      <span className="facility-icon">
        <img
          src={Images.cabletv}
          alt=""
        />
      </span>
      <span className="title-type">Cable Tv</span>
    </div>
  </div>
  <div className="partner-carousel-item">
    <div className="single-facility-blog">
      <span className="facility-icon">
        <img
          src={Images.furniture}
          alt=""
        />
      </span>
      <span className="title-type">
        Well furnished Rooms
      </span>
    </div>
  </div>
  <div className="partner-carousel-item">
    <div className="single-facility-blog">
      <span className="facility-icon">
        <img src={Images.wifi} alt="" />
      </span>
      <span className="title-type">
        Ac Rooms with WiFi
      </span>
    </div>
  </div>
  <div className="partner-carousel-item">
    <div className="single-facility-blog">
      <span className="facility-icon">
        <img
          src={Images.kitchenSet}
          alt=""
        />
      </span>
      <span className="title-type">
        Well equipped kitchen
      </span>
    </div>
  </div>
  </OwlCarousel>
  </>
  )
}

export default Facilities