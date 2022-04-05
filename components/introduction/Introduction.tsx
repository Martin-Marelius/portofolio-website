import Skillset from "../skillset/Skillset";
import { dataKeywords } from "../utils/Skills";


const Introduction = () => {
    return (
        <div className='flex flex-row self-center mx-44 z-20 my-10 gap-8'>
            <div className="flex flex-col gap-8">
                <Information />
                <Keywords />
            </div>

            <Skillset />
        </div>
    );
}

const Keywords = () => {
    return (
        <div className="w-96 flex flex-wrap-reverse gap-4">
            {dataKeywords.map((keyword) => (
                <div className="p-2 px-3 h-min text-slate-400 bg-slate-800 rounded-full shadow-lg transform hover:-translate-y-px transition-all cursor-default">
                    {keyword}
                </div>
            ))}
            </div>
    )
}

const Information = () => {
    return (
        <div className='bg-slate-800 h-min w-min rounded-xl '>
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

export default Introduction