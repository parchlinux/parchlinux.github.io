import { HiDownload, HiOutlineBookOpen } from 'react-icons/hi'


const Get = () => {
  return (
    <section className="max-w-[860px] flex justify-center items-center flex-col mx-auto p-6 min-h-screen mb-10">
      <div className="flex flex-col justify-center px-2 mb-20">

        <div className="flex items-center gap-2 mb-4">
          {/* <img src="./installer.svg" alt="Installer" className="w-28 h-28" /> */}
          <h1 className="text-3xl sm:text-[45px] font-bold">Installer Images</h1> 
          <span className='text-gray-300 text-lg'>x64</span>
        </div>


        <div className="flex flex-col justify-center gap-8 mt-4">

          <div>
            <p className="font-normal text-[15px] leading-6">
              Parch is a rolling Linux distribution, meaning as soon as we have an update, we ship it. Would-be users have a variety of images to choose from.
            </p>
          </div>


          {/* <div>
            <a href="#" className="text-xl sm:text-[24px] font-medium text-sky-500">Installation Documentation</a>
          </div> */}
          
        </div>

        <div className='border-t border-zinc-900 mt-6 mb-6'></div>

        <p className="font-normal text-[15px] leading-6">Our previous <a target='_blank' href="https://github.com/parchlinux">Parch Linux's releases</a>.</p>

        <div className='flex justify-center'>

          <div className="flex justify-center flex-wrap gap-8 mt-8">

            <div className="flex relative flex-col justify-center items-center w-60 h-72 bg-[#16171D] rounded-2xl transition hover:-translate-y-3">

              <img src="./logo.svg" alt="logo" className="w-32 h-32" />

              <h3 className="text-[18px] font-bold mt-6">
                XFCE
              </h3>

              <span className='text-xs font-medium mt-2 mb-2 text-gray-400'>1.5GB</span>

              <div className="flex absolute bottom-0 w-full border-t border-zinc-800 divide-x divide-zinc-800">

                <a href="https://github.com/parchlinux/parch-iso-xfce/releases/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2 rounded-bl-lg'>
                  <HiDownload className="w-5 h-5" />
                </a>

                <a target='_blank' href="https://fosstorrents.com/distributions/parch-linux/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2 text-[15px] rounded-br-lg'>
                  Torrent
                </a>

              </div>

            </div>

            <div className="flex relative flex-col justify-center items-center w-60 h-72 bg-[#16171D] rounded-2xl transition hover:-translate-y-3">

              <img src="./logo.svg" alt="logo" className="w-32 h-32" />

              <h3 className="text-[18px] font-bold mt-6">
                GNOME
              </h3>

              <span className='text-xs font-medium mt-2 mb-2 text-gray-400'>1.7GB</span>

              <div className="flex absolute bottom-0 w-full border-t border-zinc-800 divide-x divide-zinc-800">

                <a href="https://github.com/parchlinux/Parch-iso-gnome/releases/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2 rounded-bl-lg'>
                  <HiDownload className="w-5 h-5" />
                </a>

                <a href="https://fosstorrents.com/distributions/parch-linux/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2 text-[15px] rounded-br-lg'>
                  Torrent
                </a>

              </div>

            </div>

            <div className="flex relative flex-col justify-center items-center w-60 h-72 bg-[#16171D] rounded-2xl transition hover:-translate-y-3">

              <img src="./logo.svg" alt="logo" className="w-32 h-32" />

              <h3 className="text-[18px] font-bold mt-6">
                KDE PLASMA
              </h3>

              <span className='text-xs font-medium mt-2 mb-2 text-gray-400'>1.9GB</span>

              <div className="flex absolute bottom-0 w-full border-t border-zinc-800 divide-x divide-zinc-800">

                <a href="https://github.com/parchlinux/parch-iso-plasma/releases/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2'>
                  <HiDownload className="w-5 h-5" />
                </a>

                <a href="https://fosstorrents.com/distributions/parch-linux/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2 text-[15px]'>
                  Torrent
                </a>

              </div>

            </div>

            <div className="flex relative flex-col justify-center items-center w-60 h-72 bg-[#16171D] rounded-2xl transition hover:-translate-y-3">

              <img src="./logo.svg" alt="logo" className="w-32 h-32" />

              <h3 className="text-[18px] font-bold mt-6">
                CINNAMON
              </h3>

              <span className='text-xs font-medium mt-2 mb-2 text-gray-400'>1.5GB</span>

              <div className="flex absolute bottom-0 w-full border-t border-zinc-800 divide-x divide-zinc-800">

                <a href="https://github.com/parchlinux/parch-iso-cinnamon/releases/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2'>
                  <HiDownload className="w-5 h-5" />
                </a>

                <a href="https://fosstorrents.com/distributions/parch-linux/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2 text-[15px]'>
                  Torrent
                </a>

              </div>

            </div>

            <div className="flex relative flex-col justify-center items-center w-60 h-72 bg-[#16171D] rounded-2xl transition hover:-translate-y-3">

              <img src="./logo.svg" alt="logo" className="w-32 h-32" />

              <h3 className="text-[18px] font-bold mt-6">
                DWM
              </h3>

              <span className='text-xs font-medium mt-2 mb-2 text-gray-400'>1.4GB</span>

              <div className="flex absolute bottom-0 w-full border-t border-zinc-800 divide-x divide-zinc-800">

                <a href="https://github.com/parchlinux/parch-iso-dwm/releases/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2'>
                  <HiDownload className="w-5 h-5" />
                </a>

                <a href="https://fosstorrents.com/distributions/parch-linux/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2 text-[15px]'>
                  Torrent
                </a>

              </div>

            </div>

            <div className="flex relative flex-col justify-center items-center w-60 h-72 bg-[#16171D] rounded-2xl transition hover:-translate-y-3">

              <img src="./logo.svg" alt="logo" className="w-32 h-32" />

              <h3 className="text-[18px] font-bold mt-6">
                LXQT
              </h3>

              <span className='text-xs font-medium mt-2 mb-2 text-gray-400'>1.5GB</span>

              <div className="flex absolute bottom-0 w-full border-t border-zinc-800 divide-x divide-zinc-800">

                <a href="https://github.com/parchlinux/parch-iso-lxqt/releases/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2'>
                  <HiDownload className="w-5 h-5" />
                </a>

                <a href="https://fosstorrents.com/distributions/parch-linux/" className='w-1/2 inline-flex text-sky-500/70 justify-center p-2 text-[15px]'>
                  Torrent
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Get