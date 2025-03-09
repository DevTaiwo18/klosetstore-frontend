 import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WaitlistPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100 py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#F27C28' }}>Be the First to Experience KlosetStore</h1>
          <p className="mb-6 text-center text-gray-700">Join our waitlist and get exclusive early access to the ultimate fashion marketplace. Discover unique styles and trends before anyone else!</p>
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
        <div className="text-center text-gray-800 mt-10 max-w-2xl">
          <h2 className="text-3xl font-bold">Why Join KlosetStore?</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>✔️ **Exclusive Early Access**: Be the first to shop the latest trends.</li>
            <li>✔️ **Curated Collections**: Discover unique pieces from top sellers.</li>
            <li>✔️ **Seamless Shopping**: Enjoy a smooth and secure shopping experience.</li>
            <li>✔️ **Personalized Recommendations**: Get fashion picks tailored just for you.</li>
          </ul>
        </div>
        <div className="text-center text-gray-800 mt-10 max-w-2xl">
          <h2 className="text-3xl font-bold">About KlosetStore</h2>
          <p className="mt-4 text-lg">KlosetStore is your go-to online fashion marketplace. We empower sellers to create their own stores, list products, and sell directly to buyers. Join us to explore unique fashion and effortlessly manage your store.</p>
        </div>
         
        
      </div>
      <Footer />
    </div>
  );
};

export default WaitlistPage;