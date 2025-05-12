import React from 'react';
import App from '../../../../explor-code-react/src/App';
import Mobiles from '../Mobiles/Mobiles';
import { Link  } from 'react-router';
import Laptops from '../../Laptops/Laptops';
import './Header.css';


const Header = () => {
    return (
        <div>
            <h3>This is header</h3>
            <nav>
                {/* <a href='/'>Home</a>
                <a href='/mobiles'>Mobiles</a>
                <a href='/laptops'>laptops</a>
                <a href=''></a> */}

            <Link  to='/'>Home</Link>
            <Link  to='/mobiles'>Mobiles</Link>
            <Link  to='/laptops'>Laptops</Link>
            <Link  to='/'>Home</Link>
            </nav>
        </div>
    );
};

export default Header;