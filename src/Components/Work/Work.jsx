import React from 'react'
import recipeApi from '../../Assets/recipeAppApi.PNG';
import acme from '../../Assets/acme.PNG';
import portfolio from '../../Assets/portfolio.PNG'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-slate-900 text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
        <p className='py-6'>Some of my recent work</p>
      </div>
    {/* container */}
      <div
      className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/* item */}
          <div style={{backgroundImage:`url(${recipeApi})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-pink-600 tracking-wider'>
                 Node JS Application (Recipe App API)
              </span>
              <div className='pt-0 text-center text-pink-600'>
                <a href="https://taiworecipeappproject-production-c43c.up.railway.app/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-slate-900 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Taiwo-art/taiwo_recipe_app_project" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-slate-900 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${acme})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-pink-600 tracking-wider'>
                 HTML and CSS Project (Web-design Website)
              </span>
              <div className='pt-0 text-center text-pink-600'>
                <a href="https://taiwo-art.github.io/acme_html_css/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-slate-900 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Taiwo-art/acme_html_css" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-slate-900 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${portfolio})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-pink-600 tracking-wider'>
                 React JS and Tailwind CSS Application (Portfolio)
              </span>
              <div className='pt-0 text-center text-pink-600'>
                <a href="#">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-slate-900 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Taiwo-art/portfolio_react_app" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-slate-900 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Work;
