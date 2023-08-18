import imgg from "../images/birthday_images/wall7.png";
import img2 from '../images/birthday_images/wall6.png'
import img3 from '../images/birthday_images/wall5.png'
import img4 from '../images/birthday_images/wall4.png'

import DumSlider from "./dumSlider/dunslider";
import '../App.css';

const birthobj = [
  { image: imgg, id: "1", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: imgg, id: "2", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: imgg, id: "3", coast: "250", name: "Teddy", pagenav: "birthday" },
  { image: imgg, id: "4", coast: "250", name: "Teddy", pagenav: "birthday" },
];

const weddobj = [
  { image: img2, id: "1", coast: "250", name: "Teddy", pagenav: "wedding" },
  { image: img2, id: "2", coast: "250", name: "Teddy", pagenav: "wedding" },
  { image: img2, id: "3", coast: "250", name: "Teddy", pagenav: "wedding" },
  { image: img2, id: "4", coast: "250", name: "Teddy", pagenav: "wedding" },
];

const festobj = [
  { image: img3, id: "1", coast: "250", name: "Teddy", pagenav: "festival" },
  { image: img3, id: "2", coast: "250", name: "Teddy", pagenav: "festival" },
  { image: img3, id: "3", coast: "250", name: "Teddy", pagenav: "festival" },
  { image: img3, id: "4", coast: "250", name: "Teddy", pagenav: "festival" },
];

const anniobj = [
  { image: img4, id: "1", coast: "250", name: "Teddy", pagenav: "Anniversary" },
  { image: img4, id: "2", coast: "250", name: "Teddy", pagenav: "Anniversary" },
  { image: img4, id: "3", coast: "250", name: "Teddy", pagenav: "Anniversary" },
  { image: img4, id: "4", coast: "250", name: "Teddy", pagenav: "Anniversary" },
];

const DumData = () => {
  

  //   console.log(dataobj);

  return (
    <div className="Home-data">
      <div className="home-birthday" id="birthday">
        <p className="birthday-name">Birthday</p>
        <DumSlider dumdata={birthobj} />
      </div>
      <div className="home-birthday" id="wedding">
        <p className="birthday-name">Wedding</p>
        <DumSlider dumdata={weddobj} />
      </div>
      <div className="home-birthday" id="festival">
        <p className="birthday-name">Festival</p>
        <DumSlider dumdata={festobj} />
      </div>
      <div className="home-birthday" id="anniversary">
        <p className="birthday-name">Anniversary</p>
        <DumSlider dumdata={anniobj} />
      </div>
    </div>
  );
};

export default DumData;
