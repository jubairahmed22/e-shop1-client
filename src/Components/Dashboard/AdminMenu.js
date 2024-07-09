import { FingerPrintIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
      <NavLink
        to='all-users'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-900 ${
            isActive ? 'bg-gray-300  text-gray-900' : 'text-gray-200'
          }`
        }
      >

        <span className='mx-4 font-medium'>All Users</span>
      </NavLink>
      
      <NavLink
        to='product-add'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-900 ${
            isActive ? 'bg-gray-300  text-gray-900' : 'text-gray-200'
          }`
        }
      >
      <span className='mx-4 font-medium'>Product Add</span>
      </NavLink>
      <NavLink
        to='product-edit'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-900 ${
            isActive ? 'bg-gray-300  text-gray-900' : 'text-gray-200'
          }`
        }
      >
      <span className='mx-4 font-medium'>Product Edit</span>
      </NavLink>
      <NavLink
        to='product-list'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-900 ${
            isActive ? 'bg-gray-300  text-gray-900' : 'text-gray-200'
          }`
        }
      >
      <span className='mx-4 font-medium'>Product-list</span>
      </NavLink>
      <NavLink
        to='add-categories'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-900 ${
            isActive ? 'bg-gray-300  text-gray-900' : 'text-gray-200'
          }`
        }
      >
      <span className='mx-4 font-medium'>Categories-add</span>
      </NavLink>
      <NavLink
        to='categories-list'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-900 ${
            isActive ? 'bg-gray-300  text-gray-900' : 'text-gray-200'
          }`
        }
      >
      <span className='mx-4 font-medium'>Categories-list</span>
      </NavLink>
      <NavLink
        to='theme-change'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-900 ${
            isActive ? 'bg-gray-300  text-gray-900' : 'text-gray-200'
          }`
        }
      >
      <span className='mx-4 font-medium'>Theme-change</span>
      </NavLink>
      
    </>
  )
}

export default AdminMenu
