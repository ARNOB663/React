import { Menu,X } from 'lucide-react';
import React, { useState } from 'react';
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

  const [open, setOpen ] = useState(false);

  const links = navigationData.map(route => <Link  key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between mx-2 mt-3'>   
         <span className='flex gap-2' onClick={() =>setOpen(!open)}>
         {
          open ? 
          <X className='md:hidden' ></X> : 
          <Menu className='md:hidden' />
         }
         <ul className={`md:hidden absolute  duration-1000 ${open? 'top-8' : '-top-40'} bg-amber-200 text-black`}>
          {links}
         </ul>
         <h3 className='ml-4'>My NavBar</h3>
         </span>
        <ul className='hidden md:flex gap-7'>
            {
                links
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
            
            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;