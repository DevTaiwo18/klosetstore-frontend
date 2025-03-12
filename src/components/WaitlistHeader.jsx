import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faStore, faStar } from '@fortawesome/free-solid-svg-icons';

const WaitlistHeader = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F27C28] to-[#F59D5E] z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-black/10 z-20"></div>
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 text-center z-30">
        <div className="animate-pulse inline-flex items-center px-4 py-2 mb-8 rounded-full bg-white/20 backdrop-blur-sm">
          <span className="text-white font-semibold flex items-center">
            <FontAwesomeIcon icon={faStar} className="text-[#FCDEC9] mr-2" />
            Coming Soon
            <FontAwesomeIcon icon={faStar} className="text-[#FCDEC9] ml-2" />
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Kloset<span className="text-[#FCDEC9]">Store</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-2 font-light">The Ultimate Fashion Marketplace</p>
        
        <div className="w-24 h-1 bg-white/40 rounded-full mb-8"></div>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
          Empowering fashion entrepreneurs to showcase, sell, and manage their products with ease.
          Connect with buyers and grow your fashion business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button 
            onClick={scrollToForm}
            className="bg-white text-[#F27C28] hover:bg-[#FCDEC9] hover:text-[#F27C28] transition-all text-lg px-8 py-3 rounded-md font-medium"
          >
            Join Waitlist
            <FontAwesomeIcon icon={faRocket} className="ml-2" />
          </button>
          
          <button 
            onClick={scrollToForm}
            className="bg-transparent border border-white text-white hover:bg-white/10 text-lg px-8 py-3 rounded-md font-medium"
          >
            For Vendors
            <FontAwesomeIcon icon={faStore} className="ml-2" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform transition-all hover:scale-105 hover:bg-white/15">
            <div className="mb-3 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto">
              <FontAwesomeIcon icon={faStore} className="text-white text-xl" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Showcase Products</h3>
            <p className="text-white/80 text-sm">Create your store and display your fashion items to a wide audience</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform transition-all hover:scale-105 hover:bg-white/15">
            <div className="mb-3 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto">
              <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Secure Payments</h3>
            <p className="text-white/80 text-sm">Integrated with Paystack for seamless and secure transactions</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transform transition-all hover:scale-105 hover:bg-white/15">
            <div className="mb-3 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto">
              <svg className="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Order Management</h3>
            <p className="text-white/80 text-sm">Easily track, manage and fulfill customer orders effortlessly</p>
          </div>
        </div>
        
        <div className="absolute bottom-5 left-0 right-0 text-center">
          <span className="inline-block animate-bounce rounded-full p-1 bg-white/10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WaitlistHeader;