import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FaGithub, FaDiscord, FaTwitter, FaTelegramPlane, FaGitlab, FaMastodon } from 'react-icons/fa'
import { HiMiniChevronDown } from 'react-icons/hi2'

const Team = () => {

    const users = ['sohrab', 'komeil', 'arsha', 'parsa', 'shahriar', 'abolfazl', 'ahmadreza', 'ali'];


    const users_info = {
        'sohrab': {
            'name': 'Sohrab Behdani',
            'stack': 'Founder',
            'about': 'work on Parch development and maintenance.',
            'image': 'https://avatars.githubusercontent.com/behdanisohrab',
            'socials': {
                'twitter': 'https://twitter.com/sbehdani',
                'github': 'https://github.com/behdanisohrab',
                'mastodon': 'https://mas.to/@sohrabbehdani',
            }
        },
        'abolfazl': {
            'name': 'Abolfazl Badie',
            'stack': 'Web Developer',
            'about': 'work on Parch Website development and maintenance.',
            'image': 'https://avatars.githubusercontent.com/AFzOfficial',
            'socials': {
                'twitter': 'https://twitter.com/AFzOfficial',
                'github': 'https://github.com/AFzOfficial',
            }
        },
        'komeil': {
            'name': 'Komeil Parseh',
            'stack': 'Founder',
            'about': 'work on Parch development and maintenance.',
            'image': 'https://avatars.githubusercontent.com/mmdbalkhi',
            'socials': {
                'twitter': 'https://twitter.com/mmdbalkhi',
                'github': 'https://github.com/mmdbalkhi',
            }
        },
        'parsa': {
            'name': 'Parsa sedighi',
            'stack': 'maintainer',
            'about': 'work on Parch development and maintenance.',
            'image': 'https://avatars.githubusercontent.com/metantesan',
            'socials': {
                'twitter': 'https://twitter.com/metantesan',
                'github': 'https://github.com/metantesan',
            }
        },
        'arsha': {
            'name': 'Arsha',
            'stack': 'maintainer',
            'about': 'work on Parch development and maintenance.',
            'image': 'https://avatars.githubusercontent.com/Hr-ArshA',
            'socials': {
                'twitter': 'https://twitter.com/Hr_ArshA',
                'github': 'https://github.com/Hr-ArshA',
            }
        },
        'shahriar': {
            'name': 'shahriar ghasem poor',
            'stack': 'maintainer',
            'about': 'work on Parch development and maintenance.',
            'image': 'https://avatars.githubusercontent.com/shahriaarrr',
            'socials': {
                'twitter': 'https://twitter.com/shahriaarrr',
                'github': 'https://github.com/shahriaarrr',
            }
        },
        'ali': {
            'name': 'Ali Emami',
            'stack': 'Designer',
            'about': 'work on Parch Artworks and Designs.',
            'image': 'https://avatars.githubusercontent.com/AEK84',
            'socials': {
                'twitter': '',
                'github': 'https://github.com/AEK84',
            }
        },
        'ahmadreza': {
            'name': 'AhmadReza Khatamian',
            'stack': 'Designer',
            'about': 'work on Parch Artworks and Designs.',
            'image': 'https://avatars.githubusercontent.com/ahmadreza3',
            'socials': {
                'twitter': '',
                'github': 'https://github.com/ahmadreza3',
            }
        },
    };

    const [usersMenu, setUsersMenu] = useState(false);
    const [currentUser, setCurrentUser] = useState(users[0]);

    const { user } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // navigate(`/team/${currentUser}`);
        if (user && users.includes(user)) {
            setCurrentUser(user);
        }
    }, [user, users]);


    return (
        <div className="max-w-screen-sm md:max-w-screen-md min-h-screen flex items-center mx-auto p-4">

            <div className="flex flex-col md:flex-row gap-4 p-2 mb-28">

                <div className="md:hidden relative  flex flex-col items-center group" onMouseLeave={() => setUsersMenu(false)}>
                    <button onMouseEnter={() => setUsersMenu(true)} onClick={() => setUsersMenu(!usersMenu)} type="button" className={` group-hover:rounded-t-xl group-hover:bg-black font-medium text-sm inline-flex justify-center items-center w-full max-w-[200px] px-4 py-2 `}>
                        {currentUser.toUpperCase()}
                        <HiMiniChevronDown className="w-6 h-6" />
                    </button>

                    {usersMenu &&

                        <div className="w-full max-w-[200px] absolute bg-black px-2 py-2 flex flex-col mt-[40px] rounded-b-xl gap-2">
                            {users.map((name) => (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setCurrentUser(name);
                                        navigate(`/team/${name}`);
                                        setUsersMenu(!usersMenu);
                                    }}
                                    className={`${name === currentUser ? 'bg-sky-500' : 'hover:bg-zinc-900'} text-sm font-medium rounded-xl py-1.5`}
                                    key={name}
                                >
                                    {name.toUpperCase()}
                                </button>
                            ))}
                        </div>

                    }
                </div>


                <div className="hidden md:flex flex-col w-full max-w-[200px] rounded-xl px-2 py-2 gap-1 bg-zinc-900 text-xs font-medium">
                    {users.map((name) => (
                        <button
                            type="button"
                            onClick={() => {
                                setCurrentUser(name);
                                navigate(`/team/${name}`);
                                setUsersMenu(!usersMenu);
                            }}
                            className={`${name === currentUser ? 'bg-sky-500' : 'hover:bg-zinc-800 text-gray-400'} text-sm text-left px-4 font-medium rounded-xl py-1.5`}
                            key={name}
                        >
                            {name.toUpperCase()}
                        </button>
                    ))}
                </div>


                {currentUser && (
                    <div className="flex items-center justify-center flex-col mt-16 md:mt-0 bg-zinc-900 rounded-xl p-4">


                        <div className="mb-4 flex flex-col sm:flex-row justify-center items-center sm:items-start p-3">
                            <img src={users_info[currentUser].image} alt={users_info[currentUser].name} className="rounded-xl w-full sm:w-52" />

                            <div className="mt-6 sm:mt-2 sm:ml-4">
                                <h2 className="font-medium text-center sm:text-left text-base mb-2">{users_info[currentUser].name.toUpperCase()}</h2>
                                <h3 className="font-semibold text-center sm:text-left text-xs mb-2 text-sky-600">{users_info[currentUser].stack.toUpperCase()}</h3>
                                <p className="text-[15px] text-center sm:text-left text-gray-300">
                                    {users_info[currentUser].about}
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-wrap gap-2">
                            {users_info[currentUser].socials.twitter && (

                                <a target='_blank' href={users_info[currentUser].socials.twitter} rel="noopener noreferrer" className='socail-link'>
                                    <FaTwitter className='w-6 h-6' />
                                </a>

                            )}
                            {users_info[currentUser].socials.github && (
                                <a target='_blank' href={users_info[currentUser].socials.github} rel="noopener noreferrer" className='socail-link'>
                                    <FaGithub className='w-6 h-6' />
                                </a>
                            )}
                            {users_info[currentUser].socials.mastodon && (
                                <a target='_blank' href={users_info[currentUser].socials.mastodon} rel="me" className='socail-link'>
                                    <FaMastodon className='w-6 h-6' />
                                </a>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Team