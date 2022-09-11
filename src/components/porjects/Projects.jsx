import React from 'react';
import { ProjectsData } from '../../data';
import { IoLogoGithub } from 'react-icons/io5';


const Projects = () => {
  return (
    <div className=' p-4 flex flex-wrap items-center justify-evenly my-24 gap-4' id='projects'>
      {ProjectsData && ProjectsData.map(item => (
        <div className=' border border-zinc-800 p-2 rounded-md min-w-[276px] md:max-w-[275px] hover:border-purple-600 duration-100 ease-in-out'>
          <p className=' text-lg text-textBase font-medium uppercase'>{item.nameProject}</p>
          <img src={item.image} alt='' className='w-full h-full object-cover rounded-md my-4' />

          <div className='flex flex-1 items-center justify-between'>
          <p className='text-lg text-gray-200'>Technologies<span className='block text-sm text-gray-500'>{item.Technologies}</span></p>
          <a href={item.githubSrc} >
          <div><IoLogoGithub className=' text-textBase text-3xl cursor-pointerh hover:text-yellow-100' /></div>
          </a>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Projects;
