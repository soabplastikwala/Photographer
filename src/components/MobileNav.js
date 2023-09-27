import React, { useState, useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const linkStyle = {
  color: 'lightcoral',
  textDecoration: 'none',
  marginRight: '14px',
  transition: 'color 0.3s ease',
};

const linkHoverStyle = {
  color: 'red',
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigationRef = useRef(null);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    // Add event listener
    window.addEventListener('click', handleClickOutside);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <nav className='text-primary xl:hidden' ref={navigationRef}>
      <div onClick={() => setOpenMenu(true)} className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>

      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 right-0  max-w-xs h-screen z-20'
      >
        <div onClick={() => setOpenMenu(false)} className='text-4xl absolute z-0 left-4 top-14 text-primary cursor-pointer'>
          <IoMdClose />
        </div>

        <ul className='h-full  flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-xl'>
          <li>
            <Link
              to='/'
              style={{
                ...linkStyle,
                ...(window.location.pathname === '/' ? linkHoverStyle : {}),
              }}
              onClick={handleLinkClick} // Close menu when link is clicked
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              style={{
                ...linkStyle,
                ...(window.location.pathname === '/about' ? linkHoverStyle : {}),
              }}
              onClick={handleLinkClick} // Close menu when link is clicked
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/portfolio'
              style={{
                ...linkStyle,
                ...(window.location.pathname === '/portfolio' ? linkHoverStyle : {}),
              }}
              onClick={handleLinkClick} // Close menu when link is clicked
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              style={{
                ...linkStyle,
                ...(window.location.pathname === '/contact' ? linkHoverStyle : {}),
              }}
              onClick={handleLinkClick} // Close menu when link is clicked
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
