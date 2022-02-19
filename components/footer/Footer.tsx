
/**
 * @returns Footer section with links to important information
 */

const Footer = () => {
    return (
        <div className="flex flex-col w-screen bottom-12 inset-x-0">
            <div id="line" className="bg-primary2 h-px w-2/3 mt-6 place-self-center" />

            <div className="flex flex-row place-content-between lg:mx-96 mx-48 mt-4 text-darkText font-sans">
                <div className="flex-col">

                    <p>
                        Twitter1
                    </p>
                    <p>
                        Twitter2
                    </p>

                </div>

                <div className="flex-col">
                    <p>
                        Twitter
                    </p>
                    <p>
                        Twitter
                    </p>

                </div>

            </div>


        </div>
    );
}

export default Footer