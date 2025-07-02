import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react'

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect with Top <span className="text-blue-600">Freelancers</span>
            <br />
            <span className="text-teal-600">Instantly</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            FreelancerBot uses AI to match clients with the perfect freelancers for their projects. 
            Streamline your workflow, manage projects efficiently, and grow your business with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/signup?type=client"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Hire Freelancers
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/signup?type=freelancer"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Find Work
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Matching</h3>
              <p className="text-gray-600">Our smart algorithm matches you with the perfect freelancers based on skills, experience, and project requirements.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Protected transactions with escrow services ensure safe payments for both clients and freelancers.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Talent Pool</h3>
              <p className="text-gray-600">Access skilled professionals from around the world, available 24/7 to work on your projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero