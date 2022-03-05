import Image from "next/image"
import { ContactDisplay, Footer, Navbar } from "../components"
import bgcontact from '../asset/bgcontact.jpg'


const ContactPage = () => {
    return (
        <div className="text-center w-screen h-screen bg-inherit">
            <Navbar />

            <ContactDisplay />


        </div>

    )
}

export default ContactPage