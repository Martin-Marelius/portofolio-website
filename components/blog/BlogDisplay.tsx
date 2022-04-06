
import factorioPic from '../../asset/images/factorio.jpg'

/**
 * @returns a display of the blog and headlines for use on the homepage
 */

import Image from "next/image";

const BlogDisplay = () => {
    return (
        <div className='w-full py-20 shadow-xl'>
            <div className='flex flex-row gap-24 place-content-center'>
                <BlogCard title="Latest Article" image={factorioPic} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel eros iaculis, sodales lectus vitae, vestibulum est." />
                <BlogCard title="Most Popular" image={factorioPic} text="Mauris pharetra diam at ullamcorper fermentum. Phasellus in nisl faucibus, imperdiet lorem sodales, lacinia eros. Ut ultricies ac tortor quis feugiat." />
                <BlogList />
            </div>
        </div>
    );
}

const BlogList = () => {
    return (
        <div className='bg-slate-800 p-4 rounded-lg shadow-xl  hover:cursor-default'>
            <div className="flex flex-col gap-4 h-96 overflow-y-scroll">
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
            </div>
        </div>
    )
}

const SingleBlog = () => {
    return (
        <div className="flex flex-row gap-4 bg-slate-900/50 rounded-r-xl">
            <Image src={factorioPic} layout='intrinsic' height={90} width={160} />
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
 * @param props title, image, text
 * @returns 
 */
const BlogCard = (props) => {
    return (
        <div className='bg-slate-800 p-4 rounded-lg shadow-xl h-min transform hover:scale-105 transition-all hover:cursor-default'>
            <div className="flex flex-col gap-4 w-72">
                <h1 className="text-xl text-slate-400 font-medium">
                    {props.title}
                </h1>
                <Image src={props.image} layout='responsive' height={90} width={160} />
                <p className='text-slate-400 text-justify'>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default BlogDisplay