import React, { useState, useContext } from 'react';
import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImPinterest,
  ImYoutube,
} from 'react-icons/im';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const [glowIndex, setGlowIndex] = useState(null);
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext); // Get the mouse enter and leave handlers from context

  const handleMouseEnter = (index) => {
    setGlowIndex(index);
  };

  const handleMouseLeave = () => {
    setGlowIndex(null);
  };

  const socialIcons = [
    { icon: <ImFacebook />, link: 'http://www.facebook.com' },
    { icon: <ImTwitter />, link: 'http://www.twitter.com' },
    { icon: <ImInstagram />, link: 'http://www.instagram.com' },
  ];

  return (
    <div className='hidden xl:flex ml-14'>
      <ul className='flex gap-x-4'>
        {socialIcons.map((social, index) => (
          <li key={index}>
            <a
              href={social.link}
              target='_blank'
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div // Wrap the icon in a motion.div
                style={{
                  fontSize: '24px',
                  color: glowIndex === index ? '#007bff' : '#ff6666',
                  transition: 'color 0.2s, text-shadow 0.2s',
                  textShadow:
                    glowIndex === index
                      ? '0 0 8px #007bff'
                      : 'none',
                  marginRight: '50px', // Increased marginRight to move icons 45px to the right
                }}
                onHoverStart={mouseEnterHandler} // Use the mouseEnterHandler from context
                onHoverEnd={mouseLeaveHandler} // Use the mouseLeaveHandler from context
              >
                {social.icon}
              </motion.div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
