
/**
 * @returns Footer section with links to important information
 */

import { ContactInfo } from "../contact/ContactDisplay";

const Footer = () => {
    return (
        <div className="flex flex-col bg-inherit shadow-inner shadow-black ">
            
            <div id="line" className="bg-primary2 h-px min-w-screen" />

            <div className="flex flex-row place-content-between place-self-center w-3/4 mt-10 mb-20 text-darkText font-sans">
                    <div className="font-bold">Home</div>
                    <div className="font-bold">Blog</div>
                    <div className="font-bold">Portofolio</div>
                    
            </div>
            <div className="bg-slate-500 p-1 w-min-screen">
                <h3 className="text-sm pl-72 text-slate-300">2022 @Martin Marelius</h3>
            </div>

        </div>
    );
}

export default Footer