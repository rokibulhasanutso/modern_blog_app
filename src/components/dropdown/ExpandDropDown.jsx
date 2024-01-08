import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const ExpandDropDown = ({data}) => {
    const [expand, setExpand] = useState()


    return (
        <li 
            key={data._id}
            className='capitalize font-opensans font-semibold text-base relative text-dark-soft dark:text-slate-400 self-stretch'
        >
            {/* expand button */}
            <button
                onClick={() => {setExpand(!expand)}}
                className={"h-full flex items-center capitalize"}
            >
                {data.name}
                <MdKeyboardArrowDown 
                    className={`${expand ? 'rotate-180' : ''} text-base transition-all`}
                />
            </button>


            {/* expand nav */}
            <ul className={`lg:hidden overflow-hidden space-y-4 ${expand ? 'h-full' : 'h-0'}`}>
                {
                    data.dropdown.map((dropdownData, index) => (
                        <li 
                            key={dropdownData._id || index}
                            className='capitalize first:pt-4 font-opensans font-semibold text-base text-dark-soft hover:bg-slate-200 dark:hover:bg-dark-hard'
                        >
                            <NavLink
                                to={dropdownData.path}
                                className={'block w-40 px-4'}
                            >
                                {
                                    ({isActive}) => (
                                        <span className={isActive ? 'text-primary' : 'text-dark-soft dark:text-slate-400'}>{dropdownData.name}</span>
                                    )
                                }
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </li>
    );
};

export default ExpandDropDown;