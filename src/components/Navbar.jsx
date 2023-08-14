import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from "framer-motion"

import { HiBars3BottomRight, HiXMark, HiOutlineNewspaper, HiOutlinePhone, HiOutlineUsers, HiOutlineExclamationCircle } from 'react-icons/hi2'
import { HiDownload, HiOutlineBookOpen } from 'react-icons/hi'


const Navbar = () => {

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  // const [scrollState, setScrollState] = useState(false);

  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrollState(true)
  //     } else {
  //       setScrollState(false)
  //     }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const [toggleMenu, setToggleMenu] = useState(false);

  toggleMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

  return (
    <nav className={`h-14 w-full p-10 lg:px-16 flex justify-between items-center`}>

      <Link to={'/'}>
        <div className='border-[3px] rounded-[4px] border-sky-500 p-1 px-2'>
          <h1 className='font-semibold text-2xl text-sky-500'>PARCH</h1>
        </div>
      </Link>

      <div>
        <ul className='text-[15px] font-medium hidden sm:flex justify-end items-center space-x-4'>
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
            <NavLink className='hover:text-sky-500 transition' to={'/team'}>
              TEAM
            </NavLink>
          </li>

          <li>
            <a target="_blank" href='https://parchlinux.ir/parchwiki/' className='hover:text-sky-500 transition'>
              WIKI
            </a>
          </li>
        </ul>
      </div>


      <div onMouseLeave={() => setToggleMenu(false)} className='sidebar overflow-y-auto sm:hidden flex justify-end items-center overflow-hidden'>
        <button onMouseEnter={() => setToggleMenu(true)} onClick={() => setToggleMenu(!toggleMenu)} className='hover:bg-zinc-800 p-1.5 rounded-xl'>
          <HiBars3BottomRight className='w-7 h-7' />
        </button>


        <motion.nav className={`p-6 bg-[#010409]/80 backdrop-blur-lg fixed right-0 top-0 h-screen px-2 py-4 w-full z-50`}
          animate={toggleMenu ? "open" : "closed"}
          variants={variants}
          initial={false}
        >

          <div className='w-full flex items-center justify-between px-10 py-1 mb-20'>
            <Link to={'/'} onClick={() => setToggleMenu(false)}>
              <div className='border-[3px] rounded-[4px] border-white p-1 px-2'>
                <h1 className='font-semibold text-2xl text-white'>PARCH</h1>
              </div>
            </Link>

            <button onMouseEnter={() => setToggleMenu(true)} onClick={() => setToggleMenu(!toggleMenu)} className='hover:bg-zinc-800 p-1.5 rounded-xl'>
              <HiXMark className='w-7 h-7' />
            </button>
          </div>

          <ul className="space-y-2 w-full text-xs font-semibold px-10">
            <li>
              <NavLink to={'/get-parch'} onClick={() => setToggleMenu(false)} className="flex items-center p-2 hover:bg-indigo-600 rounded-xl group">
                <HiDownload className="w-6 h-6 text-gray-400 group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">GET PARCH</span>

              </NavLink>
            </li>

            <li>
              <a target='_blank' href='https://parchlinux.ir/blog/' onClick={() => setToggleMenu(false)} className="flex items-center p-2 hover:bg-indigo-600 rounded-xl group">
                <HiOutlineNewspaper className="w-6 h-6 text-gray-400 group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">BLOG</span>

              </a>
            </li>

            <li>
              <NavLink to={'/about'} onClick={() => setToggleMenu(false)} className="flex items-center p-2 hover:bg-indigo-600 rounded-xl group">
                <HiOutlineExclamationCircle className="w-6 h-6 text-gray-400 group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">ABOUT</span>

              </NavLink>
            </li>

            <li>
              <NavLink to={'/team'} onClick={() => setToggleMenu(false)} className="flex items-center p-2 hover:bg-indigo-600 rounded-xl group">
                <HiOutlineUsers className="w-6 h-6 text-gray-400 group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">TEAM</span>

              </NavLink>
            </li>

            <li>
              <a target="_blank" href='https://parchlinux.ir/parchwiki/' onClick={() => setToggleMenu(false)} className="flex items-center p-2 hover:bg-indigo-600 rounded-xl group">
                <HiOutlineBookOpen className="w-6 h-6 text-gray-400 group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">WIKI</span>

              </a>
            </li>

          </ul>

        </motion.nav>

      </div>

    </nav>
  )
}
export default Navbar