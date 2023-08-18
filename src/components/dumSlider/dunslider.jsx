import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../../app1.css";
// import { useState } from "react";

import { useNavigate } from 'react-router-dom';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DumSlider = (props) => {
  const navigate = useNavigate();

  const { dumdata } = props;
    // console.log(dumdata);

  return (
        <Carousel responsive={responsive}>
          {dumdata.map((item) => {
            return (
              <div>
              <div className="card" onClick={() => navigate('/teddy', {state: `${item.pagenav}`})} >
                <div className="image-content">
                  <div className="card-image">
                    <img src={item.image} alt={item.image}></img>
                  </div>
                </div>

                <div className="card-content">
                  <h2 className="name">{item.name}</h2>
                  <p className="coast">From Rs.{item.coast}/-</p>
                </div>
                <div className="card-footer">
                  <p>
                  </p>
                  <p>
                    {/* <i className="fa fa-heart" /> */}
                  </p>
                </div>
              </div>
            </div>
            )
          })}
        </Carousel>
  );
};

export default DumSlider;
