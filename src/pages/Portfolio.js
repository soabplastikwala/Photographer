import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';

import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      className='section'
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto px-4 pt-24 lg:px-0 relative'
      >
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-x-4 lg:gap-x-24 text-center lg:text-left lg:pt-36 pb-8'>
          <motion.div
            className='flex flex-col lg:item-start max-w-lg'
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h1 className='h1 mt-9'>Portfolio</h1>
            {/* Added margin-top (mt-8) to push the h1 down */}
            <p className='text-gray-600 mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati <b>ipsa soluta</b> sed fugit atque, doloribus{' '}
              <b>ipsa soluta</b> reprehenderit ipsa soluta repellendus similique non.
            </p>

            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate neque, illum <b>ipsa soluta</b> dicta
              debitis quia et labore aliquid repellat in vitae eligendi pariatur.
            </p>

            <Link to={'/contact'} className='btn mt-8'>
              Hire me
            </Link>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <motion.div
              className='max-w-md lg:max-w-lg bg-accent overflow-hidden'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img className='object-cover w-full h-auto hover:scale-110 transition-all duration-500' src={Image1} alt='' />
            </motion.div>

            <motion.div
              className='max-w-md lg:max-w-lg bg-accent overflow-hidden'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img className='object-cover w-full h-auto hover:scale-110 transition-all duration-500' src={Image2} alt='' />
            </motion.div>

            <motion.div
              className='max-w-md lg:max-w-lg bg-accent overflow-hidden'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img className='object-cover w-full h-auto hover:scale-110 transition-all duration-500' src={Image3} alt='' />
            </motion.div>

            <motion.div
              className='max-w-md lg:max-w-lg bg-accent overflow-hidden'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img className='object-cover w-full h-auto hover:scale-110 transition-all duration-500' src={Image4} alt='' />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
