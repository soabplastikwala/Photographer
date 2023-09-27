import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import WomanImg from '../img/contact/woman.png';
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="responsive-container">
      <motion.section
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="section bg-white"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 text-center lg:text-left lg:pt-16">
            <div className="lg:flex-1 lg:pt-32">
            <h1 className="h1 mt-40 lg:mt-4">Contact me</h1>
              <p className="mb-8">I would love to get suggestions from you.</p>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  <input
                    className="outline-none border-b border-b-primary h-12 bg-transparent font-secondary w-full pl-3 placeholder-gray-400"
                    type="text"
                    placeholder="Your name"
                  />
                  <input
                    className="outline-none border-b border-b-primary h-12 bg-transparent font-secondary w-full pl-3 placeholder-gray-400"
                    type="text"
                    placeholder="Your email"
                  />
                </div>
                <input
                  className="outline-none border-b border-b-primary h-12 bg-transparent font-secondary w-full pl-3 placeholder-gray-400"
                  type="text"
                  placeholder="Your message"
                />
                <button className="btn mt-4 lg:mt-6 self-start">Send it</button>
              </form>
            </div>

            <div className="lg:flex  lg:flex-1 lg:pt-16 lg:pl-4justify- max-h-96 lg:max-h-max">
              <motion.img
                src={WomanImg}
                alt=""
                whileHover={{ scale: 1.1 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
