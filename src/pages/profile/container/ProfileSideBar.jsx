import { useCallback, useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const ProfileSideBar = () => {
    const [userIdCopy, setUserIdCopy] = useState('')
    const copyUserIdRef = useRef(null)
    
    const copyUserID = useCallback(() => {
        navigator.clipboard.writeText(copyUserIdRef.current.textContent)
        .then(setUserIdCopy(copyUserIdRef.current.textContent + ' copped!'))
    }, [])

    return (
        <div className="">
            <div className='w-[344px] h-[calc(100vh-77px)] flex flex-col py-16 pe-4 border-e border-slate-300 dark:border-slate-600'>
                <div className="flex-grow">
                    <div className=''>
                        <div className='mx-auto w-60 h-60 ring-4 ring-offset-4 ring-primary dark:ring-offset-dark-hard rounded-full overflow-hidden'>
                            <img className='object-center' src='/images/author/author1.jpg' alt="Profile Picture" />
                        </div>
                        <span className='block text-2xl py-4 my-2 text-center text-slate-600 dark:text-slate-400 font-roboto font-semibold'>Jannatul Humaira</span>
                        <p className='text-center text-base text-slate-600 dark:text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    
                    <div className='my-10 px-4'>
                        <div 
                            onClick={copyUserID} 
                            className='flex justify-between items-center border border-slate-400 dark:border-slate-600 rounded-md my-4 px-4 py-2 cursor-pointer active:scale-95 transition-all'
                        >
                            <pre><code ref={copyUserIdRef} className='text-base text-slate-500 dark:text-slate-400'>humaira89</code></pre>
                            <div id="copy-click" className="transition-[scale] duration-1000 active:scale-0 hover:scale-110">
                                {
                                    userIdCopy 
                                    ? <IoCheckmarkDone className="text-green-500 text-2xl"/>
                                    : <FaRegCopy className="text-slate-500"/>
                                }
                            </div>
                            <Tooltip anchorSelect="#copy-click">{userIdCopy || 'Copy'}</Tooltip>
                        </div>
                        <div className="py-4">
                            <table className="table-auto text-slate-600 dark:text-slate-400">
                                <tbody>
                                    <tr>
                                        <td className="pe-1 py-1">Email : </td>
                                        <td>rokibulhasan@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="pe-1 py-1">Address :</td>
                                        <td>Jamalpur, Mymensingh</td>
                                    </tr>
                                    <tr>
                                        <td className="pe-1 py-1">Profession :</td>
                                        <td>Student</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="px-4 font-medium text-slate-500 dark:text-slate-400 font-opensans">
                    Do you need to 
                    <Link to={'/auth/signout'} className="text-blue-500 hover:underline ms-1.5">
                        Sing out?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileSideBar;