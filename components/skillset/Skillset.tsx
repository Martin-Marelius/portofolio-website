import { useEffect, useState } from 'react'
import { dataKeywords, dataSet } from '../index'
import { skill } from '../utils/Skills'


/**
 * 
 * @returns TSX to be displayed on homepage
 */

const Skillset = () => {

    const [data, setData] = useState(dataSet)

    return (
        <div className='flex flex-col gap-5'>
            {data.map((skill) => (
                <SkillCard data={skill} />
            ))}
        </div>
    )
}

const SkillCard = (props) => {

    return (
        <div className='flex bg-slate-800 rounded-xl shadow-xl'>
            <div className='flex flex-col'>
                <div className='flex flex-row place-content-center'>
                    <h1 className='font-medium text-slate-400 self-center py-2 text-lg cursor-context-menu'>
                        {props.data.name}
                    </h1>
                </div>
                <div id='line' className='h-px min-w-min bg-slate-400/25' />

                <div className='flex flex-row py-2 px-px'>
                    <ul className='text-slate-400 px-2 font-light w-50 text-right gap-2'>
                        <li>Experience:</li>
                        <li>Adaptability:</li>
                        <li>Technicalities:</li>
                    </ul>
                    <div className='flex flex-col p-2 gap-3'>
                        <span className='flex flex-row gap-2 '>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((index => {
                                return ((index < props.data.experience) ? <div className='w-6 h-3 bg-lime-600 rounded-full' /> : <div className='w-6 h-3 bg-slate-700/50 rounded-full' />)
                            }))}
                        </span>
                        <span className='flex flex-row gap-2 '>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((index => {
                                return ((index < props.data.adaptability) ? <div className='w-6 h-3 bg-orange-600 rounded-full' /> : <div className='w-6 h-3 bg-slate-700/50 rounded-full' />)
                            }))}

                        </span>
                        <span className='flex flex-row gap-2 '>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((index => {
                                return ((index < props.data.technical) ? <div className='w-6 h-3 bg-sky-600 rounded-full' /> : <div className='w-6 h-3 bg-slate-700/50 rounded-full' />)
                            }))}
                        </span>
                    </div>
                </div>
                <div className='place-self-end -mt-5 py-2 pr-4'>
                    <ul className='flex flex-row gap-12 text-slate-700 text-sm'>
                        <li>Low</li>
                        <li>Average</li>
                        <li>High</li>
                        <li>Excellent</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

const InteractiveSkills = (set) => {

    const [data, setData] = useState(set)

    const [points, setPoints] = useState<skill>({
        name: undefined,
        experience: undefined,
        adaptability: undefined,
        technical: undefined,
    })

    useEffect(() => {
        setPoints(data[0])
    }, [])

    return (
        <div className='flex flex-row bg-slate-900 rounded-xl shadow-xl'>
            <div className='flex flex-col'>
                <div className='flex flex-row divide-x divide-slate-400/25'>
                    {data.map(skill => (
                        <button onClick={() => setPoints(skill)} className={`font-medium text-slate-400 px-4 py-2 transform hover:text-orange-600 hover:-translate-y-px transition-all cursor-context-menu ${(skill.name == points.name) ? 'text-orange-600' : ''}`}>{skill.name}</button>
                    ))}

                </div>
                <div id='line' className='h-px min-w-min bg-slate-400/25' />

                <div className='flex flex-row '>
                    <ul className='text-slate-400 px-2 font-light w-50 text-right gap-2'>
                        <li>Experience:</li>
                        <li>Adaptability:</li>
                        <li>Technical understanding:</li>
                    </ul>
                    <div className='flex flex-col p-2 gap-3'>
                        <span className='flex flex-row gap-2 '>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((index => {
                                return ((index < points.experience) ? <div className='w-6 h-3 bg-lime-600 rounded-full' /> : <div className='w-6 h-3 bg-slate-800 rounded-full' />)
                            }))}
                        </span>
                        <span className='flex flex-row gap-2 '>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((index => {
                                return ((index < points.adaptability) ? <div className='w-6 h-3 bg-orange-600 rounded-full' /> : <div className='w-6 h-3 bg-slate-800 rounded-full' />)
                            }))}

                        </span>
                        <span className='flex flex-row gap-2 '>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((index => {
                                return ((index < points.technical) ? <div className='w-6 h-3 bg-sky-600 rounded-full' /> : <div className='w-6 h-3 bg-slate-800 rounded-full' />)
                            }))}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skillset