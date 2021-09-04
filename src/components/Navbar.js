import React from 'react'
import {NavLink} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';
/**
* @author
* @function Navbar
**/

export const Navbar = (props) => {

  return(
 
      <header className='bg-red-600' >
        <div className='container mx-auto flex justify-between'>
          <nav className='flex'>
            <NavLink to='/'
              exact
              activeClassName='text-white-200'
              className='inflex flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'
            >
              REHAN
            </NavLink>

            <NavLink to='/post'
             className='inline flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
             activeClassName='text-re-100 bg-red-700'
            >
              Blog Post
            </NavLink>
            <NavLink
             to='/project'
             className='inline flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
             activeClassName='text-re-100 bg-red-700'
            > 
              Project
            </NavLink>
            <NavLink to='/about'
              className='inline flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
              activeClassName='text-re-100 bg-red-700'
            >
              About Me!
            </NavLink>
          </nav>
          <div className='inline-flex my-6 py-3 px-3'>
             <SocialIcon url="https://github.com/rehankarol09" className='mr-4' target="_blank" fgColor="#fff" style={{height:'35px',width:'35px'}} />
             <SocialIcon url="linkedin.com/in/malik-rehan-karol-b153a7185" className='mr-4' target="_blank" fgColor="#fff" style={{height:'35px',width:'35px'}} />
             <SocialIcon url="rehankarol09@gmail.com" className='mr-4' target="_blank" fgColor="#fff" style={{height:'35px',width:'35px'}} />

          </div>
        </div>
      </header>
    
   )

 }