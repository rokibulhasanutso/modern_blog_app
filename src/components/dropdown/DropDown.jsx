import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const DropDown = ({data}) => {
    const [dropDownShow, setDropDownShow ] = useState(false)
    const dropDownRef = useRef(null)

    useEffect(() => {
        const clickOutsideOfContent = (event) => {
            if ( dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setDropDownShow(false)
            }
        }

        if (dropDownShow) {
            window.addEventListener('mousedown', clickOutsideOfContent)
        } 
        else {
            window.removeEventListener('mousedown', clickOutsideOfContent)
        }

    }, [dropDownShow])

    return (
        <li 
          key={data._id}
          className='capitalize font-opensans font-semibold text-base relative text-dark-soft dark:text-slate-400 self-stretch'
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
            {
                dropDownShow &&
                <ul 
                    ref={dropDownRef}
                    className={`absolute bg-white dark:bg-dark-soft border border-dark-soft rounded-md py-2 top-full left-1/2 -translate-x-1/2`}
                >
                    {
                        data.dropdown.map((dropdownData, index) => (
                            <li 
                                key={dropdownData._id || index}
                                className='capitalize font-opensans font-semibold text-base text-dark-soft hover:bg-slate-200 dark:hover:bg-dark-hard'
                            >
                                <NavLink 
                                    to={dropdownData.path}
                                    className={'block w-40 py-1 px-4'}
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
            }
        </li>
        
    );
};

export default DropDown;