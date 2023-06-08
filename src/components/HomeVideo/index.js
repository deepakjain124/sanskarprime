import React from 'react'
import { Images } from '../../assets/Image'

const HomeVideo = () => {
  return (
    <>
     <div className="video-section">
                  <video
                  width={"100%"}
                    className=""
                    autoPlay
                    muted
                    loop
                  >
                    <source src={Images.Video} type="video/mp4" />
                  </video>
                </div>
                <div className="container">
                  <form method="post">
                    <div className="hotel-booking-form">
                      <div className="form-row row">
                        <div className="form-wrapper">
                          <div className="form-group col-md-3">
                            <div className="singleform-fild">
                              <label for="inputPassword4 fild-label">
                                Check-in: <span className="start-icon">*</span>
                              </label>
                              <div id="checkIn">
                                <div
                                  className="input-group date"
                                  data-date-format="dd/mm/yyyy"
                                >
                                  <input
                                    type="text"
                                    className="form-control calander-input-fild"
                                    placeholder="dd/mm/yyyy"
                                  />
                                  <div className="input-group-addon calender-addon">
                                    <span className="icon fa fa-calendar calender-icon"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-md-3">
                            <div className="singleform-fild">
                              <label for="inputPassword4 fild-label">
                                Check-out: <span className="start-icon">*</span>
                              </label>
                              <div id="checkOut">
                                <div
                                  className="input-group date"
                                  data-date-format="dd/mm/yyyy"
                                >
                                  <input
                                    type="text"
                                    className="form-control calander-input-fild"
                                    placeholder="dd/mm/yyyy"
                                  />
                                  <div className="input-group-addon calender-addon">
                                    <span className="icon fa fa-calendar calender-icon"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-md-2">
                            <div className="singleform-fild">
                              <label className="fild-label" for="inputState">
                                Adults :
                              </label>
                              <select
                                id="inputAdults"
                                className="form-control select-opstion-fild"
                              >
                                <option value="1" selected>
                                  1
                                </option>
                                <option value="2" className="select-opstion">
                                  2
                                </option>
                                <option value="3" className="select-opstion">
                                  3
                                </option>
                                <option value="4" className="select-opstion">
                                  4
                                </option>
                                <option value="5" className="select-opstion">
                                  5
                                </option>
                                <option value="6" className="select-opstion">
                                  6
                                </option>
                                <option value="7" className="select-opstion">
                                  7
                                </option>
                                <option value="8" className="select-opstion">
                                  8
                                </option>
                                <option value="9" className="select-opstion">
                                  9
                                </option>
                                <option value="10" className="select-opstion">
                                  10
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group col-md-2">
                            <div className="singleform-fild">
                              <label className="fild-label" for="inputChilder">
                                Children :
                              </label>
                              <select
                                id="inputChilder"
                                className="form-control select-opstion-fild"
                              >
                                <option value="1" selected>
                                  1
                                </option>
                                <option value="2" className="select-opstion">
                                  2
                                </option>
                                <option value="3" className="select-opstion">
                                  3
                                </option>
                                <option value="4" className="select-opstion">
                                  4
                                </option>
                                <option value="5" className="select-opstion">
                                  5
                                </option>
                                <option value="6" className="select-opstion">
                                  6
                                </option>
                                <option value="7" className="select-opstion">
                                  7
                                </option>
                                <option value="8" className="select-opstion">
                                  8
                                </option>
                                <option value="9" className="select-opstion">
                                  9
                                </option>
                                <option value="10" className="select-opstion">
                                  10
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group col-md-2">
                            <div className="book-submit">
                              <button type="submit" className="btn btn-primary">
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
    </>
  )
}

export default HomeVideo