
const Navbar = () => {
    return (
        <div className='flex flex-row relative place-content-end gap-5 mr-20'>
            <span className="flex gap-10 bg-gradient-to-l from-orange-400 to-rose-400 rounded-full p-1 px-5 mt-5">
                <p className='font-bold font-mono px-4 text-lg text-white'>Portfolio</p>
                <p className='font-bold font-mono px-4 text-lg text-white'>About</p>
                <p className='font-bold font-mono px-4 text-lg text-white'>Contact</p>
            </span>
        </div>
    );

}

export default Navbar



