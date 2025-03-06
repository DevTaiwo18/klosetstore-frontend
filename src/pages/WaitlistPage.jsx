 import Navbar from '../components/Navbar';

const WaitlistPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Join the KlosetStore Waitlist</h1>
          <p className="mb-6">Be the first to know when we launch and get exclusive early access to our platform. Join the waitlist now!</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Join the Waitlist
            </button>
          </form>
          <p className="mt-4 text-gray-600">Already have an account? <a href="/login" className="text-blue-500">Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;