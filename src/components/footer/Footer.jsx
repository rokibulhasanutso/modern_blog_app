import { Link } from "react-router-dom";
import images from "../../constants/images";

const Footer = () => {
    return (
        <div className="py-10 bg-dark-hard dark:bg-dark-deep">
            <div className="app-container px-4">
                <div className="md:flex md:flex-row-reverse md:gap-x-[52px]">
                    <div className="md:flex-grow">
                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-y-10 max-w-[940px] mx-auto">
                            <section className="text-slate-400 space-y-5 leading-none">
                                <div className="max-w-[180px] space-y-5 mx-auto">
                                    <h4 className="text-base md:text-lg font-bold">Product</h4>
                                    <ul className="space-y-[15px] text-sm md:text-base">
                                        <li><Link to='#'>Landingpage</Link></li>
                                        <li><Link to='#'>Features</Link></li>
                                        <li><Link to='#'>Documentation</Link></li>
                                        <li><Link to='#'>Referral Program</Link></li>
                                        <li><Link to='#'>Pricing</Link></li>
                                    </ul>
                                </div>
                            </section>

                            <section className="text-slate-400 space-y-5 leading-none">
                                <div className="max-w-[180px] space-y-5 mx-auto">
                                    <h4 className="text-base md:text-lg font-bold">Services</h4>
                                    <ul className="space-y-[15px] text-sm md:text-base">
                                        <li><Link to='#'>Documentation</Link></li>
                                        <li><Link to='#'>Design</Link></li>
                                        <li><Link to='#'>Themes</Link></li>
                                        <li><Link to='#'>Illustrations</Link></li>
                                        <li><Link to='#'>UI Kit</Link></li>
                                    </ul>
                                </div>
                            </section>

                            <section className="text-slate-400 leading-none">
                                <div className="max-w-[180px] space-y-5 mx-auto">
                                    <h4 className="text-base md:text-lg font-bold">Company</h4>
                                    <ul className="space-y-[15px] text-sm md:text-base">
                                        <li><Link to='#'>About</Link></li>
                                        <li><Link to='#'>Terms</Link></li>
                                        <li><Link to='#'>Privacy Policy</Link></li>
                                        <li><Link to='#'>Careers</Link></li>
                                    </ul>
                                </div>
                            </section>

                            <section className="text-slate-400 leading-none">
                                <div className="max-w-[180px] space-y-5 mx-auto">
                                    <h4 className="text-base md:text-lg font-bold">More</h4>
                                    <ul className="space-y-[15px] text-sm md:text-base">
                                        <li><Link to='#'>Documentation</Link></li>
                                        <li><Link to='#'>License</Link></li>
                                        <li><Link to='#'>Changelog</Link></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="mx-auto md:mx-0 flex flex-col items-center md:items-start mt-10 md:mt-0 max-w-[240px]">
                        <div className="">
                            <img src={images.LogoWhenDark} alt="Footer Logo" />
                        </div>
                        <p className="mt-4 text-[14px] text-slate-400 text-center md:text-start font-normal font-opensans leading-[24px]">
                            Build a modern and creative website with crealand
                        </p>
                        <div className="flex gap-[15px] mt-5">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img className="w-full h-auto object-cover" src={images.facebook} alt="Facebook Socialmedia Icon" />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img className="w-full h-auto object-cover" src={images.instagram} alt="Instagram Socialmedia Icon" />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img className="w-full h-auto object-cover" src={images.pinterest} alt="Pinterest Socialmedia Icon" />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img className="w-full h-auto object-cover" src={images.youtube} alt="Youtube Socialmedia Icon" />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img className="w-full h-auto object-cover" src={images.linkedin} alt="Linkedin Socialmedia Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 hidden md:block">
                    <div className="space-y-6 flex flex-col items-center">
                        <div className="w-14 h-14">
                            <img className="w-full h-full object-cover" src={images.HeartIcon} alt="Sub Footer Icon" />
                        </div>
                        <span className="text-base text-slate-400 italic font-bold">Copyright © 2023. Crafted with love.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;