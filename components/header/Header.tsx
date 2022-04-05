import Image from 'next/image';
import profileFull from '../../asset/images/profileFull.jpg'
import profileSquare from '../../asset/images/profileSquare.jpg'

import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className='flex flex-col max-w-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 pt-28 px md:px-44 place-items-center md:place-items-start shadow-xl z-40'>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: 0.5,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.2
                    }
                }
            }}>
                <div id='profileHeader' className='flex'>
                    <ProfileCard />
                </div>

                <div className='flex mt-10'>
                    <Information />
                </div>
            </motion.div>
            <div className='flex flex-row pt-20'>
                <div className='bg-yellow-700 h-10 w-10'>

                </div>
                <div className='bg-sky-700 h-10 w-10'>

                </div>
                <div className='bg-red-800 h-10 w-10'>

                </div>
            </div>
        </div>
    );
}

export default Header

const ProfileCard = () => {
    return (
        <div className='flex flex-row bg-slate-800 rounded-full shadow-xl'>
            <div className='flex'>

                <div className='flex rounded-full border-2 border-lime-400/50 z-50 shadow-lg'>
                    <Image src={profileSquare} width={64} height={64} className='rounded-full shadow-lg' />
                </div>
                <div className='flex rounded-full p-3 pr-5 '>
                    <p className='text-slate-500 text-base font-medium'>Welcome to my personal website!</p>
                </div>
            </div>
        </div>
    )
}

const Information = () => {
    return (
        <div className='flex flex-col bg-slate-800 rounded-xl '>
            <div className='flex flex-row gap-6 p-2'>
                <div className='text-slate-500 font-medium text-lg'>
                    Introduction
                </div>
                <div className='text-slate-500 font-medium'>

                </div>
                <div className='text-slate-500 font-medium'>

                </div>
            </div>
            <div className='flex bg-slate-700 rounded-b-xl p-2 w-96 shadow-xl'>
                <p className='text-slate-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel eros iaculis, sodales lectus vitae, vestibulum est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur facilisis, nibh a malesuada porttitor, elit libero egestas leo, vitae venenatis arcu velit eget turpis. Sed vitae urna malesuada nisl molestie elementum. Quisque venenatis magna nec enim auctor efficitur. Donec et dolor dictum, ullamcorper massa facilisis, viverra nisl. Integer accumsan pretium semper. Cras sollicitudin malesuada augue, sit amet fringilla velit pretium vitae. Nunc convallis eleifend aliquet. Aenean cursus euismod metus iaculis pharetra. Mauris pharetra diam at ullamcorper fermentum. Phasellus in nisl faucibus, imperdiet lorem sodales, lacinia eros. Ut ultricies ac tortor quis feugiat.
                </p>
            </div>
        </div>
    )
}

