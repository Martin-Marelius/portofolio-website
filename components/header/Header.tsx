import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';
import profileFull from '../../asset/images/profileFull.jpg'
import profileSquare from '../../asset/images/profileSquare.jpg'
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {

    const [messages, setMessages] = useState<ReactElement[]>([])

    useEffect(() => {
        if (messages.length == 0) {
            demo();
        }

    }, [])

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function demo() {
        await sleep(1000);
        setMessages(messages => [<p>Welcome to my personal Website!</p>, ...messages])
        await sleep(1500);
        setMessages(messages => [<p>Feel free to take a look around :)</p>, ...messages])
        await sleep(1500);
        setMessages(messages => [<p>If you wish to contact me I can be reached <span className='text-sky-600'><Link href='/contact'>here</Link></span></p>, ...messages])

    }

    return (
        <div className='flex flex-col max-w-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 py-28 px md:px-44 place-items-center md:place-items-start shadow-xl z-40'>
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
                    <Chatbox>
                        {messages}
                    </Chatbox>
                </div>
            </motion.div>
        </div>
    );
}

export default Header

const Chatbox = (props) => {
    return (
        <div className='flex flex-col w-96 bg-slate-800 rounded-t-xl rounded-b-xl'>
            <div className='flex flex-row w-fit p-2'>
                <h1 className='text-slate-800 font-medium '>
                    Martin Marelius
                </h1>

            </div>
            <div className='flex bg-slate-900 h-96'>
                <div className='self-end pl-4'>
                    <Image src={profileSquare} width={44} height={44} className='rounded-full shadow-lg' />
                    <div className='h-3 w-3 rounded-full bg-lime-600 -translate-y-4'>
                        <div className='h-3 w-3 bg-lime-600 rounded-full transform animate-ping' />
                    </div>
                </div>

                <ul className='flex flex-col-reverse p-8 pl-4 gap-4 pb-14 overflow-hidden w-96'>
                    <AnimatePresence>
                        {props.children.map((element, index) => (
                            <motion.li
                                key={index}
                                initial={(index == 0) ? { opacity: 0, y: 120, scale: 1 } : {}}
                                animate={(index == 0) ? { opacity: 1, y: 0, scale: 1 } : {}}
                            >
                                <div className={`bg-slate-700 text-slate-400 text-sm rounded-2xl w-fit p-2 px-4 ${(index == 0) ? 'rounded-bl-md' : ''}`}>
                                    {element}
                                </div>

                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>

            </div>
            <div className='flex flex-row w-max place-items-end p-2 pl-8'>
                <h1 className='text-slate-500 font-medium '>
                    ...
                </h1>
            </div>
        </div >
    )
}

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

