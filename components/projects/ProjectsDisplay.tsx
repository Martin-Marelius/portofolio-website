import ProjectDisplay from "../../interfaces/ProjectDisplay/ProjectDisplayInterface";
import Image from 'next/image'
import mypic from '../../asset/beatdetector.jpg'
import Link from "next/link";

export class ProjectsDisplay implements ProjectDisplay {

    title: string;
    readme: string;
    creationDate: string;
    images: string[];
    languages: (string | number)[];

    // fetch all information from db about portofolio projects
    constructor() {
        this.title = "Beatdetector"
        this.readme = "Analyzes sound waves in order to automatically place beats for the rhytm game Osu!"
        this.creationDate = "10th aug 2018"
        this.images = ["beatdetector.jpg"]
        this.languages = ["Java", 93, "htlm", 5, "Css", 2]
    }

}

/**
 * 
 * @param props.data in the format of (string | number)[]
 * @returns a display of languages in co.lors and percentages
 */
const Languages = (props) => {
    return (
        <div className="flex flex-col">
            <h2 className="font-bold">
                Languages
            </h2>

            <div className="flex w-72 place-content-start bg-gray-800 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-blue-500 w-1/2 h-2">

                </div >

                <div className="bg-yellow-500 w-1/4 h-2">

                </div>

                <div className="bg-purple-500 w-1/4 h-2">

                </div>
            
            </div>
                
            <ul className="flex flex-row gap-5 font-medium text-sm text-left">
                <li className="bg-blue-500 bg-clip-text">
                    TypeScript 93%
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    CSS
                </li>

            </ul>
        </div>
    )
}

const Card = (props) => {
    return (
        <div className="flex flex-col bg-white w-52 max-h-72 h-72 rounded-2xl transform transition-all hover:scale-105 shadow-xl">
            <div>
                <Image src={mypic}
                    layout="intrinsic"
                    className="rounded-t-2xl"
                />

            </div>

            <div className="mx-2 overflow-hidden">
                <div className="flex flex-row place-content-between ">
                    <h1 className=" font-bold">
                        {props.cardData.title}
                    </h1>
                    <a className="font-light text-xs text-gray-600 mt-1">
                        {props.cardData.creationDate}
                    </a>
                </div>
                <div className="flex flex-row place-content-center">
                    <div className="bg-gray-400 h-px w-48 rounded-full" />
                </div>
                <div className="mb-2">
                    {props.cardData.readme}
                </div>

            </div>


        </div>
    )
}

const Card2 = (props) => {
    return (
        <div className="flex flex-row transform hover:scale-105 transition-all bg-gradient-to-r from-rose-100 to-teal-100 mx-16 my-4 rounded-lg">
            <div className="flex flex-col ml-3 pb-3">

                <h1 className="py-2 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
                    {props.cardData.title}
                </h1>

                <a className="leading-relaxed text-left">
                    {props.cardData.readme}
                </a>


                <a className="leading-relaxed text-left text-link font-medium w-1/2" href="https://github.com/martin-marelius">
                    https://github.com/martin-marelius
                </a>

                <Languages data={props.cardData.languages} />
            </div>
            <div >

            </div>
        </div>
    )
}



export const Display = () => {
    const card = new ProjectsDisplay()
    return (
        <div className="grid grid-flow-row mt-12">
            <Card2 cardData={card} />
            <Card2 cardData={card} />
            <Card2 cardData={card} />
            <Card2 cardData={card} />

        </div>
        
        
    );
}






