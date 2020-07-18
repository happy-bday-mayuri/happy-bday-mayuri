import React, { Component } from "react";
import "../assets/styles/Landing.css";
import { Zoom, Reveal, Fade } from "react-reveal";
import { Parallax } from "react-parallax";
import Slider from "react-slick";
import {
  group2,
  happyBday,
  ashuMaya1,
  ashuMaya2,
  ashuMaya3,
  ashuMaya4,
  ashuMaya5,
  ashuMaya6,
  ashuMaya7,
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
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
        {/* <section className="happy-bday-title-section">
          {" "}
          <h1>
            We love you soo much...
            <br />
            Maya
          </h1>
        </section> */}
        <section className="banner-section">
          <Slider {...settings}>
            <section className="banner-slider-div">
              <div className="banner-div">
                <img src={banner7} className="banner-image" />
                <Zoom>
                  <div className="banner-text">
                    <span>
                      <i className="fa fa-heart"></i>
                    </span>
                    <h6>It's your day...</h6>
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
                <img src={banner1} className="banner-image" />
                <Zoom>
                  <div className="banner-text">
                    <span>
                      <i className="fa fa-heart"></i>
                    </span>
                    <h6>Spreading hotness</h6>
                    <p>Since 1996!</p>
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
                    <h6>Only heart throb of</h6>
                    <p>Bhandup!</p>
                    <span id="span2">
                      <i className="fa fa-heart"></i>
                    </span>
                  </div>
                </Zoom>
              </div>
            </section>
          </Slider>
        </section>
        <section className="quote-section">
          <p>
            “Every day you sparkle but today you rule! <br /> Happy Birthday!”
          </p>
        </section>
        <section className="maya-portraits">
          <div className="left-grid">
            <Slider {...settings}>
              <div className="slideshow-img-div">
                <img src={portrait1} />
              </div>
              <div className="slideshow-img-div">
                <img src={portrait5} />
              </div>
              <div className="slideshow-img-div">
                <img src={portrait7} />
              </div>
              <div className="slideshow-img-div">
                <img src={portrait4} />
              </div>
            </Slider>
          </div>
          <div id="girl-you-are-gorgeous-div">
            <p id="girl">girl,</p>
            <p id="you-are">YOU ARE</p>
            <Zoom>
              <p id="gorgeous">Gorgeous!</p>
            </Zoom>
          </div>
          <div className="left-grid">
            <Slider {...settings}>
              <div className="slideshow-img-div">
                <img src={portrait6} />
              </div>
              <div className="slideshow-img-div">
                <img src={portrait3} />
              </div>
              <div className="slideshow-img-div">
                <img src={portrait2} />
              </div>
              <div className="slideshow-img-div">
                <img src={portrait15} />
              </div>
            </Slider>
          </div>
        </section>
        <section className="maya-portraits">
          <div className="left-grid">
            <Slider {...settings}>
              <div className="slideshow-img-div">
                <img src={portrait10} />
              </div>
              <div className="slideshow-img-div">
                <img src={portrait9} />
              </div>
            </Slider>
          </div>
          <div id="girl-you-are-gorgeous-div">
            <p id="girl">Wish you a</p>
            <p id="you-are">VERY VERY</p>
            <Zoom>
              <p id="gorgeous">Happy Birthday!</p>
            </Zoom>
          </div>
          <div className="left-grid">
            <Slider {...settings}>
              <div className="slideshow-img-div">
                <img src={portrait11} />
              </div>
              <div className="slideshow-img-div">
                <img src={portrait8} />
              </div>
              <div className="slideshow-img-div">
                <img src={portrait12} />
              </div>
              <div className="slideshow-img-div">
                <img src={portrait13} />
              </div>
            </Slider>
          </div>
        </section>
        <section
          className="quote-section"
          style={{ backgroundColor: "transparent" }}
        >
          <Zoom>
            {" "}
            <p>Few birthday wishes for you from your close & loved ones</p>
          </Zoom>
        </section>
        {/* <section className="grid-section">
          <div className="grid-prod-div">
            <div>
              <div
                className="single-banner"
                onClick={() => {
                  document.getElementById("ashu-maya-div").style.display =
                    "block";
                  document.getElementById("ashu-maya").scrollIntoView();
                }}
              >
                <img src={ashuMaya3} />
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
                onClick={() => {
                  document.getElementById("shweta-maya-div").style.display =
                    "block";
                  document.getElementById("shweta-maya").scrollIntoView();
                }}
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
                onClick={() => {
                  document.getElementById("poro-maya-div").style.display =
                    "block";
                  document.getElementById("poro-maya").scrollIntoView();
                }}
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
        </section> */}

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
                <img src={ashuMaya2} />
              </div>
              <div className="slideshow-img-div">
                <img src={ashuMaya5} />
              </div>
              <div className="slideshow-img-div">
                <img src={ashuMaya3} />
              </div>
              <div className="slideshow-img-div">
                <img src={ashuMaya6} />
              </div>
              <div className="slideshow-img-div">
                <img src={ashuMaya7} />
              </div>
            </Slider>

            <div className="text">
              <Zoom>
                <p>
                  Happy birthday my support system. You are my luckiest person
                  for me. Whenever i was in sad moment you supported me a lot .
                  And jabhi me bad phase se jaa raha tha tabhi tu itnaa support
                  kiyaa 😪It means a lot to mee. You judge everything and chosen
                  a right thing and right person. When ever i changes my
                  priority i think u feel so bad. Really sorry for that this
                  will never happen again. But i never stay away from u you are
                  bestooo ever.. And my priority too. Best friendship will never
                  break bcoz tu joke hi ese karti hee kabhi tere se gussa kaise
                  ho sakta hu 😜🤣. Haste haste fight tu hi kar sakti he. Ye
                  talent to kiski me nahi he. Jaise jaise age badete jaa raaha
                  he tu lambi hoti hi jaa rahi hee 🤣🤣🤣 uska issue solve
                  karlena life me bahot sare problem ese hi bataya kaar 😜 And
                  congratulations for you to getting a job as a successfully
                  engineer bade hokke bhul maat jaana🤩🤩🤩. Stay connected i m
                  always their for you happy birthday chappan😘🥰
                </p>
              </Zoom>
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
              <Zoom>
                {" "}
                <p>
                  Soo finally it's your birthday... I don't have to tell you how
                  much u mean to me ❤️ You are such an amazing and gorgeous
                  person... I'm glad we met 😇 You are like my other half... My
                  sister from another mother... Without you my life is
                  incomplete.... I might sound as your lover... Bcz I am
                  okay...! No one can ever love u as much as I do ❤️ Thanks for
                  being with me for all these years ❤️ I wish this coming year
                  becomes the best year of your life... Wish you all the success
                  and happiness...😘😘😘
                </p>
              </Zoom>
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
                <img src={poroMaya1} />
              </div>
              <div className="slideshow-img-div">
                <img src={poroMaya3} />
              </div>
              <div className="slideshow-img-div">
                <img src={poroMaya4} />
              </div>
            </Slider>

            <div className="text">
              <Zoom>
                {" "}
                <p>
                  Happiest birthday to my special one my secret superstar 🥳🥳
                  always be happy mayu ❤️ birthday comes around every year but
                  friends like you only come ones in a lifetime babess love u
                  alt❣️ keep smiling 😊 keep shinning ✨ may God bless you 😘 I
                  wish you love , hope and everlasting joy and happiness❤️ stay
                  happy stay strong my tall girl and faltu jokes cracker🤣 After
                  this lockdown will definitely have a rocking party mayu 💃💃
                  happy quarantine vala birthday 🥳🥳
                </p>
              </Zoom>
            </div>
          </div>
        </section>
        <Zoom>
          <section
            className="quote-section"
            style={{ backgroundColor: "transparent" }}
          >
            <p>Hope we brought a smile on your face...!</p>
            <p>We Love You!</p>
          </section>
        </Zoom>
        <section className="love-you">
          <Slider {...settings}>
            <section className="banner-slider-div">
              <div className="banner-div">
                <img src={group2} className="banner-image" />
              </div>
            </section>
          </Slider>
        </section>
      </div>
    );
  }
}
