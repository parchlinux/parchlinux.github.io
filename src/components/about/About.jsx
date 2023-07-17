import { FaGithub, FaDiscord, FaTwitter, FaTelegramPlane, FaGitlab, FaMastodon } from 'react-icons/fa'


const About = () => {
    return (
        <section className="max-w-[860px] flex items-center flex-col mx-auto p-6 min-h-screen mb-10 mt-8">
            <div className="flex flex-col justify-center px-2">

                <h1 className="text-3xl sm:text-[45px] font-bold">About Parch Linux</h1>


                <div className="flex flex-col justify-center gap-8 mt-4">

                    <h2 className="text-2xl sm:text-[32px] font-bold mt-8">
                        What is Parch Linux?
                    </h2>

                    <div>
                        <p className="font-normal text-[15px] leading-6">
                            The <strong>Parch Linux</strong> is a Linux distro based on <span className="text-sky-500">Arch</span>, that tried to be pretty, easy to use, light, fast and stable.
                        </p>
                    </div>

                    <h2 className="text-2xl sm:text-[32px] font-bold mt-8">
                        Why do we call this Parch?
                    </h2>

                    <div>
                        <p className="font-normal text-[15px] leading-6">
                            At the beginning of our work, we planned to make Parch a platform for Persian-speaking users, that's why we named it Parch ( <span className="text-sky-500">P</span>ersian <span className="text-sky-500">Arch</span> ). But now we have more comprehensive goals than before.
                        </p>
                    </div>

                </div>




                <h1 className="text-3xl font-bold mb-4 mt-10">Contact Us</h1>

                <h3 className="text-[18px] font-bold mb-4">
                    Socials
                </h3>

                <div className="flex flex-wrap gap-2">
                    <a target='_blank' href='https://gitlab.com/parchlinux' className='socail-link'>
                        <FaGitlab className='w-7 h-7' />
                    </a>
                    <a target='_blank' href='https://github.com/parchlinux' className='socail-link'>
                        <FaGithub className='w-7 h-7' />
                    </a>
                    <a target='_blank' href='https://discord.gg/9RW5cRByAM' className='socail-link'>
                        <FaDiscord className='w-7 h-7' />
                    </a>
                    <a target='_blank' href='https://t.me/parchlinux' className='socail-link'>
                        <FaTelegramPlane className='w-7 h-7' />
                    </a>
                    <a target='_blank' href='https://twitter.com/parchlinux' className='socail-link'>
                        <FaTwitter className='w-7 h-7' />
                    </a>
                    <a target='_blank' href='http://mas.to/@bssfoss' className='socail-link'>
                        <FaMastodon className='w-7 h-7' />
                    </a>
                </div>


            </div>
        </section>

    )
}

export default About