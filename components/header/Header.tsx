import Image from 'next/image';
import homeImage from '../../asset/images/homescreen.jpg'

const Header = () => {
 return (
    <div className="">
        <Image src={homeImage} layout="responsive"/>
              
    </div>
 );
}

export default Header