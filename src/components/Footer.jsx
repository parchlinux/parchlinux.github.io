import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black p-8 flex justify-center shadow-[0_0_70px_theme('colors.sky.950')]">
      <div className='flex flex-col items-center gap-2'>
        <div className='flex flex-wrap gap-3 text-xs sm:text-sm'>

          <Link to={'/'} className='hover:text-sky-500'>
            HOME
          </Link>
          <Link to={'/get-parch'} className='hover:text-sky-500'>
            GET
          </Link>
          <a href='https://parchlinux.ir/blog/' target='_blank' className='hover:text-sky-500'>
            BLOG
          </a>
          <a href='https://parchlinux.ir/parchwiki/' target='_blank' className='hover:text-sky-500'>
            WIKI
          </a>
          <Link to={'/about'} className='hover:text-sky-500'>
            ABOUT
          </Link>
          <Link to={'/privacy'} className='hover:text-sky-500'>
            PRIVACY
          </Link>

        </div>

        <span className='text-sm mt-6'>
          © 2023 <a target="_blank"
            href="https://bssinc.ir" className='underline'>BSS OSF</a>. All Rights Reserved.
        </span>

        <span className="text-xs">
          Made with ❤️ By <a target="_blank" href="https://pycloud.space" className="underline">AFz.</a>
        </span>

      </div>
    </footer>

  )
}

export default Footer
