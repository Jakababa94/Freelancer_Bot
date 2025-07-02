import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Insert into Supabase
    const { error } = await supabase.from('contacts').insert([
      { name, email, message }
    ]);
    if (!error) {
      setSubmitted(true);
    } else {
      alert('There was an error submitting your message. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 border-l-4 border-green-400 rounded-xl text-left shadow">
        <h3 className="text-lg font-bold mb-2 text-green-700">Thank you!</h3>
        <p className="text-gray-700 mb-4">Your message has been sent. We'll get back to you soon.</p>
        <button onClick={onClose} className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700">Close</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow flex flex-col gap-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-700 text-xl font-bold">&times;</button>
      </div>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
        rows={4}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition">Send Message</button>
    </form>
  );
};

export default ContactForm; 