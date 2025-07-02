import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Brain, Menu, X } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const { user, signOut } = useAuth()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navigation = user
    ? [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Projects', href: '/projects' },
        { name: 'Messages', href: '/messages' },
        { name: 'Profile', href: '/profile' },
      ]
    : [
        { name: 'How it Works', href: '/how-it-works' },
        { name: 'Find Talent', href: '/find-talent' },
        { name: 'Find Work', href: '/find-work' },
      ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">FreelancerBot</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={signOut}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <button
                onClick={() => {
                  signOut()
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <div className="pt-2 space-y-1">
                <Link
                  to="/login"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar