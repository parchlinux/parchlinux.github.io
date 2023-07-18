import { FaGithub, FaDiscord, FaInstagram, FaLinkedinIn, FaTwitter, FaDev, FaTelegramPlane, FaGitlab } from 'react-icons/fa'



const Footer = () => {
  return (

    <footer className="p-4 shadow-[0_0_70px_theme('colors.sky.950')]">

      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <span className="text-sm text-center sm:text-left leading-loose	 font-medium">© 2023 <a target="_blank"
          href="https://parchlinux.ir" className="underline">PARCH</a>. All Rights Reserved. <br/>

            <span className="text-xs">
              Made with ❤️ By <a target="_blank" href="https://pycloud.space" className="underline">AFz.</a>
            </span>
        </span>


        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">


          <a target="_blank" href="https://github.com/parchlinux" className="hover:bg-zinc-900 p-1 rounded-md">
            <FaGithub className='w-6 h-6'/>
          </a>

        </div>
      </div>
    </footer>

  )
}

export default Footer