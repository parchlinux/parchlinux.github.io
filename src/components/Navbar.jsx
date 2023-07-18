import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { HiBars3BottomRight, HiXMark, HiOutlineNewspaper, HiOutlinePhone, HiOutlineExclamationCircle } from 'react-icons/hi2'
import { HiDownload, HiOutlineBookOpen } from 'react-icons/hi'


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full h-14 p-10 lg:px-16 flex justify-between items-center">

      <NavLink to={'/'}>
        <div className='border-2 rounded-md border-sky-500 p-1 px-2'>
          <h1 className='font-semibold text-2xl text-sky-500'>PARCH</h1>
        </div>
      </NavLink>

      <div>
        <ul className='text-sm font-medium hidden sm:flex justify-end items-center space-x-4'>
          <li>
            <NavLink className='hover:text-sky-500 transition' to={'/get-parch'}>
              GET PARCH
            </NavLink>
          </li>
          <li>
            <a target='_blank' href='https://parchlinux.ir/blog/' className='hover:text-sky-500 transition'>
              BLOG
            </a>
          </li>

          <li>
            <NavLink className='hover:text-sky-500 transition' to={'/about'}>
              ABOUT
            </NavLink>
          </li>

          <li>
            <a target="_blank" href='https://parchlinux.ir/parchwiki/' className='hover:text-sky-500 transition'>
              WIKI
            </a>
          </li>
        </ul>
      </div>


      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <button onClick={() => setToggleMenu(!toggleMenu)} className='hover:bg-zinc-800 p-2 rounded-full'>
          {!toggleMenu ?
            <HiBars3BottomRight className='w-7 h-7' /> :

            <HiXMark className='w-7 h-7' />
          }
        </button>


        <div className={`${toggleMenu ? 'flex' : 'hidden'} p-6 bg-zinc-900 absolute top-16 right-4 px-2 py-4 min-w-[140px] rounded`}>
          <ul className="space-y-2 w-[180px] text-xs font-medium">
            <li>
              <NavLink to={'/get-parch'} onClick={() => setToggleMenu(setToggleMenu(false))} className="flex items-center p-2 text-gray-50 hover:bg-zinc-800 rounded-lg ">
                <HiDownload className="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400" />
                <span className="flex-1 ml-3 whitespace-nowrap">GET PARCH</span>

              </NavLink>
            </li>

            <li>
              <a target='_blank' href='https://parchlinux.ir/blog/' onClick={() => setToggleMenu(setToggleMenu(false))} className="flex items-center p-2 text-gray-50 hover:bg-zinc-800 rounded-lg ">
                <HiOutlineNewspaper className="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400" />
                <span className="flex-1 ml-3 whitespace-nowrap">BLOG</span>

              </a>
            </li>

            <li>
              <NavLink to={'/about'} onClick={() => setToggleMenu(setToggleMenu(false))} className="flex items-center p-2 text-gray-50 hover:bg-zinc-800 rounded-lg ">
                <HiOutlineExclamationCircle className="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400" />
                <span className="flex-1 ml-3 whitespace-nowrap">ABOUT</span>

              </NavLink>
            </li>

            <li>
              <a target="_blank" href='https://parchlinux.ir/parchwiki/' onClick={() => setToggleMenu(setToggleMenu(false))} className="flex items-center p-2 text-gray-50 hover:bg-zinc-800 rounded-lg ">
                <HiOutlineBookOpen className="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-400" />
                <span className="flex-1 ml-3 whitespace-nowrap">WIKI</span>

              </a>
            </li>

          </ul>
        </div>
      </div>

    </nav>
  )
}
export default Navbar