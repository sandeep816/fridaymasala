import React from 'react'
import { Link } from "react-router-dom"
import NavItem from "./NavItem";

const Header = () => {
  return (
    <>
      <header className='relative bg-blue-800'>
          <div className="container-full mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                      <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                      </a>
                  </div>

                  <nav className="hidden md:flex space-x-10">
                        <NavItem path='/' label="Home" />
                        <NavItem path='/movies' label="Movies" />
                        <NavItem path='/celebrities' label="Celebrities" />
                        <NavItem path='/series' label="Series" />
                        <NavItem path='/trending' label="Trending" />
                        
                  </nav>

                  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <Link to="/login" className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>Sign in</Link>
                  <Link to="/signup" className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>Sign up</Link>
                  </div>
                </div>
          </div>
      </header>
    </>
  )
}

export default Header