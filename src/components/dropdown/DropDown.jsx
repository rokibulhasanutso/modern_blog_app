import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import clickWithOutContent from '../../utils/clickWithOutContent';

const DropDown = ({data, show, action}) => {
    const dropDownRef = useRef(null)
    
    useEffect(() => {
        const dropdownClose = clickWithOutContent(dropDownRef.current, show, action)

        return () => {
            window.removeEventListener('mousedown', dropdownClose)
        }
    })

    return (
        <ul 
            ref={dropDownRef}
            className={`${show ? '': 'hidden' } absolute bg-white border border-dark-soft rounded-md py-2 top-full left-1/2 -translate-x-1/2`}
        >
            {
                data.map((dropdownData, index) => (
                    <li 
                        key={dropdownData._id || index}
                        className='capitalize font-opensans font-semibold text-base text-dark-soft hover:bg-slate-200'
                    >
                        <NavLink 
                            to={dropdownData.path}
                            className={'block w-40 py-1 px-4'}
                        >
                            {
                                ({isActive}) => (
                                    <span className={isActive ? 'text-primary' : 'text-dark-soft'}>{dropdownData.name}</span>
                                )
                            }
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
};

export default DropDown;