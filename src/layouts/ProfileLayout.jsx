import { Outlet } from "react-router-dom";
import HeaderNav from "../components/header/HeaderNav";
import ProfileSideBar from "../pages/profile/container/ProfileSideBar";
import { FiPlus } from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import { RiNotification2Line } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";

const ProfileLayout = () => {
    const searchFieldRef = useRef(null)
    const [searchFiledFocus, setSearchFiledFocus] = useState(false)


    useEffect(() => {
        const searchFieldSelect = (e) => {
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault()
                searchFieldRef.current?.focus()
                setSearchFiledFocus(true)
            }
        }
        window.addEventListener('keydown', searchFieldSelect)
        return () => {
            window.removeEventListener('keydown', searchFieldSelect)
        }
    }, [])
 
    return (
        <>
        <HeaderNav/>

        <div className="border-t border-slate-300 dark:border-slate-600">
            <div className='app-container px-4'>
                <div className="flex">
                    <ProfileSideBar/>
                    <div className="flex-grow">
                        <div className="flex ps-8 py-6 justify-between items-end w-full">
                            <div className="gap-x-5 flex">
                                <button className="border border-gray-300 px-3 py-1 rounded-md text-slate-500 flex items-center space-x-1">
                                    <FiPlus className=""/>
                                    <span className="-mt-px">Create article</span>
                                </button>

                                <button 
                                    className="text-2xl text-slate-500"
                                >
                                    <BiComment/>
                                </button>

                                <button 
                                    className="text-2xl text-slate-500"
                                >
                                    <RiNotification2Line/>
                                </button>
                            </div>

                            <div className={`border ${searchFiledFocus ? 'border-gray-500 dark:border-gray-400' : 'border-gray-300 dark:border-gray-700'} dark:bg-dark-deep p-2 rounded-[8px] max-w-80 w-full flex items-center`}>
                                <input 
                                    ref={searchFieldRef}
                                    onBlur={() => setSearchFiledFocus(false)}
                                    onFocus={() => setSearchFiledFocus(true)}
                                    type="text" 
                                    name='search_box' 
                                    placeholder="Search your articles" 
                                    className="text-base dark:text-slate-400 app-outline-none flex-grow inline-block px-2 bg-transparent"
                                />
                                <span className="text-sm text-slate-400 font-bold font-opensans bg-gray-100 dark:bg-dark-soft px-2 py-1 rounded-[4px]">
                                    Ctrl + k
                                </span>
                            </div>
                        </div>

                        <div className="px-8">
                            <Outlet/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProfileLayout;