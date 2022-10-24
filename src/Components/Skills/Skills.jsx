import React from 'react'
import Github from '../../Assets/github.png';
import Css from '../../Assets/css.png';
import Html from '../../Assets/html.png';
import Reactlogo from '../../Assets/react.png';
import JavaScript from '../../Assets/javascript.png';
import Mongo from '../../Assets/mongo.png';
import Node from '../../Assets/node.png';
import Tailwind from '../../Assets/tailwind.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-slate-900  text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600  '>Skills</p>
                <p className='py-4'>//Technologies worked with:</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Html} className='w-20 mx-auto'alt="Html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Css} className='w-20 mx-auto'alt="Html icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Tailwind} className='w-20 mx-auto'alt="Html icon" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JavaScript} className='w-20 mx-auto'alt="Html icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Reactlogo} className='w-20 mx-auto'alt="Html icon" />
                    <p className='my-4'>React.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Node} className='w-20 mx-auto'alt="Html icon" />
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Mongo} className='w-20 mx-auto'alt="Html icon" />
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Github} className='w-20 mx-auto'alt="Html icon" />
                    <p className='my-4'>Git and GitHub</p>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Skills;
