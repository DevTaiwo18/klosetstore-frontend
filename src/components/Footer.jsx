import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="p-4 text-center bg-[#F27C28] text-white font-sans">
      <div className="container mx-auto">
        <p className="text-lg">&copy; 2025 KlosetStore. All rights reserved.</p>
        <div className="mt-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <a href="/privacy-policy" className="hover:text-[#FCDEC9]">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-[#FCDEC9]">Terms of Service</a>
          <a href="/contact" className="hover:text-[#FCDEC9]">Contact Us</a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FCDEC9]">
            <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FCDEC9]">
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FCDEC9]">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;