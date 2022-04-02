import Image from "next/image";
import Link from "next/link";
import { at, github, instagram, linkedin, phone, position, twitter, user } from '../../asset'


/**
 * Display for homepage contact form
 * 
 * @returns display of contact form and links
 */
 export const ContactDisplay = () => {
    return (
        <div className="flex flex-col min-h-1/2 md:flex-row gap-10 place-content-center place-items-center mt-10 bg-inherit">

            <ContactForm />

            <div id="line" className="w-px h-2/3 mt-10 bg-slate-300" />

            <div className="flex flex-col gap-4 bg-inherit self-center relative -mt-12 md:mt-0">
                <ContactInfo />
                <LogoDisplay />

            </div>

        </div>

    );

}

export const ContactForm = () => {
    return (
        <div className="flex flex-col gap-4">

                <div className="flex flex-start">
                    <h1 className="text-white text-xl">
                        Get in contact!
                    </h1>
                </div>

                <div className="flex gap-2">
                    <label id="name">
                        <input placeholder="Name" type="text" className="form-input px-4 py-3 rounded-md shadow-xl" />
                    </label>

                    <label id="email">
                        <input placeholder="Email" type="text" className="form-input px-4 py-3 rounded-md shadow-xl" />
                    </label>
                </div>
                <div>
                    <label id="subject" className="flex flex-grow">
                        <input placeholder="Subject" type="text" className="flex-grow form-input px-4 py-3 rounded-md shadow-xl" />
                    </label>
                </div>

                <div>
                    <label id="message" className="flex flex-grow ">
                        <textarea placeholder="Message..." className="flex-grow resize-y form-textarea m-auto px-4 py-3 rounded-md shadow-xl" />
                    </label>
                </div>
            </div>
        
    );
}

export const ContactInfo = () => {
    return (
        <div className="flex flex-col gap-1 bg-inherit">
            <div className="flex flex-row gap-4 items-center">
                <Image src={user} width={20} height={20} />
                <h2 className="text-white text-md font-medium">Martin Marelius Johnsen</h2>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <Image src={position} width={20} height={20} />
                <h2 className="text-white text-md font-medium">Norway</h2>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <Image src={at} width={20} height={20} />
                <h2 className="text-white text-md font-medium">johnsen.martin1@gmail.com</h2>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <Image src={phone} width={20} height={20} />
                <h2 className="text-white text-md font-medium">+47 48143389</h2>
            </div>

        </div>
    );
}

/**
 * 
 * @returns logos and links to social media
 */
 export const LogoDisplay = () => {
    return (
        <div className="flex flex-row gap-6 bg-inherit">
            <LogoLink image={linkedin} url="https://linkedin.com/" />
            <LogoLink image={github} url="https://github.com/" />
            <LogoLink image={twitter} url="https://twitter.com/" />
            <LogoLink image={instagram} url="https://instagram.com/" />
        </div>
    );
}

/**
 * @param image the logo of the linked website
 * @param url link to external website
 * @return 
 */
const LogoLink = (props) => {
    return (
        <button>
            <div className="transform hover:scale-110 transition-all">
                <Link href={props.url}>
                    <Image src={props.image} width={30} height={30} />
                </Link>

            </div>
        </button>
    );
}





