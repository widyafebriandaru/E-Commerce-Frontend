import  '../styles/index.css';
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <div className='flex justify-center text-xs sm:text-base items-center px-6 max-md:flex-col max-md:text-center pb -7'>
      <div className='flex gap-5'>
      <div className='py-4 justify-center ml-24 max-md:ml-0 max-md:text-center'>
        <a className='block hover:text-gray-700' href="#">Contact Us</a>
        <a className='block hover:text-gray-700' href="#">How To Shop</a>
        <a className='block hover:text-gray-700' href="#">FAQ</a>
        <a className='block hover:text-gray-700' href="#">Return Policy</a>
        <a className='block hover:text-gray-700' href="#">Size Guide</a>
      </div>
      <div className='py-4 md:flex-row ml-24 max-md:ml-0 max-md:text-center'>
        <a className='block hover:text-gray-700' href="#">Terms & Condition</a>
        <a className='block hover:text-gray-700' href="#">Terms of Service</a>
        <a className='block hover:text-gray-700' href="#">Refund Policy</a>
        <a className='block hover:text-gray-700' href="#">Order Confirmation</a>
      </div>
      </div>
      <div className='flex-auto ml-44 max-md:ml-0 py-4'>
        <p><a className='fab fa-facebook hover:text-gray-700 text-xs' href="#"> Facebook</a></p>
        <p><a className='fab fa-twitter hover:text-gray-700 text-xs' href="#"> Twitter</a></p>
        <p><a className='fab fa-instagram hover:text-gray-700 text-xs' href="#">  Instagram</a></p>
        <p><a className='fab fa-youtube hover:text-gray-700 text-xs' href="#">  Youtube</a></p>
      </div>
      <div className='py-4 max-md:mr-0 mr-4'>
        <p>&copy;2023, <a className="hover:text-gray-700" href="#">Screamous / Daily Wear</a></p>
        <div className=''>
        <img src="assets/Homepage/Screamous.jpg" alt="logo screamous" className='w-20 h-20 max-md:ml-12 ml-36 mt-2'/>
          <img src="assets/Homepage/channel pembayaran.PNG" alt="channel pembayaran" className='max-md:-ml-5'/>
          </div>
          </div>
        </div>
      )
      }

      export default Footer;
