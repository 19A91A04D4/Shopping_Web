import TeddySlider from "./teddyslider";

// ////  IMAGES   //////////
import { useEffect, useState } from "react";
import img1 from "../../images/birthday_images/b1.jpg";
import img9 from "../../images/birthday_images/b2.png";
import img2 from "../../images/birthday_images/b6.png";
import img10 from "../../images/birthday_images/b9.png";
import img7 from "../../images/birthday_images/wall2.png";
import img3 from "../../images/birthday_images/wall3.png";
import img4 from "../../images/birthday_images/wall4.png";
import img5 from "../../images/birthday_images/wall5.png";
import img6 from "../../images/birthday_images/wall6.png";
import img8 from "../../images/birthday_images/wall7.png";
import wood1 from "../../images/wood1.png";

const birthObj = [
  { image: img1, id: "1", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img1, id: "2", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img1, id: "3", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img1, id: "4", coast: "250", name: "Teddy", pagenav: "birthday" },
];

const weddObj = [
  { image: img2, id: "1", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img2, id: "2", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img2, id: "3", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img2, id: "4", coast: "250", name: "Teddy", pagenav: "birthday" },
];

const festObj = [
  { image: img3, id: "1", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img3, id: "2", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img3, id: "3", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img3, id: "4", coast: "250", name: "Teddy", pagenav: "birthday" },
];

const anniObj = [
  { image: img4, id: "1", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img4, id: "2", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img4, id: "3", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: img5, id: "4", coast: "250", name: "Teddy", pagenav: "birthday" },
];

const TeddyData = (props) => {
  console.log(props.pagedata);
  const [birth, setBirth] = useState(false);
  const [wedd, setWedd] = useState(false);
  const [fest, setFest] = useState(false);
  const [anni, setAnni] = useState(false);

  useEffect(() => {
    if (props.pagedata === "birthday") {
      setBirth(true);
    } else if (props.pagedata === "wedding") {
      setWedd(true);
    } else if(props.pagedata === 'festival') {
      setFest(true);
    } else {
      setAnni(true);
    }
    console.log(birth);
  }, []);

  return (
    <div>
      {birth ? (
        <div>
          <TeddySlider ppdata={birthObj} />
          <TeddySlider ppdata={birthObj} />
          <TeddySlider ppdata={birthObj} />
          <TeddySlider ppdata={birthObj} />
          <TeddySlider ppdata={birthObj} />
          <TeddySlider ppdata={birthObj} />
        </div>
      ) : (
        <></>
      )}
      {wedd ? (
        <div>
          <TeddySlider ppdata={weddObj} />
          <TeddySlider ppdata={weddObj} />
          <TeddySlider ppdata={weddObj} />
          <TeddySlider ppdata={weddObj} />
          <TeddySlider ppdata={weddObj} />
          <TeddySlider ppdata={weddObj} />
        </div>
      ) : (
        <></>
      )}
      {fest ? (
        <div>
          <TeddySlider ppdata={festObj} />
          <TeddySlider ppdata={festObj} />
          <TeddySlider ppdata={festObj} />
          <TeddySlider ppdata={festObj} />
          <TeddySlider ppdata={festObj} />
          <TeddySlider ppdata={festObj} />
        </div>
      ) : (
        <></>
      )}
      {anni ? (
        <div>
          <TeddySlider ppdata={anniObj} />
          <TeddySlider ppdata={anniObj} />
          <TeddySlider ppdata={anniObj} />
          <TeddySlider ppdata={anniObj} />
          <TeddySlider ppdata={anniObj} />
          <TeddySlider ppdata={anniObj} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TeddyData;
