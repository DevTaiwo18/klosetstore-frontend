import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WaitlistPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100 py-10 px-4 md:px-0">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#F27C28' }}>KlosetStore is Launching Soon!</h1>
          <p className="mb-6 text-center text-gray-700">Be among the first to experience the ultimate fashion marketplace. Submit your name and email to join our exclusive waitlist and secure early access. Don&#39;t miss out on discovering unique styles and trends before anyone else!</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#F27C28' }}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#F27C28' }}
            />
            <button
              type="submit"
              className="w-full text-white p-3 rounded hover:transition duration-300"
              style={{ backgroundColor: '#F27C28', hover: { backgroundColor: '#F59D5E' } }}
            >
              Get Early Access
            </button>
          </form>
          <p className="mt-4 text-gray-600 text-center">Already have an account? <a href="/login" className="hover:underline" style={{ color: '#F27C28' }}>Log in</a></p>
        </div>
        <div className="text-center text-gray-800 mt-10 max-w-2xl px-4 md:px-0">
          <h2 className="text-3xl font-bold">Why Join KlosetStore?</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li><strong>Exclusive Early Access</strong>: Be the first to shop the latest trends and sell your products.</li>
            <li><strong>Curated Collections</strong>: Discover unique pieces from top sellers and showcase your own collections.</li>
            <li><strong>Seamless Shopping Experience</strong>: Enjoy a smooth and secure shopping experience with easy-to-use tools for sellers and buyers.</li>
            <li><strong>Personalized Recommendations</strong>: Get fashion picks tailored just for you and your customers.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WaitlistPage;