import { NavLink } from 'react-router-dom';
import images from './../constants/images';
import DropDown from './dropdown/DropDown';
import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const HeaderNav = () => {

    const [dropDownShow, setDropDownShow ] = useState(false)

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
        <div className=''>
            <header className='flex justify-between items-center container mx-auto py-5'>
                {/* logo */}
                <div>
                    <img src={images.Logo} alt="Logo Image"/>
                </div>

                {/* navigation */}
                <div>
                    <div className='flex gap-10 items-center'>
                        <nav className='self-stretch'>
                            <ul className='flex space-x-11 items-center h-full'>
                                {
                                    navLinkdata.map((data, index) => (
                                        data.hasOwnProperty('dropdown') 
                                        ? <li 
                                            key={data._id || index}
                                            className='capitalize font-opensans font-semibold text-base relative text-dark-soft self-stretch'
                                          >
                                                <button
                                                    onClick={() => setDropDownShow(!dropDownShow)}
                                                    className={"h-full flex items-center capitalize"}
                                                >
                                                    {data.name}
                                                    <MdKeyboardArrowDown 
                                                        className={`${dropDownShow ? 'rotate-180' : ''} text-base transition-all`}
                                                    />
                                                </button>
                                                <DropDown 
                                                    data={data.dropdown} 
                                                    show={dropDownShow} 
                                                    action={setDropDownShow} 
                                                />
                                          </li>

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
                                                            <span className={isActive ? 'text-primary' : 'text-dark-soft'}>{data.name}</span>
                                                        )
                                                    }
                                                </NavLink>
                                          </li>
                                    ))
                                }
                            </ul>
                        </nav>
                        
                        <div>
                            <button
                                className='text-primary font-bold font-opensans text-base bg-white border-2 border-primary rounded-full px-10 py-3'
                                onClick={() => {}}
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>


            </header>
        </div>
    );
};

export default HeaderNav;