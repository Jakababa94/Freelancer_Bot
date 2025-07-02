import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Mail, Lock, User, DollarSign } from 'lucide-react'

// interface AuthFormProps {
//   mode: 'login' | 'signup'
// }

const AuthForm = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [userType, setUserType] = useState<'freelancer' | 'client'>('freelancer')
  const [hourlyRate, setHourlyRate] = useState('')
  const [skills, setSkills] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const { signIn, signUp } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  React.useEffect(() => {
    const type = searchParams.get('type')
    if (type === 'client' || type === 'freelancer') {
      setUserType(type)
    }
  }, [searchParams])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (mode === 'login') {
        const { error } = await signIn(email, password)
        if (error) throw error
      } else {
        const userData = {
          user_type: userType,
          full_name: fullName,
          hourly_rate: userType === 'freelancer' ? parseFloat(hourlyRate) || null : null,
          skills: userType === 'freelancer' ? skills.split(',').map(s => s.trim()) : null,
        }
        const { error } = await signUp(email, password, userData)
        if (error) throw error
      }
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {mode === 'login' ? 'Welcome Back' : 'Get Started'}
            </h2>
            <p className="text-gray-600 mt-2">
              {mode === 'login' 
                ? 'Sign in to your FreelancerBot account' 
                : 'Create your FreelancerBot account'
              }
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I want to:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setUserType('freelancer')}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        userType === 'freelancer'
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <User className="h-5 w-5 mx-auto mb-1" />
                      <div className="text-sm font-medium">Find Work</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('client')}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        userType === 'client'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <DollarSign className="h-5 w-5 mx-auto mb-1" />
                      <div className="text-sm font-medium">Hire Talent</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {mode === 'signup' && userType === 'freelancer' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hourly Rate (USD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="25"
                      min="1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skills (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="React, Node.js, Python, Design..."
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <a
                href={mode === 'login' ? '/signup' : '/login'}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm