import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'FreelancerBot helped me find amazing clients and grow my freelance business faster than ever!',
  },
  {
    name: 'Michael Smith',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'The AI matching is spot on. I found the perfect developer for my project in minutes.',
  },
  {
    name: 'Priya Patel',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'The platform is easy to use and the support team is fantastic. Highly recommended!',
  },
  {
    name: 'David Lee',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: 'I love the secure payment system. It gives me peace of mind as a freelancer.',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">What Our Users Say</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100">
            <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100" />
            <p className="text-gray-700 italic mb-3">"{t.quote}"</p>
            <div className="font-semibold text-blue-700">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 