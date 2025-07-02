import React from 'react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    features: [
      'Basic project posting',
      'Browse freelancers',
      'Basic support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$19/mo',
    features: [
      'Priority project listing',
      'AI-powered matching',
      'Direct messaging',
      'Premium support',
    ],
    cta: 'Upgrade Now',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Custom solutions',
      'Dedicated account manager',
      'Advanced analytics',
      '24/7 support',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 bg-gradient-to-br from-white to-blue-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl shadow-lg p-8 border-2 ${plan.highlight ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'} flex flex-col items-center`}
          >
            <h3 className="text-xl font-bold mb-2 text-gray-900">{plan.name}</h3>
            <div className="text-3xl font-extrabold mb-4 text-blue-600">{plan.price}</div>
            <ul className="mb-6 space-y-2 text-gray-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="mr-2 text-blue-500">•</span> {feature}
                </li>
              ))}
            </ul>
            <button className={`mt-auto px-6 py-2 rounded-lg font-semibold text-white ${plan.highlight ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'} transition-all`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing; 