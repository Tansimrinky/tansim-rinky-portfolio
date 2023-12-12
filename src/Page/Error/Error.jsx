import { Link } from 'react-router-dom';
import myGif from '../../assets/funny-404-error-page-design.gif';

const Error = () => {
    return (
        <div>
            <div className='flex justify-center '>
            <img src={myGif} alt="404 not found" />
           
        </div>
       <div className='flex justify-center'>
       <Link className=' btn bg-[#C3073F] p-6  text-white font-bold items-center' to="/">Home</Link>
       </div>
        </div>
    );
};

export default Error;