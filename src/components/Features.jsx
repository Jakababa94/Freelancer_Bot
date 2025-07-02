import React from 'react';
import { Zap, Users, Briefcase } from 'lucide-react';
import { useFeaturesContext } from '../contexts/FeaturesContext';

const features = [
  {
    key: 'how',
    title: 'How it Works',
    icon: <Zap className="h-8 w-8 text-orange-500 mb-2" />,
    description: 'See how FreelancerBot connects clients and freelancers using AI-powered matching and secure payments.',
    bg: 'bg-orange-50',
    border: 'border-orange-300',
  },
  {
    key: 'talent',
    title: 'Find Talent',
    icon: <Users className="h-8 w-8 text-blue-500 mb-2" />,
    description: 'Browse and hire top freelancers for your projects, with instant matching and easy management.',
    bg: 'bg-blue-50',
    border: 'border-blue-300',
  },
  {
    key: 'work',
    title: 'Find Work',
    icon: <Briefcase className="h-8 w-8 text-teal-500 mb-2" />,
    description: 'Create a profile, get matched with projects, and grow your freelance career with secure payments.',
    bg: 'bg-teal-50',
    border: 'border-teal-300',
  },
];

const Features = () => {
  const { setActiveFeature } = useFeaturesContext();

  const handleClick = (key) => {
    setActiveFeature(key);
    document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="features" className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <button
            key={feature.key}
            onClick={() => handleClick(feature.key)}
            className={`w-full text-left rounded-xl shadow-md border-2 ${feature.bg} ${feature.border} p-8 hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${feature.key === 'how' ? 'orange' : feature.key === 'talent' ? 'blue' : 'teal'}-400`}
            style={{ minHeight: 220 }}
          >
            <div className="flex flex-col items-start">
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700 mb-2">{feature.description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Features; 