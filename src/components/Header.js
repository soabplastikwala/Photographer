import React, { useState, useContext } from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(null);
  const [isCursorOverLogo, setIsCursorOverLogo] = useState(false);
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const linkStyle = {
    color: 'lightcoral',
    textDecoration: 'none',
    marginRight: '14px',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: 'red',
  };

  const handleMouseEnter = (index) => {
    setHoveredLinkIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredLinkIndex(null);
  };

  const handleLogoMouseEnter = () => {
    setIsCursorOverLogo(true);
  };

  const handleLogoMouseLeave = () => {
    setIsCursorOverLogo(false);
  };

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link
          to={'/'}
          className='max-w-[180px]'
          onMouseEnter={handleLogoMouseEnter}
          onMouseLeave={handleLogoMouseLeave}
        >
          <img
            src={Logo}
            alt=''
            style={{ cursor: isCursorOverLogo ? 'pointer' : 'default' }}
          />
        </Link>

        <nav className='hidden lg:flex gap-x-14 font-semibold'>
          <motion.div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            onHoverStart={mouseEnterHandler}
            onHoverEnd={mouseLeaveHandler}
          >
            <Link
              to='/'
              style={{
                ...linkStyle,
                ...(hoveredLinkIndex === 0 ? linkHoverStyle : {}),
              }}
            >
              Home
            </Link>
          </motion.div>

          <motion.div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            onHoverStart={mouseEnterHandler}
            onHoverEnd={mouseLeaveHandler}
          >
            <Link
              to='/about'
              style={{
                ...linkStyle,
                ...(hoveredLinkIndex === 1 ? linkHoverStyle : {}),
              }}
            >
              About
            </Link>
          </motion.div>

          <motion.div
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onHoverStart={mouseEnterHandler}
            onHoverEnd={mouseLeaveHandler}
          >
            <Link
              to='/portfolio'
              style={{
                ...linkStyle,
                ...(hoveredLinkIndex === 2 ? linkHoverStyle : {}),
              }}
            >
              Portfolio
            </Link>
          </motion.div>

          <motion.div
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            onHoverStart={mouseEnterHandler}
            onHoverEnd={mouseLeaveHandler}
          >
            <Link
              to='/contact'
              style={{
                ...linkStyle,
                ...(hoveredLinkIndex === 3 ? linkHoverStyle : {}),
              }}
            >
              Contact
            </Link>
          </motion.div>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
