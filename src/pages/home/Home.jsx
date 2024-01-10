import { useEffect, useRef, useState } from "react";
import BlogContentCard from "./container/BlogContentCard";
import HeroSection from "./container/HeroSection";
import { FaArrowRightLong } from "react-icons/fa6";
import images from "../../constants/images";

const Home = () => {
    const blogContainerRef = useRef(null)
    const [gridColumnValue, setGridColumnValue] = useState(0);

    const data = [
        {id: 1, image: '/images/post/blogImg1.jpg', title: 'Future of Work', desc: 'Majority of peole will work in jobs that don’t exist today.', author: {name: 'Johanna Murray', image: '/images/author/author1.jpg', varified: true}, date: '2 May'},
        {id: 2, image: '/images/post/blogImg2.jpg', title: 'Why Use External It Support', desc: 'Thanks to never-ending piles of data & the amount of insight.', author: {name: 'Eugene Rodriquez', image: '/images/author/author2.jpg', varified: true}, date: '2 Aug'},
        {id: 3, image: '/images/post/blogImg3.jpg', title: 'Future of Learning', desc: 'A constant ability to learn will be on the most crucial skills.', author: {name: 'Helen Hughes', image: '/images/author/author3.jpg', varified: false}, date: '12 Sep'},
        {id: 4, image: '/images/post/blogImg4.jpg', title: 'Help Finding Information Online', desc: 'Majority of peole will work in jobs that don’t exist today.', author: {name: 'Bobby Stevens', image: '/images/author/author1.jpg', varified: true}, date: '2 May'},
        {id: 5, image: '/images/post/blogImg5.jpg', title: 'How Does An Lcd Screen Work', desc: 'Thanks to never-ending piles of data & the amount of insight.', author: {name: 'Lettie Hale', image: '/images/author/author2.jpg', varified: false}, date: '13 July'},
        {id: 6, image: '/images/post/blogImg6.jpg', title: 'Choosing The Best Photo Printer', desc: 'A constant ability to learn will be on the most crucial skills.', author: {name: 'Anne Bryan', image: '/images/author/author2.jpg', varified: true}, date: '2 May'},
        {id: 7, image: '/images/post/blogImg7.jpg', title: 'Headset No Longer Wired For Sound', desc: 'Majority of peole will work in jobs that don’t exist today.', author: {name: 'Matthew Summers', image: '/images/author/author3.jpg', varified: false}, date: '6 Jan'},
        {id: 8, image: '/images/post/blogImg8.jpg', title: 'A Discount Toner', desc: 'Thanks to never-ending piles of data & the amount of insight.', author: {name: 'Jeffery Holmes', image: '/images/author/author1.jpg', varified: true}, date: '2 May'},
        {id: 9, image: '/images/post/blogImg9.jpg', title: 'Addiction When Gambling Become…', desc: 'A constant ability to learn will be on the most crucial skills.', author: {name: 'Ivan Townsend', image: '/images/author/author4.jpg', varified: true}, date: '18 March'},
    ]

    useEffect(() => {
        const getGridColumnValue = () => {
            const computedStyle = window.getComputedStyle(blogContainerRef.current)
            const newGridColumnValue = computedStyle.gridTemplateColumns.split(' ').length;

            // set current grid column
            setGridColumnValue(newGridColumnValue)
        }

        // initial time call
        getGridColumnValue();

        window.addEventListener('resize', getGridColumnValue);

        return () => {
            window.removeEventListener('resize', getGridColumnValue);
        }
    }, []);

    return (
        <>
        <div className="px-4 app-container">
            {/* hero section */}
            <HeroSection/>

            {/* blog content section 
                
                * When the blog content cards are loaded then they are loaded in row serial.
                * And now the reason for using this logic is that if the content is big or small then it should not be empty by showing it according to the serial number.
                * That is why the logic is set according to the row column
                * Then the arrays of the last sorted logic are mapped and printed
            */}
            <div ref={blogContainerRef} className="mt-[40px] sm:mt-[75px] md:mt-[100px] mb-8 md:mb-12 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-dense gap-x-[30px]">
            {
                data.reduce((groupArray, blogData, index) => {
                    const indexOfGroup = index % gridColumnValue

                    if(!groupArray[indexOfGroup]) { 
                        groupArray[indexOfGroup] = [] 
                    }

                    groupArray[indexOfGroup].push(blogData)

                    return groupArray
                }, [])
                .map((group, index) => (
                    <div key={index} className="grid grid-cols-1 max-w-[400px] mx-auto">
                        <div className="space-y-6 md:space-y-[30px]">
                        {
                            group.map((groupData, index) => (
                                <BlogContentCard key={index} data={groupData}/>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
            </div>

            {/* more button */}
            <button className="btn-null-primary mx-auto space-x-2 flex items-center">
                <span>More articles</span>
                <FaArrowRightLong className="mt-0.5"/>
            </button>
        </div>

        {/* story delivery content */}
        <div className="mt-8">
            <div className="dark:text-dark-deep text-dark-hard">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 2160 263" fill="none">
                    <path id="Wave" fillRule="evenodd" clipRule="evenodd" d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z" fill="currentColor"/>
                </svg>
            </div>
            <div className="bg-dark-hard dark:bg-dark-deep -mt-1 pb-[138px]">
                {/* story delivery form */}
                <div className="app-container flex flex-col-reverse xl:flex-row justify-between items-center px-4">
                    <div className="max-w-[400px] sm:max-w-[555px] xl:mt-0 mt-20">
                        <p className="text-2xl sm:text-4xl text-start sm:text-center xl:text-start font-bold font-roboto text-white dark:text-slate-400 mb-10 sm:mb-12">
                            Get our stories delivered From us to your inbox weekly.
                        </p>
                        <form 
                            onSubmit={() => {}} 
                            className="mb-6 sm:space-x-2 space-y-2 sm:space-y-0 text-center xl:text-start flex flex-col sm:block sm:flex-row"
                        >
                            <input 
                                type="email"
                                placeholder="Your email"
                                className="min-w-80 flex-grow app-outline-none bg-white text-base text-slate-400 font-opensans px-8 py-[13px] sm:py-[17px] rounded-lg"
                            />
                            <button 
                                type="submit"
                                className="px-0 sm:px-8 py-3 sm:py-4 bg-primary rounded-lg text-[18px] text-white font-bold"
                            >
                                Get started
                            </button>
                        </form>
                        <p
                            className="text-base text-slate-500 text-start sm:text-center xl:text-start font-opensans"
                        >
                            Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
                        </p>
                    </div>
                    
                    {/* social image */}
                    <div className="relative z-0 hidden sm:block">
                        <div className="
                            rounded-2xl max-w-[466px] inline-block bg-white dark:bg-dark-soft px-2 pt-2 relative 
                            after:w-[238px] after:h-[200px] after:top-[42px] after:-right-[52px] after:rounded-2xl after:absolute after:-z-[1] after:bg-[#FC5A5A] 
                            before:w-[238px] before:h-[200px] before:-left-[62px] before:-bottom-[42px] before:rounded-2xl before:absolute before:-z-[1] before:bg-[#E5EAF4]/[.06]
                        ">
                            <div className="w-full h-[212px]  rounded-xl overflow-hidden">
                                <img className="w-full h-full" src={images.socialImage} alt="Social Image" />
                            </div>
                            <div className="p-8">
                                <p className="font-roboto font-bold text-2xl text-dark-soft dark:text-slate-400 mb-3">The best articles every week</p>
                                <p className="text-[18px] text-slate-400 leading-[32px] font-opensans">Our insurance plans offers are priced the same everywhere else.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;