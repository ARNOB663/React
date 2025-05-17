import React from 'react';
import App from '../../../../explor-code-react/src/App';
import Mobiles from '../Mobiles/Mobiles';
import { Link,NavLink  } from 'react-router';
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

            <NavLink  to='/'>Home</NavLink>
            <NavLink  to='/mobiles'>Mobiles</NavLink>
            <NavLink  to='/laptops'>Laptops</NavLink>
            <NavLink  to='/'>Home</NavLink>
            </nav>
        </div>
    );
};

export default Header;