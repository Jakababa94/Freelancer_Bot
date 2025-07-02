import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

let openContactFormExternal = null;

const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  openContactFormExternal = () => setShowContactForm(true);

  return (
    <footer className="bg-[#181e29] text-[#bfc8d6] pt-6 pb-2 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
        {/* Brand/Description/Social */}
        <div>
          <div className="flex items-center mb-3">
            <div className="bg-gradient-to-br from-[#3ee9ff] to-[#3a8bfd] rounded-lg p-2 mr-2">
              {/* Placeholder for logo icon */}
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M16 8v16M8 16h16" stroke="#3a8bfd" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <span className="text-2xl font-bold text-white">Freelancers Bot</span>
          </div>
          <p className="mb-4 text-[#bfc8d6]">Connecting clients and freelancers worldwide with AI-powered matching and secure payments.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-white"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.93-.856 2.011-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg></a>
          </div>
        </div>
        {/* Product */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Product</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
            <li><a href="#" className="hover:text-white">API Documentation</a></li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Getting Started</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Support</a></li>
            <li><a href="#" className="hover:text-white">System Status</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div id="contact">
          {showContactForm ? (
            <ContactForm onClose={() => setShowContactForm(false)} />
          ) : (
            <>
              <h3 className="text-lg font-bold text-white mb-3">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><Mail className="w-5 h-5" /><a href="mailto:support@freelancerbot.com" className="hover:text-white">support@freelancerbot.com</a></li>
                <li className="flex items-center gap-2"><Phone className="w-5 h-5" /><a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></li>
                <li className="flex items-center gap-2"><MapPin className="w-5 h-5" /><span>Nairobi, Kenya</span></li>
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="border-t border-[#232b3b] pt-6 mt-6 text-center text-[#7c8798] text-sm">
        &copy; {new Date().getFullYear()} Freelancers Bot. All rights reserved.
        <span className="mx-2">·</span>
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <span className="mx-2">·</span>
        <a href="#" className="hover:text-white">Terms of Service</a>
        <span className="mx-2">·</span>
        <a href="#" className="hover:text-white">Cookie Policy</a>
      </div>
    </footer>
  );
};

// Allow Navbar to open the contact form
export const openContactForm = () => openContactFormExternal && openContactFormExternal();

export default Footer; 