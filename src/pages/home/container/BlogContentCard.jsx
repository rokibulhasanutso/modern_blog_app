
const BlogContentCard = ({data}) => {
    return (
        <div className="rounded-xl shadow-lg bg-white dark:bg-dark-soft">
            <div className="w-full overflow-hidden rounded-t-xl pb-6 md:pb-9">
                <img
                    className="w-full"
                    src={data.image} 
                    alt="Blog Image" 
                />
            </div>

            <div className="px-6 md:px-9 space-y-4">
                <h1 className="text-dark-soft dark:text-slate-400 text-[20px] sm:text-[24px] md:text-[28px] leading-[36px] font-roboto font-bold">{data.title}</h1>
                <p className="text-dark-soft dark:text-slate-400 text-[14px] md:text-[18px] leading-[32px] font-opensans">{data.desc}</p>
            </div>

            <div className="p-6 md:p-9 flex space-x-4">
                <div className="w-10 h-10 rounded-full my-2 overflow-hidden"><img className="w-full h-full object-cover" src={data.author.image} alt="Author Image" /></div>
                <div className="flex-grow flex flex-wrap justify-between items-center gap-y-2">
                    <div className="flex-grow space-y-1">
                        <p className="text-base text-dark-soft dark:text-slate-400 italic font-bold">{data.author.name}</p>
                        {
                            data.author.varified 
                            ? <p className="flex items-center space-x-1.5">
                                <svg className="text-green-500 text-[18px]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" opacity="0.2" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                    <path fill="currentColor" opacity="0.2" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z"></path>
                                    <path fill="currentColor" d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                </svg>
                                <span className="italic text-slate-400 -mt-[2px]">Verified writer</span>
                            </p>

                            : <p className="text-slate-500">
                                <span>Writer</span>
                            </p>
                        }
                    </div>
                    <p className="font-bold text-slate-400">{data.date}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogContentCard;