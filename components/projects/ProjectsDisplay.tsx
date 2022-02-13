import ProjectDisplay from "../../interfaces/ProjectDisplay/ProjectDisplayInterface";
import Image from 'next/image'
import mypic from '../../asset/beatdetector.jpg'

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

export const Display = () => {
    const card = new ProjectsDisplay()

    return (
        <div className="flex flex-col bg-white w-52 max-h-72 h-72 rounded-2xl">
            <div>
                <Image src={mypic}
                    layout="intrinsic"
                    className="rounded-t-2xl"
                />

            </div>

            <div className="mx-2 overflow-hidden">
                <div className="flex flex-row place-content-between ">
                    <h1 className=" font-bold">
                        {card.title}
                    </h1>
                    <a className="font-light text-xs text-gray-600 mt-1">
                        {card.creationDate}
                    </a>
                </div>
                <div className="flex flex-row place-content-center">
                    <div className="bg-gray-400 h-px w-48 rounded-full" />
                </div>
                <div className="mb-2">
                    {card.readme}
                </div>

            </div>


        </div>
    );
}






