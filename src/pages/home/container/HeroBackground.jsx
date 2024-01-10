import { useSelector } from "react-redux";

const HeroBackground = () => {
    const { theme } = useSelector((state) => state.theme)

    return (
        <div className="absolute w-full h-[900px] bg-transparent -z-[1]">    
            <svg className="transition-all duration-500 -translate-x-2/3 translate-y-0 sm:translate-y-[6.67%] md:translate-y-[11.12%]" width="753" height="753" viewBox="0 0 753 753" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M376.5 0C584.435 0 753 168.565 753 376.5C753 584.435 584.435 753 376.5 753C168.565 753 0 584.435 0 376.5C0 168.565 168.565 0 376.5 0ZM376.5 127C238.705 127 127 238.705 127 376.5C127 514.295 238.705 626 376.5 626C514.295 626 626 514.295 626 376.5C626 238.705 514.295 127 376.5 127Z" fill="url(#paint0_linear_8_1950)"/>
                <defs>
                    <linearGradient id="paint0_linear_8_1950" x1="0" y1="753" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                    {
                        theme === 'light' &&
                        <><stop stopColor="#FAFBFB" stopOpacity="0.01"/>
                        <stop offset="1" stopColor="#F3F7FC"/></>
                    }
                    {
                        theme === 'dark' &&
                        <><stop stopColor="#0D2436" stopOpacity="0.01"/>
                        <stop offset="1" stopColor="#0f2742"/></>
                    }
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default HeroBackground;