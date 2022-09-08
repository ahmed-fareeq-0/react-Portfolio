import React from 'react';
import { Typewriter} from 'react-simple-typewriter';
import Portrait from './20220908_051312.jpg';

const About = () => {
  return (
      <div className=' w-[90%] h-full' id='about'>
        <section className=' w-full grid grid-cols-1 md:grid-cols-2 gap-2 my-36 '>
          <div className=' w-full h-320 flex items-center'>
            <div className=' relative w-275 h-340 bg-gray-100 rounded-md'>
              <img className=' w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg ' src={Portrait} alt='' />
            </div>
          </div>

          <div className='w-full h-320 flex flex-col'>
          <h2 className=' text-2xl text-682AE9 '>
          I'm a 
          <span className=' text-red-400'> <Typewriter cursor loop cursorStyle='.' typeSpeed={230} deleteSpeed={50} delaySpeed={1000} words={['FrontEndDeveloper( )']} /></span>
          </h2>
          <p className='text-lg text-textBase mt-5'>
          Programmers projects in the free software development project began in the free software development project, creating access to a lot of information
          Programmers projects in the free software development project began in the free software development project, creating access to a lot of information
          Programmers projects in the free software development project began in the free software development project, creating access to a lot of information
          Programmers projects in the free software development project began in the free software development project, creating access to a lot of information
          </p>
          </div>
        </section>
      </div>
  );
}

export default About;
