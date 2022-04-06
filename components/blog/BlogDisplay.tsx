
import factorioPic from '../../asset/images/factorio.jpg'

/**
 * @returns a display of the blog and headlines for use on the homepage
 */

import Image from "next/image";

const BlogDisplay = () => {
    return (
        <div className='w-full py-20 shadow-xl'>
            <div className='flex flex-row gap-20 place-content-center'>
                <BlogCard article="Latest Article" title="Introduction to Lua" image={factorioPic} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel eros iaculis, sodales lectus vitae, vestibulum est." />
                <BlogCard article="Most Popular" title="Factorio Modding" image={factorioPic} text="Mauris pharetra diam at ullamcorper fermentum. Phasellus in nisl faucibus, imperdiet lorem sodales, lacinia eros. Ut ultricies ac tortor quis feugiat." />
                <BlogList />
            </div>
        </div>
    );
}

const BlogList = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className="text-xl text-slate-400 font-medium">All Articles</h1>
            <div className='bg-slate-800 p-4 rounded-xl shadow-xl  hover:cursor-default'>
                <div className="flex flex-col gap-4 h-96 pr-4 overflow-y-scroll">
                    <SingleBlog />
                    <SingleBlog />
                    <SingleBlog />
                    <SingleBlog />
                    <SingleBlog />
                    <SingleBlog />
                </div>
            </div>
        </div>
    )
}

const SingleBlog = () => {
    return (
        <div className="flex flex-row gap-4 bg-slate-900/50 rounded-xl">
            <Image src={factorioPic} layout='intrinsic' height={90} width={160} className='rounded-l-xl' />
            <div className='flex flex-col gap-2'>
                <h1 className="text-xl text-slate-400 font-medium">
                    Article Title
                </h1>
                <p className='text-slate-500 text-sm text-left h-10 w-64 text-ellipsis overflow-hidden'>
                    Mauris pharetra diam at ullamcorper fermentum. Phasellus in nisl faucibus, imperdiet lorem sodales, lacinia eros. Ut ultricies ac tortor quis feugiat.
                </p>
            </div>
        </div>
    )
}

/**
 * 
 * @param props article, title, image, text
 * @returns 
 */
const BlogCard = (props) => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className="text-xl text-slate-400 font-medium">{props.article}</h1>
            <div className='bg-slate-800 rounded-xl shadow-xl h-min transform hover:scale-105 transition-all hover:cursor-default'>
                <div className="flex flex-col w-72">
                    <Image src={props.image} layout='responsive' height={90} width={160} className='rounded-t-xl' />
                    <div className='p-2 flex flex-col gap-2'>
                        <h1 className="text-lg pl-2 text-slate-400 font-medium ">
                            {props.title}
                        </h1>
                        <p className='text-slate-400 text-base text-left px-2 pb-2'>
                            {props.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDisplay