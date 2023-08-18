
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import cat from '../images/p12.jpeg';
import '../app1.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Teddy from './teddyBearPage/teddy';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const Slider = () => {

    const navigate = useNavigate();

    const [teddy, setTeddy] = useState('');
    const [wedding, setWedding] = useState(false);
    const [festive, setFestive] = useState(false);
    const [anv, setAnv] = useState(false);

    const NavePage = () => {
        console.log(teddy);
        if(teddy==='teddy'){console.log("comming")}
    }


    return <div className='slider-box'>

        <div className='slider-content'>
            <Carousel responsive={responsive}>
                <div>
                    <div className="card" onClick={() => navigate('/teddy', {state: 'birthday'}) }>
                        <div className="image-content">
                            <div className="card-image">
                                <img src={cat} alt='cat'></img>
                            </div>
                        </div>
{/* {navigate(`/teddy/${e.target.value}`)} */}
                        <div className="card-content">
                            <h2 className="name">Teddy Bear</h2>
                            <p className='coast'>From Rs.350/-</p>
                        </div>
                        <div className='card-footer'>
                            <p><button>Add To Cart</button></p>
                            <p><i className="fa fa-heart" /></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" onClick={() => navigate('/teddy', {state: 'birthday'}) }>
                        <div className="image-content">
                            <div className="card-image">
                                <img src={cat} alt='cat'></img>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">Teddy Bear</h2>
                            <p className='coast'>From Rs.350/-</p>
                        </div>
                        <div className='card-footer'>
                            <p><button>Add To Cart</button></p>
                            <p><i className="fa fa-heart" /></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" onClick={() => navigate('/teddy', {state: 'birthday'}) }>
                        <div className="image-content">
                            <div className="card-image">
                                <img src={cat} alt='cat'></img>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">Teddy Bear</h2>
                            <p className='coast'>From Rs.350/-</p>
                        </div>
                        <div className='card-footer'>
                            <p><button>Add To Cart</button></p>
                            <p><i className="fa fa-heart" /></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" onClick={() => navigate('/teddy', {state: 'birthday'}) }>
                        <div className="image-content">
                            <div className="card-image">
                                <img src={cat} alt='cat'></img>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">Teddy Bear</h2>
                            <p className='coast'>From Rs.350/-</p>
                        </div>
                        <div className='card-footer'>
                            <p><button>Add To Cart</button></p>
                            <p><i className="fa fa-heart" /></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" onClick={() => navigate('/teddy', {state: 'birthday'}) }>
                        <div className="image-content">
                            <div className="card-image">
                                <img src={cat} alt='cat'></img>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">Teddy Bear</h2>
                            <p className='coast'>From Rs.350/-</p>
                        </div>
                        <div className='card-footer'>
                            <p><button>Add To Cart</button></p>
                            <p><i className="fa fa-heart" /></p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>


        {/* {(teddy) ? <Teddy name0='birthday' name1='Watch' image={cat} cost='250/-' /> : <></>} */}


    </div>
}

export default Slider;