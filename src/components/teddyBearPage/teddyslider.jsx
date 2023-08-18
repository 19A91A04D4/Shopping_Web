import "./teddy.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 600 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 600, min: 300 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 300, min: 100 },
    items: 1,
  },
};

const TeddySlider = (props) => {
  const { ppdata } = props;

  return (
    <Carousel
      responsive={responsive}
      // swipeable={false}
      draggable={false}
      infinite={false}
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
    >
      {ppdata.map((item) => {
        return (
          <div className="card1">
            <div className="card_bdy1">
              <div className="img_content">
                <div className="bdy1_image">
                  <img src={item.image} alt="cat"></img>
                </div>
              </div>
              <div className="bdy1_content">
                <h2 className="name1">{item.name}</h2>
                <p className="coast1">From {item.coast}/-</p>
              </div>
              <div className="bdy1_footer">
                <p>
                  <button>Add To Cart</button>
                </p>
                <p>
                  <i className="fa fa-heart" />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TeddySlider;








{/* <div>
        <div className="card_bdy1">
          <div className="img_content">
            <div className="bdy1_image">
              <img src={img3} alt="cat"></img>
            </div>
          </div>
          <div className="bdy1_content">
            <h2 className="name1">Watch</h2>
            <p className="coast1">From 300/-</p>
          </div>
          <div className="bdy1_footer">
            <p>
              <button>Add To Cart</button>
            </p>
            <p>
              <i className="fa fa-heart" />
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card_bdy1">
          <div className="img_content">
            <div className="bdy1_image">
              <img src={img5} alt="cat"></img>
            </div>
          </div>
          <div className="bdy1_content">
            <h2 className="name1">Watch</h2>
            <p className="coast1">From 300/-</p>
          </div>
          <div className="bdy1_footer">
            <p>
              <button>Add To Cart</button>
            </p>
            <p>
              <i className="fa fa-heart" />
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card_bdy1">
          <div className="img_content">
            <div className="bdy1_image">
              <img src={img3} alt="cat"></img>
            </div>
          </div>
          <div className="bdy1_content">
            <h2 className="name1">Watch</h2>
            <p className="coast1">From 300/-</p>
          </div>
          <div className="bdy1_footer">
            <p>
              <button>Add To Cart</button>
            </p>
            <p>
              <i className="fa fa-heart" />
            </p>
          </div>
        </div>
      </div> */}