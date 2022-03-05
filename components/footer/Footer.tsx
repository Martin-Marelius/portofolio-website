
/**
 * @returns Footer section with links to important information
 */

import { ContactInfo } from "../contact/ContactDisplay";

const Footer = () => {
    return (
        <div className="flex flex-col w-screen h-1/3 bottom-0 bg-inherit place-content-start">
            <div id="line" className="bg-primary2 h-px w-2/3 mt-6 place-self-center" />

            <div className="flex flex-row place-content-between lg:mx-96 mx-48 mt-4 text-darkText font-sans">
                    <ContactInfo/>
            </div>


        </div>
    );
}

export default Footer