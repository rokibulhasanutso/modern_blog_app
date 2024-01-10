import { IoSearchSharp } from "react-icons/io5";
import images from "../../../constants/images";

const HeroSection = () => {
    return (
        <div className="flex justify-center lg:justify-between items-end">
            <div className="space-y-6 max-w-[600px] w-full md:w-[500px] xl:w-[600px]">
                <div className="space-y-5">
                    <h1 className="xl:text-[56px] md:text-[48px] text-[32px] text-center lg:text-start text-dark-soft dark:text-slate-400 font-bold">Read the most interesting articles</h1>
                    <p className="md:text-[20px] text-base text-center lg:text-start text-dark-soft dark:text-slate-400 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <form
                    onSubmit={() => false}
                    className="flex items-center bg-white p-2 rounded-[12px] shadow-xl shadow-slate-100 dark:shadow-slate-900 border border-slate-200"
                >
                    <IoSearchSharp className="text-2xl text-slate-500 ms-3"/>
                    <input 
                        type="text" 
                        name="search"
                        placeholder="Search article"
                        className="text-lg text-slate-400 mx-4 app-outline-none w-full font-bold italic"
                    />
                    <input 
                        type="submit" 
                        value={'Search'}
                        className="btn-fill-primary cursor-pointer"
                    />
                </form>

                <div className="flex flex-wrap items-center gap-2">
                    <p className='text-base font-bold text-slate-500 dark:text-slate-400'>Popular Tags :</p>
                    <div className="flex flex-wrap items-center gap-x-2">
                        <p className="tags">Design</p>
                        <p className="tags">User Experience</p>
                        <p className="tags">User Interfaces</p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block xl:max-w-[700px]">
                <img src={images.heroImage} className="w-full" alt="Hero Section Image" />
            </div>
        </div>
    );
};

export default HeroSection;