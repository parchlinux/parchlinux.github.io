import { HiDownload, HiOutlineBookOpen } from 'react-icons/hi'
import { HiOutlineCog8Tooth, HiOutlineLockClosed, HiOutlineChatBubbleLeftRight, HiOutlinePencilSquare, HiOutlineCodeBracket, HiOutlineChevronDown, HiOutlineRocketLaunch, } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>

      <section className="p-1 flex flex-col justify-center items-center min-h-screen mb-6 sm:mb-0 sm:-mt-6">

        <div className="flex flex-col lg:flex-row items-center">
          <img src="./logo.svg" alt="Logo" className="w-48 h-48 md:w-52 md:h-52 lg:w-80 lg:h-80 mb-8" />
          <h1 className="lg:hidden text-4xl sm:text-[56px] font-bold mb-4">Parch Linux</h1>
          <div className="flex flex-col gap-8 lg:ml-4 max-w-lg">
            <h1 className="text-center leading-10 text-xl lg:text-left lg:text-[30px]">
              The most advanced <br />
              Arch-Based Distribution
            </h1>
            <p className="hidden lg:block text-[17.4px] leading-7">Parch Linux is an open-source, Arch-based Linux distribution, that tried to be pretty, easy to use, light, fast and stable.</p>

            <div className="flex justify-center lg:justify-start items-center mb-10">
              <Link to={"/get-parch"}>
                <button
                  className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-md text-sm font-semibold hover:bg-blue-600 transition hover:translate-y-1 bg-blue-500/95">
                  DOWNLOAD
                  <HiDownload className="w-5 h-5 ml-2" />

                </button>
              </Link>

              {/* <a href="#">
                <button
                  className="hidden sm:inline-flex items-center px-4 py-3 sm:px-6 sm:py-4 rounded-md text-sm font-semibold hover:bg-blue-600 transition hover:translate-y-1 bg-blue-500/95">
                  DOCUMENTATION
                  <HiOutlineBookOpen className="w-5 h-5 ml-2" />

                </button>
              </a> */}
            </div>

          </div>
        </div>

        <div className='mt-1'>
          <button className="animate-bounce cursor-default">
            <HiOutlineChevronDown className='w-7 h-7' />
          </button>
        </div>

      </section>

      <section className="bg-[#16171D] p-6 flex justify-center">

        <div className="flex flex-col justify-center items-center my-20">

          <div className="text-center flex flex-col gap-4 max-w-screen-sm">
            <h2 className="font-bold text-[45px] text-sky-600 mb-10">
              Why Parch?
            </h2>

            {/* <h3 className="hidden lg:block text-[26px]">
              Parch Linux is not about its tools, nor the operating system. Parch Linux is a <strong>platform</strong>.
            </h3> */}
          </div>



          <div className="flex flex-wrap justify-center p-4 gap-8 text-justify mt-4">

            <div className="max-w-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineCog8Tooth className='w-7 h-7 text-sky-500' />


                <h3 className="text-[20px] font-normal ">Simple</h3>
              </div>
              <p className="font-normal mt-6">
                Parch linux uses calamares graphical installer by default which makes it easier for you to install and use it.
              </p>
            </div>

            <div className="max-w-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineLockClosed className='w-7 h-7 text-sky-500' />


                <h3 className="text-[20px] font-normal ">Privacy</h3>
              </div>
              <p className="font-normal mt-6">
                Unlike any other proprietary operating systems, Parch Linux respects your privacy and doesn't collect any information or data from you.
              </p>
            </div>

            <div className="max-w-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineRocketLaunch className='w-7 h-7 text-sky-500' />


                <h3 className="text-[20px] font-normal ">Fast</h3>
              </div>
              <p className="font-normal mt-6">Parch Linux requires at least 1.5 GB of RAM with xfce desktop and at least 1
                GB with lxqt desktop
                Give your old system a second chance with Parch Linux.</p>
            </div>

            <div className="max-w-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineChatBubbleLeftRight className='w-7 h-7 text-sky-500' />


                <h3 className="text-[20px] font-normal ">Community</h3>
              </div>
              <p className="font-normal mt-6">
                Parch Linux in <a href="https://t.me/parchlinux" className='text-sky-500'>Telegram</a> has an active community that will quickly solve your problems. If you have a bug or problem, you can report it in the community.
              </p>
            </div>


          </div>

        </div>

      </section>


      <section className="p-6 first-line:flex justify-center">

        <div className="flex flex-col justify-center items-center ">

          <h2 className="font-bold text-center text-[45px] text-sky-600 mb-6 mt-10">
            Choose the desktop
          </h2>

          <div className='flex flex-col justify-center xl:flex-row items-center gap-20 p-3 lg:p-20 mb-14'>
            <div>
              <div className="flex items-center gap-2">
                <img src="./logo-xfce.svg" alt="XFCE" className="w-12 h-12" />
                <h3 className="text-[26px] font-bold">XFCE</h3>
              </div>
              <p className='font-normal mt-6 leading-8 max-w-[657px]'>

                Xfce is a lightweight desktop environment for UNIX-like operating systems. It aims to be fast and low on system resources, while still being visually appealing and user friendly.
                <br /><br />
                Xfce consists of separately packaged parts that together provide all functions of the desktop environment, but can be selected in subsets to suit user needs and preferences. This is Parch's default desktop environment.

              </p>

            </div>

            <img src="./XFCE.webp" alt="Parch XFCE" className='rounded-lg w-full sm:w-[657px] lg:h-[370px]' />

          </div>


          <div className='flex flex-col justify-center xl:flex-row-reverse items-center gap-20 lg:p-20 mb-14'>
            <div>
              <div className="flex items-center gap-2">
                <img src="./logo-gnome.svg" alt="GNOME" className="w-12 h-12" />
                <h3 className="text-[26px] font-bold">GNOME Shell</h3>
              </div>
              <p className='font-normal mt-6 leading-8 max-w-[657px]'>

                Every part of GNOME Shell has been designed to make it simple and easy to use. The Activities Overview is an easy way to access all your basic tasks. A press of a button is all it takes to view your open windows, launch applications, or check if you have new messages. Having everything in one place is convenient and means that you don't have to learn your way through a maze of different technologies.
              </p>

            </div>

            <img src="./GNOME.webp" alt="Parch GNOME" className='rounded-lg w-full sm:w-[657px] lg:h-[370px]' />

          </div>


          <div className='flex flex-col justify-center xl:flex-row items-center gap-20 lg:p-20 mb-14'>
            <div>
              <div className="flex items-center gap-2">
                <img src="./logo-kde.svg" alt="XFCE" className="w-12 h-12" />
                <h3 className="text-[26px] font-bold">KDE PLASMA</h3>
              </div>
              <p className='font-normal mt-6 leading-8 max-w-[657px]'>

                Plasma is made to stay out of the way as it helps you get things done. But under its light and intuitive surface, it's a powerhouse. So you're free to choose ways of usage right as you need them and when you need them.
                <br /><br />
                With Plasma the user is king. Not happy with the color scheme? Change it! Want to have your panel on the left edge of the screen? Move it! Don't like the font? Use a different one! Download custom widgets in one click and add them to your desktop or panel.

              </p>

            </div>

            <img src="./PLASMA.webp" alt="Parch KDE" className='rounded-lg w-full sm:w-[657px] lg:h-[370px]' />

          </div>

        </div>


      </section>



    </main>
  )
}

export default Home