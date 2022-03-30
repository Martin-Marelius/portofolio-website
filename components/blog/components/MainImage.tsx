import Image from "next/image";



const MainImage = (props) => {
    const img = require('../../../asset/images/' + props.image);
    
    return (
        <div className="mt-6 mb-2 md:pr-20">
            <Image src={img} layout="intrinsic"/>
        </div>
    );
}

export default MainImage