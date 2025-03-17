import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faSpinner, faEnvelope, faUser, faTag } from '@fortawesome/free-solid-svg-icons';
import WaitlistHeader from '../components/WaitlistHeader';

const WaitlistPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: 'buyer',
    interests: [],
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, value]
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value)
      });
    }
  };

  const handleTermsChange = (e) => {
    setFormData({
      ...formData,
      agreeToTerms: e.target.checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.agreeToTerms) {
      toast.error('Please fill in all required fields and agree to the terms.');
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        user_type: formData.userType,
        interests: formData.interests.join(', '),
        to_name: 'KlosetStore Team',
        to_email: formData.email
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
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          userType: 'buyer',
          interests: [],
          agreeToTerms: false
        });
        setLoading(false);
      }, (error) => {
        console.log('FAILED...', error);
        toast.error('There was an error, please try again.');
        setLoading(false);
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Something went wrong. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ToastContainer position="top-right" autoClose={5000} />
      
      {/* Header Section */}
      <WaitlistHeader />
      
      {/* Form Section */}
      <div className="container mx-auto px-4 py-16" id="waitlist-form">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden transform transition-all">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#F27C28]">Join Our Waitlist</h2>
              <div className="w-16 h-1 bg-[#F27C28] mx-auto my-4 rounded-full"></div>
              <p className="text-gray-600 text-lg font-light">
                Be the first to know when we launch and get early access to our platform.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <label htmlFor="name" className="block text-[#333333] font-medium mb-1 text-base">
                    Full Name <span className="text-[#EB5757]">*</span>
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F59D5E] focus:border-[#F27C28]"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-[#333333] font-medium mb-1 text-base">
                    Email Address <span className="text-[#EB5757]">*</span>
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F59D5E] focus:border-[#F27C28]"
                    />
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-[#333333] font-medium mb-3 text-base">I am interested as:</h3>
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
                    <label className="flex items-center space-x-2 bg-white px-4 py-2 rounded-md border border-gray-200 cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="buyer"
                        checked={formData.userType === 'buyer'}
                        onChange={() => setFormData({...formData, userType: 'buyer'})}
                        className="focus:ring-[#F27C28] h-4 w-4 text-[#F27C28] border-gray-300"
                      />
                      <span>Fashion Buyer</span>
                    </label>
                    <label className="flex items-center space-x-2 bg-white px-4 py-2 rounded-md border border-gray-200 cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="vendor"
                        checked={formData.userType === 'vendor'}
                        onChange={() => setFormData({...formData, userType: 'vendor'})}
                        className="focus:ring-[#F27C28] h-4 w-4 text-[#F27C28] border-gray-300"
                      />
                      <span>Fashion Vendor</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faTag} className="text-gray-400 mr-2" />
                    <h3 className="text-[#333333] font-medium text-base">Categories of Interest:</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {['Women\'s Fashion', 'Men\'s Fashion', 'Footwear', 'Accessories', 'Kids Fashion', 'Vintage/Thrift'].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-md cursor-pointer">
                        <input
                          type="checkbox"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleInterestChange}
                          className="focus:ring-[#F27C28] h-4 w-4 text-[#F27C28] border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 bg-gray-50 p-3 rounded-md">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleTermsChange}
                    className="focus:ring-[#F27C28] h-4 w-4 text-[#F27C28] border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to receive updates about KlosetStore and understand I can unsubscribe anytime. <span className="text-[#EB5757]">*</span>
                  </label>
                </div>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-[#F27C28] hover:bg-[#F59D5E] text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <FontAwesomeIcon icon={faRocket} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mt-20 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#262627]">Why Join KlosetStore?</h2>
            <div className="w-24 h-1 bg-[#F27C28] mx-auto my-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              KlosetStore is designed to revolutionize how fashion entrepreneurs connect with customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#F27C28] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#F27C28] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#F27C28] text-white flex items-center justify-center mr-2 text-sm">B</span>
                For Fashion Buyers
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#F27C28] font-bold mr-2">✓</span>
                  Discover unique fashion items from various vendors
                </li>
                <li className="flex items-start">
                  <span className="text-[#F27C28] font-bold mr-2">✓</span>
                  Shop securely with Paystack payment integration
                </li>
                <li className="flex items-start">
                  <span className="text-[#F27C28] font-bold mr-2">✓</span>
                  Track your orders and purchase history
                </li>
                <li className="flex items-start">
                  <span className="text-[#F27C28] font-bold mr-2">✓</span>
                  Enjoy personalized fashion recommendations
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#F59D5E] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#F27C28] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#F59D5E] text-white flex items-center justify-center mr-2 text-sm">V</span>
                For Fashion Vendors
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#F27C28] font-bold mr-2">✓</span>
                  Set up your own branded fashion store
                </li>
                <li className="flex items-start">
                  <span className="text-[#F27C28] font-bold mr-2">✓</span>
                  Manage inventory and process orders seamlessly
                </li>
                <li className="flex items-start">
                  <span className="text-[#F27C28] font-bold mr-2">✓</span>
                  Access analytics to understand customer behavior
                </li>
                <li className="flex items-start">
                  <span className="text-[#F27C28] font-bold mr-2">✓</span>
                  Reach a wider audience of fashion enthusiasts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#F27C28] text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">KlosetStore</h2>
          <p className="mb-6 max-w-md mx-auto font-light text-lg">Empowering fashion entrepreneurs to showcase, sell, and manage their products with ease.</p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a href="mailto:support@klosetstore.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.601 2.326A7.854 7.854 0 0010 1.5c-1.97 0-3.741.8-5.01 2.1A7.867 7.867 0 001.5 10c0 1.97.8 3.741 2.1 5.01A7.854 7.854 0 0010 18.5c1.97 0 3.741-.8 5.01-2.1A7.867 7.867 0 0018.5 10c0-1.97-.8-3.741-2.1-5.01A7.824 7.824 0 0013.6 2.326zm1.42 7.855l-3.333 3.333a1 1 0 01-1.414 0L7.424 10.76a1 1 0 011.414-1.414l2.118 2.118 2.65-2.651a1 1 0 111.414 1.414z" clipRule="evenodd" fillRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
          
          <p className="text-sm text-white/80">&copy; {new Date().getFullYear()} KlosetStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WaitlistPage;