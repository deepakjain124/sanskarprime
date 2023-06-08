import React from "react";
// import "./assets/css/animsition.css";
import "./assets/css/bootstrap-datepicker.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/jquery.fullPage.css";
import "./jquery.pagepiling";
import "./assets/css/navigation.css";
// import "./assets/css/owl.carousel.css";
import "./assets/css/style.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { Images } from "./assets/Image";
import Clients from "./components/ourclient/client";
import Facilities from "./components/Facilities/Facilities";
import HomeVideo from "./components/HomeVideo";
import Welcome from "./components/Welcome";
function App() {
  return (
    <>
      <div className="body-fullpage">
        <div className="animsition">
          <div className="click-capture"></div>

          <div className="menu">
            <span className="close-menu fa fa-close right-boxed"></span>
            <ul className="menu-list right-boxed">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="rooms-suites.html">Rooms</a>
              </li>
              <li>
                <a href="banquet-hall.html">Banquet Hall</a>
              </li>
              <li>
                <a href="restaurants.html">Restaurant</a>
              </li>
              <li>
                <a href="contactus.html">Contact Us</a>
              </li>
            </ul>
            <div className="menu-footer right-boxed">
              <div className="social-list"></div>
              <div className="social-list hidden-xs">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-google-plus"></a>
              </div>
              <div className="copy">
                © sanskarprime 2023. All Rights Reseverd Design And Developed By
                <a href="https://ezulix.com/">Ezulix Software</a>
              </div>
            </div>
          </div>
          <header
            className="navbar navbar-2 navbar-white boxed"
            style={{ position: "fixed", zIndex: "999" }}
          >
            <div className="navbar-bg"></div>
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-expanded="false"
            >
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="brand" href="#">
              <img className="brand-img" alt="logo" src={Images.Logo} />
              <img className="brand-img-white" alt="logo" src={Images.Logo} />
            </a>
          </header>
          <div className="pagepiling">
            <div class="pp-scrollable text-white section section-1 home-video-section">
              <div class="scroll-wrap">
                <HomeVideo />
              </div>
            </div>
            <div class="pp-scrollable section section-2 home-aboutus-section">
        <div class="scroll-wrap">
          <div class="">
            <div class="">
              <div class="">
                <div class="boxed">
                  <div class="container">
                    <div class="">
                      <div class="row">
                        <div class="col-md-12 col-lg-12">
                          <div class="title-section">
                            <div class="about-sub-heading">Welcome To</div>
                            <h1 class="title-uppercase"> <span class="text-primary">Sanskar Prime</span>
                              Experience The Luxury</h1>
                            <div class="divider-shape"> <img src={Images.Divider}/> </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                          <div class="dots-image-2 "> <img alt="" class="img-responsive welcome-big-image"
                              src={Images.welcomeimgone}/>
                            <div class="dots"></div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                          <div class="dots-image-2"> <img alt="" class="img-responsive"
                              src={Images.welcomeimgtwo}/>
                            <div class="dots"></div>
                          </div>
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="dots-image-2"> <img alt="" class="img-responsive"
                                  src={Images.welcomeimgthree} style={{marginTop:"12px"}}/>
                                <div class="dots"></div>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="dots-image-2"> <img alt="" class="img-responsive"
                                  src={Images.welcomeimgfour} style={{marginTop:"12px"}}/>
                                <div class="dots"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="pp-scrollable text-white section section-3 home-room-section"
        style={{backgroundImage:`url(${Images.roomssuitbfg})`,backgroundSize:"Cover"}}
        >
        <div class="scroll-wrap">
          <div class="scrollable-content">
            <div class="vertical-centred">
              <div class="boxed boxed-inner">
                <div class="boxed">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12 col-lg-12">
                        <div class="title-section room-title-area">
                          <h2 class="title-uppercase room-title">Rooms & Suites</h2>
                          <div class="divider-shape"> <img src={Images.Divider}/> </div>
                          <p>Raising Comfort to the Heghest Level
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="intro">
                      <div class="row">
                        <div class="col-md-12 col-lg-12">
                          <div class="project-carousel owl-carousel">
                            <div class="project-item item-shadow building">
                              <img alt="" class="img-responsive rooms-bg" src="assets/image/rooms/deluxe-room/1.jpg"/>
                              <div class="project-hover">
                                <div class="project-hover-content">
                                  <div class="project-title"> Deluxe Room</div>
                                  <p class="project-description">The Deluxe Room is a standard stay with wall-to-wall
                                    carpeting, a window view, and trendy furnishing. You can stay with your family or
                                    your partners with extravagance and security. While staying at our 5-star hotel,
                                    take advantage of the beautiful vistas that provide a tranquil haven for rest and
                                    renewal.</p>
                                </div>
                              </div>
                              <a href="search-results.html" class="link-arrow">See Deluxe Room <i
                                  class="icon fa fa-angle-right"></i></a>
                            </div>
                            <div class="project-item item-shadow building">
                              <img alt="" class="img-responsive rooms-bg"
                                src="assets/image/rooms/deluxe-twin-room/1.webp"/>
                              <div class="project-hover">
                                <div class="project-hover-content">
                                  <div class="project-title">Deluxe Twin Room</div>
                                  <p class="project-description">In order to provide the best lodging in Jaipur and
                                    pamper our business and leisure visitors, the Deluxe Twin Rooms are a combination of
                                    spaciousness, luxury, and comfort laced with all the latest conveniences.</p>
                                </div>
                              </div>
                              <a href="search-results.html" class="link-arrow">See Deluxe Twin Room <i
                                  class="icon fa fa-angle-right"></i></a>
                            </div>
                            <div class="project-item item-shadow building">
                              <img alt="" class="img-responsive rooms-bg" src="assets/image/rooms/luxury-room/1.webp"/>
                              <div class="project-hover">
                                <div class="project-hover-content">
                                  <div class="project-title">Luxury Room</div>
                                  <p class="project-description">Decked in the vibrant colors of life, our luxury suite
                                    gives you a feel of richness with a soothing vibe. Enriched with a splendid
                                    interior, in addition to the Beautiful Red Sofa to have a relaxed corner for cozy
                                    vibes.</p>
                                </div>
                              </div>
                              <a href="search-results.html" class="link-arrow">See Luxury Room <i
                                  class="icon fa fa-angle-right"></i></a>
                            </div>
                            <div class="project-item item-shadow building">
                              <img alt="" class="img-responsive rooms-bg" src="assets/image/rooms/luxury-triple-bedroom/1.jpg"/>
                              <div class="project-hover">
                                <div class="project-hover-content">
                                  <div class="project-title">Luxury Triple Bed Room</div>
                                  <p class="project-description">With the unique idea of relaxing along with your loved
                                    ones together, Sanskar Prime has come up with a superior room plan in the form of
                                    Luxurious Triple Bed Sharing. Here, you get modern amenities in a memorable way of
                                    staying.</p>
                                </div>
                              </div>
                              <a href="search-results.html" class="link-arrow">See Luxury Triple Bed Room <i
                                  class="icon fa fa-angle-right"></i></a>
                            </div>
                            
                            
                            
                            <div class="project-item item-shadow interior-exterior">
                              <img alt="" class="img-responsive rooms-bg" src="assets/image/rooms/banquet-hall.jpg"/>
                              <div class="project-hover">
                                <div class="project-hover-content">
                                  <div class="project-title">Banquet Hall</div>
                                  <p class="project-description">Discover the splendor of our expansive banquet hall,
                                    the ideal location for your special occasion. Our magnificent facility, which has a
                                    seating capacity of 250 pax, has excellent design, top-class amenities, and
                                    first-rate service. Create priceless memories in this magical setting, designed to
                                    make your event absolutely remarkable.</p>
                                </div>
                              </div>
                              <a href="search-results.html" class="link-arrow">See Banquet Hall <i
                                  class="icon fa fa-angle-right"></i></a>
                            </div>
                            <div class="project-item item-shadow interior-exterior">
                              <img alt="" class="img-responsive rooms-bg" src="assets/image/rooms/veg-restaurant.webp"/>
                              <div class="project-hover">
                                <div class="project-hover-content">
                                  <div class="project-title">Pure Veg. Restaurant</div>
                                  <p class="project-description">Enjoy a gourmet treat at our on-site Pure Veg.
                                    Restaurant, where culinary quality is highlighted. Enjoy a delicious selection of
                                    vegetarian treats prepared by our talented chefs, who guarantee a memorable dining
                                    experience in a classy and welcoming setting.</p>
                                </div>
                              </div>
                              <a href="search-results.html" class="link-arrow">See Veg. Restaurant <i
                                  class="icon fa fa-angle-right"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pp-scrollable section section-5 facility-section">
        <div class="scroll-wrap">
          <section class="about about-v2">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="title-section room-title-area">

                    <h4 class="title-uppercase">Our Facility</h4>
                    <div class="divider-shape"> <img src={Images.Divider}/> </div>

                    <p>Sanskar Prime assures best Hotel Facilities & Services in Jaipur to the travelers and lives upto complete standard of any other luxury Hotels in Jaipur.</p>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="about-img">
                    <div class="img-1">
                      <img src={Images.roomFacilityImage} class="img-responsive" alt="Image"/>
                      <div class="img-2">
                        <img src={Images.roomFacilityImagetwo} class="img-responsive" alt="Image"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12">
                  <Facilities/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section class="section-clients section bg-dots">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <div class="title-section">
                <h5 class="title-uppercase">Our Happy Guests</h5>
                <div class="divider-shape"> <img src={Images.Divider}/> </div>
              </div>
            </div>
          </div>
          <Clients/>
        </div>
      </section>
      <div class="pp-scrollable home-contactus-section section section-7">
        <div class="scroll-wrap">
          <div class="scrollable-content">
            <div class="vertical-centred">
              <div class="boxed boxed-inner">
                <div class="boxed">
                  <div class="container">
                    <div class="intro" style={{opacity:"1"}}>
                      <div class="contact-info-footer">
                        <div class="row">
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="map-prime">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.3999966581462!2d75.74201695538088!3d26.890799360949103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a1724283a1%3A0x8c54a2c02bb8ca8!2sSanskar%20Prime%20Hotel%20Jaipur!5e0!3m2!1sen!2sin!4v1684494960133!5m2!1sen!2sin"
                                width="100%" height="550" style={{border:"0"}} allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade" title="W3Schools Free Online Web Tutorials">
                              </iframe>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="footer-contact-details">
                              <div class="footer-contact-head">
                                <div class="title-section getin-touch-box">
                                  <h6 class="title-uppercase text-white">Reach Us</h6>
                                  <div class="divider-shape"> <img src={Images.Divider}/> </div>
                                </div>
                              </div>
                              <div class="footer-contact-info">
                                <div class="footer-mail footer-single-weight">
                                  <div class="contact-icon-blog">
                                    <span class="fa fa-envelope-open footer-contact-icon"></span>
                                  </div>
                                  <div class="contact-wrap">
                                    <div class="footer-weidgt">Email Us</div>
                                    <p class="contact-info">reservation@sanskarprime.in</p>
                                  </div>
                                </div>

                                <div class="footer-contact footer-single-weight">
                                  <div class="contact-icon-blog">
                                    <span class="fa fa-phone footer-contact-icon"></span>
                                  </div>
                                  <div class="contact-wrap">
                                    <div class="footer-weidgt">Let's Talk</div>
                                    <p class="contact-info">+91-9785588892</p>
                                  </div>
                                </div>

                                <div class="footer-address footer-single-weight">
                                  <div class="contact-icon-blog">
                                    <span class="fa fa-map footer-contact-icon"></span>
                                  </div>
                                  <div class="contact-wrap">
                                    <div class="footer-weidgt">Location</div>
                                    <p class="contact-info">Plot No 12, 13, Ajmer Rd, above KIA Showroom Vaishali Nagar
                                      Jaipur</p>
                                  </div>
                                </div>


                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pp-scrollable section section-8 footer-section">
        <div class="scroll-wrap">
          <div class="">
            <footer class="footer-area footer-border-round">
              <div class="">
                <div class="">
                  <div class="col-lg-12">
                    <div class="footer-wrapper">
                      <div class="footer-contents center-text">
                        <div class="footer-contents-logo">
                          <a href="index.html" class="footer-logo">
                            <img src={Images.Logo} alt="logo"/> </a>
                        </div>
                        <div class="footer-widget widget">
                          <div class="footer-widget-social mt-4">
                            <div class="social-list">
                              <a href="#" class="fa fa-facebook-official"></a>
                              <a href="#" class="fa fa-twitter-square"></a>
                              <a href="#" class="fa fa-linkedin-square"></a>
                              <a href="#" class="fa fa-instagram"></a>
                              <a href="#" class="fa fa-google-plus-square"></a>
                            </div>
                          </div>
                        </div>
                        <div class="footer-contact-blog">
                          <div class="details">
                            <div class="call-details">
                              <span class="mail-info">reservation@sanskarprime.in</span>
                              <span class="call-info">+91-9785588892</span>
                            </div>
                            <div class="address-details">
                              <p class="contactus-info">Plot No 12, 13, Ajmer Rd, above KIA Showroom Vaishali Nagar
                                Jaipur</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="copyright-area container footer-padding copyright-bg-1">
                  <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12">
                      <div class="footer-widget widget">
                        <div class="footer-widget-nav mt-5">
                          <ul class="footer-widget-nav-list list-style-none">
                            <li class="footer-widget-nav-list-item"> <a href="index.html"
                                class="footer-widget-nav-list-link"> Home </a> </li>
                            <li class="footer-widget-nav-list-item"> <a href="rooms-suites.html"
                                class="footer-widget-nav-list-link"> Rooms </a> </li>
                            <li class="footer-widget-nav-list-item"> <a href="banquet-hall.html"
                                class="footer-widget-nav-list-link"> Banquet Hall </a> </li>
                            <li class="footer-widget-nav-list-item"> <a href="#0"
                                class="footer-widget-nav-list-link"> Facilities </a> </li>
                            <li class="footer-widget-nav-list-item"> <a href="restaurants.html"
                                class="footer-widget-nav-list-link"> Restaurant </a> </li>
                            <li class="footer-widget-nav-list-item"> <a href="contactus.html"
                                class="footer-widget-nav-list-link"> Contact </a> </li>
                          </ul>
                        </div>
                      </div>
                      <div class="copyright-contents">
                        <div class="copyright-contents-flex">
                          <span class="copyright-contents-main"> © 2000-2023 All Rights Reserved Development By <a
                              href="index.html"> Ezulix.com </a> </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                      <div class="qrcode-img">
                        <img src={Images.qrcode} alt=""/>
                      </div>
                    </div>
                  </div>


                </div>




              </div>
            </footer>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
