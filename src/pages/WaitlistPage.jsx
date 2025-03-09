 import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WaitlistPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100 py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-4 text-center text-[#F27C28]">Join the KlosetStore Waitlist</h1>
          <p className="mb-6 text-center text-gray-700">Be the first to know when we launch and get exclusive early access to our platform. Discover unique fashion, one find at a time!</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F27C28]"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F27C28]"
            />
            <button
              type="submit"
              className="w-full bg-[#F27C28] text-white p-3 rounded hover:bg-[#F59D5E] transition duration-300"
            >
              Get Early Access
            </button>
          </form>
          <p className="mt-4 text-gray-600 text-center">Already have an account? <a href="/login" className="text-[#F27C28] hover:underline">Log in</a></p>
        </div>
        <div className="text-center text-gray-800 mt-10 max-w-2xl">
          <h2 className="text-3xl font-bold">Why Join KlosetStore?</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>✔️ Exclusive early access to the latest fashion trends</li>
            <li>✔️ Unique and curated collections from top sellers</li>
            <li>✔️ Seamless shopping experience with secure payments</li>
            <li>✔️ Personalized recommendations just for you</li>
          </ul>
        </div>
        <div className="text-center text-gray-800 mt-10 max-w-2xl">
          <h2 className="text-3xl font-bold">About KlosetStore</h2>
          <p className="mt-4 text-lg">KlosetStore is an online fashion marketplace that empowers sellers to create stores, list products, and sell directly to buyers. Join us to discover unique fashion and manage your store effortlessly.</p>
        </div>
        <div className="text-center text-gray-800 mt-10 max-w-2xl">
          <h2 className="text-3xl font-bold">Our Tagline</h2>
          <p className="mt-4 text-lg">Find Your Style, Share Your Passion</p>
        </div>
        <div className="text-center text-gray-800 mt-10 max-w-2xl">
          <h2 className="text-3xl font-bold">Catchy SEO Words</h2>
          <p className="mt-4 text-lg">Fashion, Marketplace, Unique, Trendy, Stylish, Secure Payments, Personalized Recommendations, Curated Collections, Seamless Shopping</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WaitlistPage;