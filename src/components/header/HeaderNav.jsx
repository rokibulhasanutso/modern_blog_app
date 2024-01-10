import { NavLink } from 'react-router-dom';
import images from '../../constants/images';
import DropDown from '../dropdown/DropDown';
import { useEffect, useState } from 'react';
import { IoIosSunny, IoIosMoon, IoIosMenu, IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setThemeDirectly } from '../../store/theme/themeSlice';
import ExpandDropDown from '../dropdown/ExpandDropDown';

const HeaderNav = () => {
    const { theme } = useSelector((state) => state.theme)
    const dispatch = useDispatch()
    const [expandNav, setExpandNav ] = useState(false)
    const [navFixed, setNavFixed ] = useState(false)

    useEffect(() => {
        const whenScrollDown = () => {
            if (window.scrollY > 200) {
                setNavFixed(true)
            }
            else setNavFixed(false)
        }
        window.addEventListener('scroll', whenScrollDown)
        return () => {
            window.removeEventListener('scroll', whenScrollDown)
        }
    }, [])

    useEffect(() => {
        // when expandnav without close screen width changed then expandnav close 
        const expandNavFalse = () => {
            if (expandNav && window.innerWidth > 1024) {
                setExpandNav(false)
            }
        }
        window.addEventListener('resize', expandNavFalse)
        return () => {
           window.removeEventListener('resize', expandNavFalse) 
        }
    }, [expandNav])

    const navLinkdata = [
        { _id: 1, name: 'home', path: '/'},
        { _id: 2, name: 'articles', path: 'articles'},
        { 
            _id: 3,
            name: 'pages', 
            dropdown: [
                { _id: 1, name: 'about', path: 'about'},
                { _id: 2, name: 'terms', path: 'terms'},
            ]
        },
        { _id: 4, name: 'pricing', path: 'pricing'},
        { _id: 5, name: 'faq', path: 'faq'},
    ];
    
    return (
        <div className={`z-[9999] transition-[background] duration-0 sticky ${expandNav ? 'bg-white dark:bg-dark-soft top-0' : navFixed ? 'top-0 opacity-100 bg-white dark:bg-dark-soft shadow-md' : 'delay-300'}`}>
            <header className='app-container relative'>

                {/* navigation */}
                <div className='px-4 py-5 flex justify-between items-center'>
                    {/* logo */}
                    <div>
                        <img src={ theme === 'light' ? images.Logo : images.LogoWhenDark} alt="Logo Image"/>
                    </div>

                    <button
                        className='lg:hidden flex items-center h-full'
                        onClick={() => {setExpandNav(!expandNav)}}
                    >
                        {
                            expandNav
                            ? <IoIosClose className='text-[#3A4C66] dark:text-slate-500 text-4xl'/>
                            : <IoIosMenu className='text-[#3A4C66] dark:text-slate-500 text-4xl'/>
                        }
                        
                    </button>

                    <div className='hidden lg:flex gap-10'>
                        <nav className='self-stretch'>
                            <ul className='flex space-x-11 items-center h-full'>
                                {
                                    navLinkdata.map((data, index) => (
                                        data.hasOwnProperty('dropdown') 
                                        ? <DropDown data={data} key={data._id}/>

                                        : <li 
                                            key={data._id || index}
                                            className='capitalize font-opensans font-semibold text-base self-stretch'
                                          >
                                                <NavLink
                                                    to={data.path}
                                                    className={"h-full flex items-center"}
                                                >
                                                    {
                                                        ({isActive}) => (
                                                            <span className={isActive ? 'text-primary' : 'text-dark-soft dark:text-slate-400'}>{data.name}</span>
                                                        )
                                                    }
                                                </NavLink>
                                          </li>
                                    ))
                                }
                            </ul>
                        </nav>
                        
                        <div className='self-stretch flex items-center'>
                            <button
                                className=''
                                onClick={() => {
                                    theme === 'dark' 
                                    ? dispatch(setThemeDirectly("light")) 
                                    : dispatch(setThemeDirectly("dark"))
                                }}
                            >
                                {
                                    theme === 'dark'
                                    ? <IoIosSunny  className='text-orange-300 text-2xl'/>
                                    : <IoIosMoon  className='text-slate-400 text-2xl'/>
                                }
                            </button>
                        </div>

                        <div>
                            <button
                                className='text-primary dark:text-white dark:bg-primary hover:bg-primary dark:hover:bg-blue-700 hover:text-white dark:hover:text-white font-bold font-opensans text-base bg-white border-2 border-primary rounded-full px-10 py-3'
                                onClick={() => {}}
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>

                {/* when screen width is lower then 1024px, and show this menu content*/}
                <div className={`lg:hidden ${expandNav ? 'max-h-full' : 'max-h-0'} shadow-xl transition-[max-height] duration-300 bg-white dark:bg-dark-soft overflow-hidden fixed top-[76px] left-0 right-0`}>
                    <div className='app-container py-5 px-6 sm:px-3'>
                        <div className='flex justify-end space-x-6'>
                            <div className='self-stretch flex items-center '>
                                <button
                                    className=''
                                    onClick={() => {
                                        theme === 'dark' 
                                        ? dispatch(setThemeDirectly("light")) 
                                        : dispatch(setThemeDirectly("dark"))
                                    }}
                                >
                                    {
                                        theme === 'dark'
                                        ? <IoIosSunny  className='text-orange-300 text-2xl'/>
                                        : <IoIosMoon  className='text-slate-400 text-2xl'/>
                                    }
                                </button>
                            </div>

                            <div>
                                <button
                                    className='px-4 py-2 rounded-md dark:bg-dark-hard bg-indigo-500 font-semibold text-white dark:text-slate-400 active:scale-95 shadow-md'
                                    onClick={() => {}}
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                        
                        <nav className='py-5'>
                            <ul className='space-y-6'>
                                {
                                    navLinkdata.map((data, index) => (
                                        data.hasOwnProperty('dropdown') 
                                        ? <ExpandDropDown data={data} key={data._id}/>

                                        : <li 
                                            key={data._id || index}
                                            className='capitalize font-opensans font-semibold text-base self-stretch'
                                        >
                                                <NavLink
                                                    to={data.path}
                                                    className={"h-full flex items-center"}
                                                >
                                                    {
                                                        ({isActive}) => (
                                                            <span className={isActive ? 'text-primary' : 'text-dark-soft dark:text-slate-400'}>{data.name}</span>
                                                        )
                                                    }
                                                </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderNav;