import React, { Component } from "react";
import "../assets/styles/Landing.css";
import { Zoom, Reveal, Fade } from "react-reveal";
import { Parallax } from "react-parallax";
import Slider from "react-slick";
import {
  happyBday,
  ashuMaya1,
  ashuMaya2,
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
  portrait6,
  portrait7,
  portrait8,
  portrait9,
  portrait10,
  portrait11,
  portrait12,
  portrait13,
  portrait14,
  portrait15,
  shwetaMaya1,
  shwetaMaya2,
  shwetaMaya3,
  shwetaMaya4,
  shwetaMaya5,
  shwetaMaya6,
  shwetaMaya7,
  shwetaMaya8,
  shwetaMaya9,
  shwetaMaya10,
  shwetaMaya11,
  shwetaMaya12,
  shwetaMaya13,
  shwetaMaya14,
  shwetaMaya15,
  shwetaMaya16,
  shwetaMaya17,
  shwetaMaya18,
  shwetaMaya19,
  shwetaMaya20,
  shwetaMaya21,
  shwetaMaya22,
  shwetaMaya23,
  shwetaMaya24,
  poroMaya1,
  poroMaya2,
  poroMaya3,
  poroMaya4,
  poroMaya5
} from "../assets/index";
export default class Landing extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      //   autoplaySpeed: 2000,
      cssEase: "linear"
    };
    const multipleItemsSettingsconst = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      speed: 2000
    };
    return (
      <div className="landing-pg">
        <section className="happy-bday-title-section">
          {" "}
          <h1>
            We love you soo much...
            <br />
            Maya
          </h1>
        </section>
        <section className="banner-section">
          <Slider {...settings}>
            <section className="banner-slider-div">
              <div className="banner-div">
                <img src={banner1} className="banner-image" />
                <Zoom>
                  <div className="banner-text">
                    <span>
                      <i className="fa fa-heart"></i>
                    </span>
                    <h6>To our bestfriend ever!</h6>
                    <p>Happy Birthday!</p>
                    <span id="span2">
                      <i className="fa fa-heart"></i>
                    </span>
                  </div>
                </Zoom>
              </div>
            </section>
            <section className="banner-slider-div">
              <div className="banner-div">
                <img src={banner3} className="banner-image" />
                <Zoom>
                  <div className="banner-text">
                    <span>
                      <i className="fa fa-heart"></i>
                    </span>
                    <h6>To our bestfriend ever!</h6>
                    <p>Happy Birthday!</p>
                    <span id="span2">
                      <i className="fa fa-heart"></i>
                    </span>
                  </div>
                </Zoom>
              </div>
            </section>
            <section className="banner-slider-div">
              <div className="banner-div">
                <img src={banner4} className="banner-image" />
                <Zoom>
                  <div className="banner-text">
                    <span>
                      <i className="fa fa-heart"></i>
                    </span>
                    <h6>To our bestfriend ever!</h6>
                    <p>Happy Birthday!</p>
                    <span id="span2">
                      <i className="fa fa-heart"></i>
                    </span>
                  </div>
                </Zoom>
              </div>
            </section>
            <section className="banner-slider-div">
              <div className="banner-div">
                <img src={banner6} className="banner-image" />
                <Zoom>
                  <div className="banner-text">
                    <span>
                      <i className="fa fa-heart"></i>
                    </span>
                    <h6>To our bestfriend ever!</h6>
                    <p>Happy Birthday!</p>
                    <span id="span2">
                      <i className="fa fa-heart"></i>
                    </span>
                  </div>
                </Zoom>
              </div>
            </section>
          </Slider>
        </section>
        <section className="grid-section">
          <div className="grid-prod-div">
            <div>
              <div
                className="single-banner"
                onClick={() =>
                  document.getElementById("ashu-maya").scrollIntoView()
                }
              >
                <img src={ashuMaya2} />
                <div className="inner-text">
                  <Zoom>
                    <h4>Ashu</h4>
                  </Zoom>
                </div>
              </div>
            </div>
            <div>
              <div
                className="single-banner"
                onClick={() =>
                  document.getElementById("shweta-maya").scrollIntoView()
                }
              >
                <img src={shwetaMaya2} />
                <div className="inner-text">
                  <Zoom>
                    {" "}
                    <h4>Shweta</h4>
                  </Zoom>
                </div>
              </div>
            </div>
            <div>
              <div
                className="single-banner"
                onClick={() =>
                  document.getElementById("poro-maya").scrollIntoView()
                }
              >
                <img src={poroMaya1} />
                <div className="inner-text">
                  <Zoom>
                    {" "}
                    <h4>Poro</h4>
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ASHU */}
        <div style={{ textAlign: "center" }} id="ashu-maya">
          <h5 className="shweta-maya-title">
            <Zoom>
              <span>
                Ashu <i className="fa fa-heart"></i> Maya
              </span>
            </Zoom>
          </h5>
        </div>
        <section className="shweta-maya">
          <div className="left-grid-ashu"></div>
          <div>
            <Slider {...multipleItemsSettingsconst}>
              <div className="slideshow-img-div">
                <img src={poroMaya5} />
              </div>
              <div className="slideshow-img-div">
                <img src={poroMaya3} />
              </div>
              <div className="slideshow-img-div">
                <img src={poroMaya4} />
              </div>
            </Slider>

            <div className="text">
              <p>Message</p>
            </div>
          </div>
        </section>
        {/* Shweta */}
        <div style={{ textAlign: "center" }} id="shweta-maya">
          <h5 className="shweta-maya-title">
            <Zoom>
              <span>
                Shweta <i className="fa fa-heart"></i> Maya
              </span>
            </Zoom>
          </h5>
        </div>
        <section className="shweta-maya">
          <div className="left-grid"></div>
          <div>
            <Slider {...multipleItemsSettingsconst}>
              <div className="slideshow-img-div">
                <img src={shwetaMaya14} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya4} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya3} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya10} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya11} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya5} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya18} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya6} />
              </div>

              <div className="slideshow-img-div">
                <img src={shwetaMaya8} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya9} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya15} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya16} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya19} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya20} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya21} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya22} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya23} />
              </div>
              <div className="slideshow-img-div">
                <img src={shwetaMaya24} />
              </div>
            </Slider>

            <div className="text">
              <p>Message</p>
            </div>
          </div>
        </section>

        {/* PORO */}
        <div style={{ textAlign: "center" }} id="poro-maya">
          <h5 className="shweta-maya-title">
            <Zoom>
              <span>
                Poro <i className="fa fa-heart"></i> Maya
              </span>
            </Zoom>
          </h5>
        </div>
        <section className="shweta-maya">
          <div className="left-grid-poro"></div>
          <div>
            <Slider {...multipleItemsSettingsconst}>
              <div className="slideshow-img-div">
                <img src={poroMaya5} />
              </div>
              <div className="slideshow-img-div">
                <img src={poroMaya3} />
              </div>
              <div className="slideshow-img-div">
                <img src={poroMaya4} />
              </div>
            </Slider>

            <div className="text">
              <p>Message</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
