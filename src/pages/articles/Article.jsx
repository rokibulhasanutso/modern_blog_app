import { BiComment } from "react-icons/bi";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

const Article = () => {
    
    return (
        <div>
            <div className="app-container px-4">
                {/* breadCumb */}
                <div className="space-x-2 text-sm text-slate-500">
                    <span>Home</span>
                    <span>/</span>
                    <span>Blog</span>
                    <span>/</span>
                    <span>Help children get better education</span>
                </div>

                <div className="mt-8 mb-14 relative flex flex-col lg:flex-row gap-4 justify-between">
                    <div className="xl:max-w-[768px] lg:max-w-[578px]">
                        <div className="w-full h-auto rounded-xl overflow-hidden">
                            <img className="w-full h-full" src={'/images/post/article_bg.jpg'} alt="Article Image" />
                        </div>
                        <p className="mt-6 uppercase text-primary text-base font-roboto tracking-[3.2px]">Education</p>
                        <h1 className="mt-5 text-[26px] text-dark-hard dark:text-slate-400 font-roboto font-medium">Help children get better education</h1>
                        <div className="my-6 space-y-10 text-base text-dark-soft dark:text-slate-400 font-opensans font-normal leading-[29px]">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.</p>
                        </div>

                        <div className="mt-24">
                            <div className="border border-primary dark:bg-dark-deep rounded-xl flex flex-col p-5">
                                <form 
                                    onSubmit={() => {}}
                                    className="flex flex-col"
                                >
                                    <textarea className="w-full h-20 resize-none app-outline-none dark:bg-inherit dark:text-slate-200" name="" placeholder="Leave your comment here..."/>
                                    <button type="submit" className="px-10 py-2 rounded-lg bg-primary inline-block text-white self-end">Send</button>
                                </form>
                            </div>
                            
                            <div className="my-10">
                                <p className="text-base font-bold font-opensans text-dark-hard dark:text-slate-400">All comments (3)</p>

                                <div className="my-8 space-y-5">
                                    <div className="bg-[#F2F4F5] dark:bg-dark-deep rounded-xl flex space-x-4 p-6 shadow-sm">
                                        <div>
                                            <div className="w-10 h-10 rounded-full flex-grow overflow-hidden">
                                                <img className="w-full h-auto" src="/images/author/author1.jpg" alt="AuthImage" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="">
                                                <div>
                                                    <p className="text-sm text-slate-800 dark:text-slate-400 font-bold font-roboto">Rokibul Hasan</p>
                                                    <p className="text-xs text-gray-400 font-roboto">15 December 2020, 11:40 AM</p>
                                                </div>
                                                <p className="text-base text-[#77808B] font-opensans my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum cum magnam consequatur libero eligendi quibusdam placeat vel nam iste fugiat, labore neque cupiditate eos quos repellendus nihil earum? Dignissimos?</p>
                                                <div className="flex space-x-4">
                                                    <button
                                                        onClick={() => {}}
                                                        className="flex items-center text-[#77808B] space-x-2"
                                                    >
                                                        <BiComment className="text-xl"/>
                                                        <span className="text-xs font-bold">Reply</span>
                                                    </button>
                                                    <button
                                                        onClick={() => {}}
                                                        className="flex items-center text-[#77808B] space-x-2"
                                                    >
                                                        <MdEdit className="text-xl"/>
                                                        <span className="text-xs font-bold">Edit</span>
                                                    </button>
                                                    <button
                                                        onClick={() => {}}
                                                        className="flex items-center text-[#77808B] space-x-2"
                                                    >
                                                        <MdDelete className="text-xl"/>
                                                        <span className="text-xs font-bold">Delete</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Reply */}
                                            <div className="bg-[#F2F4F5] dark:bg-dark-deep rounded-xl flex space-x-4 mt-4 -ms-4 p-4 pb-0">
                                                <div>
                                                    <div className="w-10 h-10 rounded-full flex-grow overflow-hidden">
                                                        <img className="w-full h-auto" src="/images/author/author1.jpg" alt="AuthImage" />
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div>
                                                        <p className="text-sm text-slate-800 dark:text-slate-400 font-bold font-roboto">Rokibul Hasan</p>
                                                        <p className="text-xs text-gray-400 font-roboto">15 December 2020, 11:40 AM</p>
                                                    </div>
                                                    <p className="text-base text-[#77808B] font-opensans my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum cum magnam consequatur libero eligendi quibusdam placeat vel nam iste fugiat, labore neque cupiditate eos quos repellendus nihil earum? Dignissimos?</p>
                                                    <div className="flex space-x-4">
                                                        <button
                                                            onClick={() => {}}
                                                            className="flex items-center text-[#77808B] space-x-2"
                                                        >
                                                            <BiComment className="text-xl"/>
                                                            <span className="text-xs font-bold">Reply</span>
                                                        </button>
                                                        <button
                                                            onClick={() => {}}
                                                            className="flex items-center text-[#77808B] space-x-2"
                                                        >
                                                            <MdEdit className="text-xl"/>
                                                            <span className="text-xs font-bold">Edit</span>
                                                        </button>
                                                        <button
                                                            onClick={() => {}}
                                                            className="flex items-center text-[#77808B] space-x-2"
                                                        >
                                                            <MdDelete className="text-xl"/>
                                                            <span className="text-xs font-bold">Delete</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-[#F2F4F5] dark:bg-dark-deep rounded-xl flex space-x-4 p-5 shadow-sm">
                                        <div>
                                            <div className="w-10 h-10 rounded-full flex-grow overflow-hidden">
                                                <img className="w-full h-auto" src="/images/author/author1.jpg" alt="AuthImage" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div>
                                                <p className="text-sm text-slate-800 dark:text-slate-400 font-bold font-roboto">Rokibul Hasan</p>
                                                <p className="text-xs text-gray-400 font-roboto">15 December 2020, 11:40 AM</p>
                                            </div>
                                            <p className="text-base text-[#77808B] font-opensans my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum cum magnam consequatur libero eligendi quibusdam placeat vel nam iste fugiat, labore neque cupiditate eos quos repellendus nihil earum? Dignissimos?</p>
                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <BiComment className="text-xl"/>
                                                    <span className="text-xs font-bold">Reply</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdEdit className="text-xl"/>
                                                    <span className="text-xs font-bold">Edit</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdDelete className="text-xl"/>
                                                    <span className="text-xs font-bold">Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-[#F2F4F5] dark:bg-dark-deep rounded-xl flex space-x-4 p-5 shadow-sm">
                                        <div>
                                            <div className="w-10 h-10 rounded-full flex-grow overflow-hidden">
                                                <img className="w-full h-auto" src="/images/author/author1.jpg" alt="AuthImage" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div>
                                                <p className="text-sm text-slate-800 dark:text-slate-400 font-bold font-roboto">Rokibul Hasan</p>
                                                <p className="text-xs text-gray-400 font-roboto">15 December 2020, 11:40 AM</p>
                                            </div>
                                            <p className="text-base text-[#77808B] font-opensans my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum cum magnam consequatur libero eligendi quibusdam placeat vel nam iste fugiat, labore neque cupiditate eos quos repellendus nihil earum? Dignissimos?</p>
                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <BiComment className="text-xl"/>
                                                    <span className="text-xs font-bold">Reply</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdEdit className="text-xl"/>
                                                    <span className="text-xs font-bold">Edit</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdDelete className="text-xl"/>
                                                    <span className="text-xs font-bold">Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-[#F2F4F5] dark:bg-dark-deep rounded-xl flex space-x-4 p-5 shadow-sm">
                                        <div>
                                            <div className="w-10 h-10 rounded-full flex-grow overflow-hidden">
                                                <img className="w-full h-auto" src="/images/author/author1.jpg" alt="AuthImage" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div>
                                                <p className="text-sm text-slate-800 dark:text-slate-400 font-bold font-roboto">Rokibul Hasan</p>
                                                <p className="text-xs text-gray-400 font-roboto">15 December 2020, 11:40 AM</p>
                                            </div>
                                            <p className="text-base text-[#77808B] font-opensans my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum cum magnam consequatur libero eligendi quibusdam placeat vel nam iste fugiat, labore neque cupiditate eos quos repellendus nihil earum? Dignissimos?</p>
                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <BiComment className="text-xl"/>
                                                    <span className="text-xs font-bold">Reply</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdEdit className="text-xl"/>
                                                    <span className="text-xs font-bold">Edit</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdDelete className="text-xl"/>
                                                    <span className="text-xs font-bold">Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-[#F2F4F5] dark:bg-dark-deep rounded-xl flex space-x-4 p-5 shadow-sm">
                                        <div>
                                            <div className="w-10 h-10 rounded-full flex-grow overflow-hidden">
                                                <img className="w-full h-auto" src="/images/author/author1.jpg" alt="AuthImage" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div>
                                                <p className="text-sm text-slate-800 dark:text-slate-400 font-bold font-roboto">Rokibul Hasan</p>
                                                <p className="text-xs text-gray-400 font-roboto">15 December 2020, 11:40 AM</p>
                                            </div>
                                            <p className="text-base text-[#77808B] font-opensans my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum cum magnam consequatur libero eligendi quibusdam placeat vel nam iste fugiat, labore neque cupiditate eos quos repellendus nihil earum? Dignissimos?</p>
                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <BiComment className="text-xl"/>
                                                    <span className="text-xs font-bold">Reply</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdEdit className="text-xl"/>
                                                    <span className="text-xs font-bold">Edit</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdDelete className="text-xl"/>
                                                    <span className="text-xs font-bold">Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-[#F2F4F5] dark:bg-dark-deep rounded-xl flex space-x-4 p-5 shadow-sm">
                                        <div>
                                            <div className="w-10 h-10 rounded-full flex-grow overflow-hidden">
                                                <img className="w-full h-auto" src="/images/author/author1.jpg" alt="AuthImage" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div>
                                                <p className="text-sm text-slate-800 dark:text-slate-400 font-bold font-roboto">Rokibul Hasan</p>
                                                <p className="text-xs text-gray-400 font-roboto">15 December 2020, 11:40 AM</p>
                                            </div>
                                            <p className="text-base text-[#77808B] font-opensans my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum cum magnam consequatur libero eligendi quibusdam placeat vel nam iste fugiat, labore neque cupiditate eos quos repellendus nihil earum? Dignissimos?</p>
                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <BiComment className="text-xl"/>
                                                    <span className="text-xs font-bold">Reply</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdEdit className="text-xl"/>
                                                    <span className="text-xs font-bold">Edit</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdDelete className="text-xl"/>
                                                    <span className="text-xs font-bold">Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-[#F2F4F5] dark:bg-dark-deep rounded-xl flex space-x-4 p-5 shadow-sm">
                                        <div>
                                            <div className="w-10 h-10 rounded-full flex-grow overflow-hidden">
                                                <img className="w-full h-auto" src="/images/author/author1.jpg" alt="AuthImage" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div>
                                                <p className="text-sm text-slate-800 dark:text-slate-400 font-bold font-roboto">Rokibul Hasan</p>
                                                <p className="text-xs text-gray-400 font-roboto">15 December 2020, 11:40 AM</p>
                                            </div>
                                            <p className="text-base text-[#77808B] font-opensans my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum cum magnam consequatur libero eligendi quibusdam placeat vel nam iste fugiat, labore neque cupiditate eos quos repellendus nihil earum? Dignissimos?</p>
                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <BiComment className="text-xl"/>
                                                    <span className="text-xs font-bold">Reply</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdEdit className="text-xl"/>
                                                    <span className="text-xs font-bold">Edit</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdDelete className="text-xl"/>
                                                    <span className="text-xs font-bold">Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-[#F2F4F5] dark:bg-dark-deep rounded-xl flex space-x-4 p-5 shadow-sm">
                                        <div>
                                            <div className="w-10 h-10 rounded-full flex-grow overflow-hidden">
                                                <img className="w-full h-auto" src="/images/author/author1.jpg" alt="AuthImage" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div>
                                                <p className="text-sm text-slate-800 dark:text-slate-400 font-bold font-roboto">Rokibul Hasan</p>
                                                <p className="text-xs text-gray-400 font-roboto">15 December 2020, 11:40 AM</p>
                                            </div>
                                            <p className="text-base text-[#77808B] font-opensans my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum cum magnam consequatur libero eligendi quibusdam placeat vel nam iste fugiat, labore neque cupiditate eos quos repellendus nihil earum? Dignissimos?</p>
                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <BiComment className="text-xl"/>
                                                    <span className="text-xs font-bold">Reply</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdEdit className="text-xl"/>
                                                    <span className="text-xs font-bold">Edit</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdDelete className="text-xl"/>
                                                    <span className="text-xs font-bold">Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-[#F2F4F5] dark:bg-dark-deep rounded-xl flex space-x-4 p-5 shadow-sm">
                                        <div>
                                            <div className="w-10 h-10 rounded-full flex-grow overflow-hidden">
                                                <img className="w-full h-auto" src="/images/author/author1.jpg" alt="AuthImage" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div>
                                                <p className="text-sm text-slate-800 dark:text-slate-400 font-bold font-roboto">Rokibul Hasan</p>
                                                <p className="text-xs text-gray-400 font-roboto">15 December 2020, 11:40 AM</p>
                                            </div>
                                            <p className="text-base text-[#77808B] font-opensans my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum cum magnam consequatur libero eligendi quibusdam placeat vel nam iste fugiat, labore neque cupiditate eos quos repellendus nihil earum? Dignissimos?</p>
                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <BiComment className="text-xl"/>
                                                    <span className="text-xs font-bold">Reply</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdEdit className="text-xl"/>
                                                    <span className="text-xs font-bold">Edit</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdDelete className="text-xl"/>
                                                    <span className="text-xs font-bold">Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="bg-[#F2F4F5] dark:bg-dark-deep rounded-xl flex space-x-4 p-5 shadow-sm">
                                        <div>
                                            <div className="w-10 h-10 rounded-full flex-grow overflow-hidden">
                                                <img className="w-full h-auto" src="/images/author/author1.jpg" alt="AuthImage" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div>
                                                <p className="text-sm text-slate-800 dark:text-slate-400 font-bold font-roboto">Rokibul Hasan</p>
                                                <p className="text-xs text-gray-400 font-roboto">15 December 2020, 11:40 AM</p>
                                            </div>
                                            <p className="text-base text-[#77808B] font-opensans my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum cum magnam consequatur libero eligendi quibusdam placeat vel nam iste fugiat, labore neque cupiditate eos quos repellendus nihil earum? Dignissimos?</p>
                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <BiComment className="text-xl"/>
                                                    <span className="text-xs font-bold">Reply</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdEdit className="text-xl"/>
                                                    <span className="text-xs font-bold">Edit</span>
                                                </button>
                                                <button
                                                    onClick={() => {}}
                                                    className="flex items-center text-[#77808B] space-x-2"
                                                >
                                                    <MdDelete className="text-xl"/>
                                                    <span className="text-xs font-bold">Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[382px]">
                        <StickyBox  offsetTop={110} offsetBottom={40}>
                        <div className="rounded-xl border dark:border-dark-deep dark:bg-dark-deep shadow-xl shadow-indigo-100 dark:shadow-slate-800 px-6 py-[26px] space-y-8">
                            <div className="">
                                <h2 className="text-xl text-dark-hard dark:text-slate-400 font-medium font-roboto">Latest Article</h2>

                                <div className="mt-7 gap-y-7 grid sm:grid-cols-2 lg:grid-cols-1">
                                    <div className="flex gap-x-6">
                                        <div>
                                            <div className="w-20 h-20 rounded-xl overflow-hidden">
                                                <img className="w-full h-full object-cover" src='/images/post/blogImg2.jpg' alt="Article Image" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-lg text-dark-soft dark:text-slate-400 font-roboto font-medium">Help children get better education</p>
                                            <p className="text-xs dark:text-slate-400 font-opensans font-light">Jun 27, 2022</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-x-6">
                                        <div>
                                            <div className="w-20 h-20 rounded-xl overflow-hidden">
                                                <img className="w-full h-full object-cover" src='/images/post/blogImg3.jpg' alt="Article Image" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-lg text-dark-soft dark:text-slate-400 font-roboto font-medium">Help children get better education</p>
                                            <p className="text-xs font-opensans dark:text-slate-400 font-light">Jun 27, 2022</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-x-6">
                                        <div>
                                            <div className="w-20 h-20 rounded-xl overflow-hidden">
                                                <img className="w-full h-full object-cover" src='/images/post/blogImg4.jpg' alt="Article Image" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-lg text-dark-soft dark:text-slate-400 font-roboto font-medium">Help children get better education</p>
                                            <p className="text-xs font-opensans dark:text-slate-400 font-light">Jun 27, 2022</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-x-6">
                                        <div>
                                            <div className="w-20 h-20 rounded-xl overflow-hidden">
                                                <img className="w-full h-full object-cover" src='/images/post/blogImg5.jpg' alt="Article Image" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-lg text-dark-soft dark:text-slate-400 font-roboto font-medium">Help children get better education</p>
                                            <p className="text-xs font-opensans dark:text-slate-400 font-light">Jun 27, 2022</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-x-6">
                                        <div>
                                            <div className="w-20 h-20 rounded-xl overflow-hidden">
                                                <img className="w-full h-full object-cover" src='/images/post/blogImg6.jpg' alt="Article Image" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-lg text-dark-soft dark:text-slate-400 font-roboto font-medium">Help children get better education</p>
                                            <p className="text-xs font-opensans dark:text-slate-400 font-light">Jun 27, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* tags */}
                            <div>
                                <h2 className="text-xl text-dark-hard dark:text-slate-400 font-roboto font-medium">Tags</h2>
                                <div className="flex flex-wrap gap-3 mt-8">
                                    <Link 
                                        to={''}
                                        className="text-sm text-white font-roboto font-normal px-4 py-2 bg-primary rounded-xl"
                                    >
                                        Medical
                                    </Link>

                                    <Link 
                                        to={''}
                                        className="text-sm text-white font-roboto font-normal px-4 py-2 bg-primary rounded-xl"
                                    >
                                        Lifestyle
                                    </Link>

                                    <Link 
                                        to={''}
                                        className="text-sm text-white font-roboto font-normal px-4 py-2 bg-primary rounded-xl"
                                    >
                                        Learn
                                    </Link>

                                    <Link 
                                        to={''}
                                        className="text-sm text-white font-roboto font-normal px-4 py-2 bg-primary rounded-xl"
                                    >
                                        Healthy
                                    </Link>

                                    <Link 
                                        to={''}
                                        className="text-sm text-white font-roboto font-normal px-4 py-2 bg-primary rounded-xl"
                                    >
                                        Food
                                    </Link>

                                    <Link 
                                        to={''}
                                        className="text-sm text-white font-roboto font-normal px-4 py-2 bg-primary rounded-xl"
                                    >
                                        Diet
                                    </Link>

                                    <Link 
                                        to={''}
                                        className="text-sm text-white font-roboto font-normal px-4 py-2 bg-primary rounded-xl"
                                    >
                                        Education
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </StickyBox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;