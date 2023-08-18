import React, { useState } from "react";
import "../App.css";
import './login.css';
// import bus1 from '../images/Best-Black-Backgrounds-Free-Download.jpg';
import logo1 from "../images/login-icon-png-27.png";
import logo2 from "../images/clipboard_599257.png";

// import Sliderss from "./sliders.jsx";
import DumData from "./data-page";

// import { useMediaQuery } from 'react-responsive';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img2 from "../images/diwali.jpeg.jpg";
import img3 from "../images/slick1.png";
import img4 from "../images/Colorful One Photo With Flowers Wish Happy Birthday Greeting Card.png";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // const [isbar, SetIsBar] = useState(false);
  // const isTabletOrMobile = useMediaQuery({ query: '(min-width: 600px)' });

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");

  const Register = () => {
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(pass);
    console.log(phone);
  };

  const [emaill, setEmaill] = useState("");
  const [passs, setPasss] = useState("");

  const login = () => {
    console.log(emaill);
    console.log(passs);
  };

  const SideBar = () => {};

  const [logon, setLogon] = useState(false);
  const [register, setRegister] = useState(false);

  const LoginPage = () => {
    setLogon(true);
  };

  const RegisterPage = () => {
    setRegister(true);
    setLogon(false);
  };

  const CloseBox = () => {
    if (logon) {
      setLogon(false);
    } else if (register) {
      setRegister(false);
    }
  };

  return (
    <div className="home-box">
      {/* /////  Header   ////////// */}

      <header className="displayyy">
        <div className="home-header" id="hhhh">
          <div className="home-header-data">
            <div className="logoo">Logo</div>
            {/* ///////       SEARCH BAR      //////////////// */}

            <div className="search-bar">
              <p className="user-text">
                <input type="text" placeholder="search"></input>
              </p>
              <p className="user-search">
                <i className="fa fa-search icon"></i>
              </p>
            </div>
            <div className="header-data">
              <p>
                <b>Home</b>
              </p>
              <p onClick={LoginPage}>
                <b>Login</b>
              </p>
              <p onClick={RegisterPage}>
                <b>Signup</b>
              </p>
            </div>
            <div className="home-bars" onClick={SideBar}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>

        <nav>
          <div className="nav-bar">
            <div className="nav-data">
              <p>
                <a href="#birthday">Birthday</a>
              </p>
              <p>
                <a href="#wedding">Wedding</a>
              </p>
              <p>
                <a href="#festival">Festivals</a>
              </p>
              <p>
                <a href="#anniversary">Anniversary</a>
              </p>
              <p>
                <a href="#birthday">Special occasions</a>
              </p>
            </div>
          </div>
        </nav>
      </header>

      {/*////////// MENU   ////////////////  */}

      <div className="reg-menu">
        <ul className="menu-list">
          <li>Login</li>
          <li>Register</li>
          <li>Contact</li>
          <li>Birthday</li>
          <li>Wedding</li>
          <li>Festivals</li>
          <li>Anniversary</li>
          <li>Special occasions</li>
        </ul>
      </div>

      {/* //////////    Login-Box    ////////////////*/}

      {logon ? (
        <div className="login-login">
          <div className="login-box">
            <div className="login-continer">
              <p>
                <img src={logo1} alt="logo"></img>
              </p>
              <p className="fa fa-close close" onClick={CloseBox}></p>

              <div className="em-pass">
                <p>
                  <i class="fa fa-user icon"></i>
                  <input
                    type="email"
                    placeholder="Enter gmail"
                    onChange={(e) => setEmaill(e.target.value)}
                  ></input>
                </p>
                <p>
                  <i class="fa fa-key icon"></i>
                  <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPasss(e.target.value)}
                  ></input>
                </p>

                <div className="demo">
                  <div className="btn">
                    <button onClick={login}>login</button>
                  </div>
                </div>
              </div>
              <div className="forget">
                <p>forget..!</p>
                <p onClick={RegisterPage}>join us</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* /////    REGISTER   //////////// */}

      {register ? (
        <div className="login-login1">
          <div className="login-box1">
            <div className="login-continer1">
              <p>
                <img src={logo2} alt="logo"></img>
              </p>
              <p className="fa fa-close close" onClick={CloseBox}></p>
              <div className="em-pass1">
                <div className="name">
                  <p>
                    <i class="fa fa-user icon"></i>
                    <input
                      type="Name"
                      placeholder="Enter First Name"
                      onChange={(e) => setFname(e.target.value)}
                    ></input>
                  </p>
                  <p>
                    <i class="fa fa-user icon"></i>
                    <input
                      type="Name"
                      placeholder="Enter Last Name"
                      onChange={(e) => setLname(e.target.value)}
                    ></input>
                  </p>
                </div>
                <p>
                  <i class="fa fa-envelope icon"></i>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </p>
                <div className="name">
                  <p>
                    <i class="fa fa-key icon"></i>
                    <input
                      type="password"
                      placeholder="Enter password"
                      onChange={(e) => setPass(e.target.value)}
                    ></input>
                  </p>
                  <p>
                    <i class="fa fa-key icon"></i>
                    <input
                      type="password"
                      placeholder="Confirm password"
                    ></input>
                  </p>
                </div>
                <p>
                  <i class="fa fa-phone icon"></i>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                </p>
                <div className="demo1">
                  <div className="btn1">
                    <button onClick={Register}>Create Account</button>
                  </div>
                </div>
              </div>
              {/* <div className="forget"><p>forget..!</p><p>join us</p></div> */}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/*  ///////     SLIDER   ////////////  */}
      <div className="home-carosel">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div>
          <div className="home-card">
            <img src={img2} alt="image"></img>
          </div>
        </div>
        <div>
          <div className="home-card">
            <img src={img3} alt="image"></img>
          </div>
        </div>
        <div>
          {" "}
          <div className="home-card">
            <img src={img4} alt="image"></img>
          </div>
        </div>
      </Carousel>
      </div>
      
        <br></br>
        <DumData />
    </div>
  );
};

export default Home;
