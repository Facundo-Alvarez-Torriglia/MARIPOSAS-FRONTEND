import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const RedesSociales = () => {
  return (
   
    <div className='flex justify-end p-2 bg-[--color4] gap-4 text-white'>

      <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={15} />
      </Link>
      <Link to="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={15} />
      </Link>
      <Link to="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={15} />
      </Link>
      <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={15} />
      </Link>
    </div>
 
    )
}
