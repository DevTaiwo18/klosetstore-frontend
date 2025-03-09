 
const Footer = () => {
  return (
    <footer className="p-4 text-center" style={{ backgroundColor: '#F27C28', fontFamily: 'Poppins, sans-serif', color: '#FFFFFF' }}>
      <div className="container mx-auto">
        <p>&copy; 2025 KlosetStore. All rights reserved.</p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-white hover:text-[#FCDEC9] mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white hover:text-[#FCDEC9] mx-2">Terms of Service</a>
          <a href="/contact" className="text-white hover:text-[#FCDEC9] mx-2">Contact Us</a>
        </div>
        <div className="mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FCDEC9] mx-2">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FCDEC9] mx-2">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FCDEC9] mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;