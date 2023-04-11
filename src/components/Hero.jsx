import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='m-12'>
    <section class="shadow-2xl bg-opacity-60" >
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="/Gallery" class="inline-flex justify-between items-center py-3 px-3 pr-4 mb-7 text-lg text-gray-900 bg-cyan-200 rounded-full dark:bg-gray-800 dark:text-white hover:bg-cyan-100 dark:hover:bg-gray-700" role="alert"> 
            <p className=''>New Products</p>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">All Things Home Improvement</h1>
        <p class="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Our Approach. To us, it’s not just a sales – we take pride in the product we deliver. More over Our Attitude. …, Our Unique Abilities. …, Our experience. …,Quality. …, Quick response…,Our after sales  service and care….. and many more. We are offering best quality furniture at reasonable price.  Best Furniture Stores near me .</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/about" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Learn more About HOME DECOR
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>  
        </div>
         
    </div>
</section>
</div>
    </>
  )
}

export default Hero
