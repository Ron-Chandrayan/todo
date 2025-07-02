import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <header className='relative top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-lg'>
      <nav className='bg-gradient-to-r from-slate-50 via-white to-slate-50 px-4 lg:px-6 py-3'>
        <div className='flex flex-wrap justify-between items-center max-w-7xl mx-auto'>
          {/* Logo Section */}
          <Link to="/" className='flex items-center group hover:scale-105 transition-transform duration-200'>
            <div className='mr-3 h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-200'>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              To-do App
            </span>
          </Link>

          {/* Navigation Links */}
          <div className='flex flex-wrap justify-between w-1/2 space-x-6'>
            <NavLink 
              to="/"
              className={({isActive}) => 
                `${isActive 
                  ? "text-orange-500 border-b-2 border-orange-500 bg-orange-50" 
                  : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                } px-4 py-2 rounded-t-lg font-medium transition-all duration-200 hover:scale-105`
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/tasks"
              className={({isActive}) => 
                `${isActive 
                  ? "text-orange-500 border-b-2 border-orange-500 bg-orange-50" 
                  : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                } px-4 py-2 rounded-t-lg font-medium transition-all duration-200 hover:scale-105`
              }
            >
              Tasks
            </NavLink>

            <NavLink 
              to="/stats"
              className={({isActive}) => 
                `${isActive 
                  ? "text-orange-500 border-b-2 border-orange-500 bg-orange-50" 
                  : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                } px-4 py-2 rounded-t-lg font-medium transition-all duration-200 hover:scale-105`
              }
            >
              Stats 📊
            </NavLink>

            <NavLink 
              to="/add"
              className={({isActive}) => 
                `${isActive 
                  ? "text-orange-500 border-b-2 border-orange-500 bg-orange-50" 
                  : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                } px-4 py-2 rounded-t-lg font-medium transition-all duration-200 hover:scale-105`
              }
            >
              Add Task
            </NavLink>
          </div>

          {/* Auth Buttons */}
          <div className='flex space-x-3'>
            <Link className='bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-orange-600'>
              Signup
            </Link>

            <Link className='bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-green-600'>
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
