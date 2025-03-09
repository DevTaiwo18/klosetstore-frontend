import { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WaitlistPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error('Please fill in all fields.');
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      to_email: formData.email // Send success email to the user who submitted their email
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Thank you for joining the waitlist! A confirmation email has been sent to your email address.');
      }, (error) => {
        console.log('FAILED...', error);
        toast.error('There was an error, please try again.');
      });

    setFormData({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center bg-gray-100 py-10 px-4 md:px-0">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#F27C28' }}>KlosetStore is Launching Soon!</h1>
          <p className="mb-6 text-center text-gray-700">Be among the first to experience the ultimate fashion marketplace. Submit your name and email to join our exclusive waitlist and secure early access. Don&apos;t miss out on discovering unique styles and trends before anyone else!</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': '#F27C28' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
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
      <ToastContainer />
    </div>
  );
};

export default WaitlistPage;