import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
         <Link to="/">
            <div className="logo">
              <img src="https://ci4.googleusercontent.com/proxy/Lmem82xQNRweQqxpQJvVLjEf7rAdfVYvj8E6CNM3yglWQ9MxhnNQbh_4A2BCzJuGdKR8YrLPRQDPNokQXoGkarXGGKPMRY3eOEHjkKL9ulIqxQQAhaSGFCuQSJJCRVO1e4Uodlaj0VloKoGKHkgKDvOQbHBc35hc=s0-d-e1-ft#https://www.freelogodesign.org/file/app/client/thumb/cbf83b03-4e07-4b10-85fa-6dbdb3b0801e_200x200.png" alt=""/>
            </div>
          </Link>

          <div className="header-search">
            <input type="text"   className="search" placeholder="Search here" />
            <SearchIcon className="search-icon" />
          </div>
      <Link to="/loginpage">
      <Button className="btn" variant="contained">LOGIN</Button>
      </Link>

      <Link to="/">
      <ShoppingBasketIcon className="bas" />
      </Link>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
