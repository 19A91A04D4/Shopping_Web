// import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home-page";
// import Slider from './components/sliders';
import "./app1.css";
import Teddy from "./components/teddyBearPage/teddy";
import { FaveContentProvider } from "./fave-content/favercontent";
import DumData from "./components/data-page";

function App() {
  return (
    <div className="App">
      <FaveContentProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/teddy" element={<Teddy />}></Route>
          </Routes>
        </BrowserRouter>
      </FaveContentProvider>
      {/* <DumData /> */}
    </div>
  );
}

export default App;
