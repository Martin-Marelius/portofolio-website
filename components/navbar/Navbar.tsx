import Link from "next/link";

const Navbar = () => {
    return (
        <div className='relative z-50 backdrop-blur bg-black/20 overflow-hidden'>
            <ul className='flex flex-row-reverse gap-10 overflow-hidden'>

                <li className='font-bold font-mono text-lg text-white transform hover:scale-105 transition-all'>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className='font-bold font-mono text-lg text-white transform hover:scale-105 transition-all'>
                    <Link href="/about">About</Link>
                </li>
                <li className='font-bold font-mono text-lg text-white transform hover:scale-105 transition-all'>
                    <Link href="/blog">Blog</Link>
                </li>
                <li className='font-bold font-mono text-lg text-white transform hover:scale-105 transition-all'>
                    <Link href="/portofolio">Portfolio</Link>
                </li>
                <li className='font-bold font-mono text-lg text-white transform hover:scale-105 transition-all'>
                    <Link href="/">Home</Link>
                </li>

            </ul>
        </div>
    );

}

export default Navbar



