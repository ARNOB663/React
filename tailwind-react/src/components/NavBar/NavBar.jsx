import React from 'react';
import Link from './Link';
const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/home"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog"
    }
  ];
const NavBar = () => {
    return (
        <nav>   
        <ul className='flex gap-7'>
            {
                 navigationData.map(route => <Link  key={route.id} route={route}></Link>)
            }
        </ul>

           {/* <ul>
               {
                  navigationData.map(route => <li className='mr-10'> 
                  <a href='/'> {route.id} {route.name}</a> 
                   </li>  )
               }
           </ul> */}
        {/* <ul className='flex gap-2.5' >
            
            <li className='mr-10'><a href='/about'>About</a> </li>
            <li className='mr-10'><a href='/blog'>Blog</a></li>
        </ul> */}
            
        </nav>
    );
};

export default NavBar;