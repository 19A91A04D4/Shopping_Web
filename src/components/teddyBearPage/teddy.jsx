
import './teddy.css';
import { useLocation } from 'react-router-dom';

import mainimg from '../../images/birthday/pg6.png';

import TeddyData from './teddydata';



const Teddy = () => {

    const location = useLocation();
    const pagename = location.state;
    console.log(pagename);

    

    return <div>
        <header>
            <div className="teddy-header">
                <div></div>
                <div><p className="fa fa-shopping-cart cart" style={{ fontSize: '32px' }}></p><p></p></div>
            </div>
        </header>
        <br></br>
        <div className='main-content'>
            <div className='main-image'>
                <img src={mainimg} alt='mine'></img>
            </div>
        </div>
        <br></br>
        
        <TeddyData  pagedata={pagename}/>


    </div>
}

export default Teddy;

