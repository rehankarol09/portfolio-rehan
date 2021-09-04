import React from 'react'
import bgimage from '../bgimage.jpeg'
/**
* @author
* @function HomePage
**/

export const HomePage = (props) => {
  return(
    <>
    <main>
      <img src={bgimage} alt="" className='absolute object-cover w-full h-full' />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 '>
        <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>WELCOME</h1>
      </section>
    </main>
    </>
   )

 }