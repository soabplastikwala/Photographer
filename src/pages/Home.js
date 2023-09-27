import React, { useContext } from 'react';
import WomanImg from '../img/home/woman.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../transitions';
import { CursorContext } from '../context/CursorContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      className='section'
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageTransition}
    >
      <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'
      >
        <div className='flex flex-col justify-center'>
          
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justyfy-center items-center lg:items-start'
          >
            {/* Add top margin to create space */}
            <h1 className='h1'>photographer <br /> & film maker</h1>
            <p className='text-lg lg:text-2xl font-primary mb-2 lg:mb-6'>Los Angeles, USA</p>
            <Link to='/contact' className='btn mb-2 lg:mb-0'>
              Hire Me
            </Link>
          </motion.div>
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <div className='relative lg:-right-40 overflow-hidden'>
              <motion.img whileHover={{ scale: 0.95 }} src={WomanImg} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;