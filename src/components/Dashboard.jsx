import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'
import { PlusCircle, Search, Filter, Star, Clock, DollarSign, Users, TrendingUp } from 'lucide-react'

const Dashboard = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadProfile()
      loadDashboardData()
    }
  }, [user])

  const loadProfile = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user?.id)
      .single()
    
    setProfile(data)
  }

  const loadDashboardData = async () => {
    if (!profile) return

    if (profile.user_type === 'client') {
      // Load client's projects
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('client_id', user?.id)
        .order('created_at', { ascending: false })
      
      setProjects(data || [])
    } else {
      // Load freelancer's proposals and available projects
      const { data: proposalsData } = await supabase
        .from('proposals')
        .select('*, projects(*)')
        .eq('freelancer_id', user?.id)
        .order('created_at', { ascending: false })
      
      const { data: projectsData } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'open')
        .order('created_at', { ascending: false })
        .limit(10)
      
      setProposals(proposalsData || [])
      setProjects(projectsData || [])
    }
    
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  )

  const ProjectCard = ({ project, showProposal = false }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{project.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          project.status === 'open' ? 'bg-green-100 text-green-800' :
          project.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
          project.status === 'completed' ? 'bg-purple-100 text-purple-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {project.status.replace('_', ' ')}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-green-600">
          <DollarSign className="h-4 w-4 mr-1" />
          <span className="font-semibold">${project.budget}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">{new Date(project.deadline).toLocaleDateString()}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills_required?.slice(0, 3).map((skill) => (
          <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Posted {new Date(project.created_at).toLocaleDateString()}
        </span>
        {showProposal && profile?.user_type === 'freelancer' && (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Submit Proposal
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {profile?.full_name}!
          </h1>
          <p className="text-gray-600 mt-2">
            {profile?.user_type === 'client' 
              ? 'Manage your projects and find the perfect freelancers'
              : 'Discover new opportunities and manage your proposals'
            }
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {profile?.user_type === 'client' ? (
            <>
              <StatCard 
                title="Active Projects" 
                value={projects.filter(p => p.status === 'in_progress').length}
                icon={Clock}
                color="bg-blue-100 text-blue-600"
              />
              <StatCard 
                title="Total Projects" 
                value={projects.length}
                icon={Users}
                color="bg-green-100 text-green-600"
              />
              <StatCard 
                title="Completed" 
                value={projects.filter(p => p.status === 'completed').length}
                icon={Star}
                color="bg-purple-100 text-purple-600"
              />
              <StatCard 
                title="Total Spent" 
                value={`$${projects.reduce((sum, p) => sum + (p.status === 'completed' ? p.budget : 0), 0)}`}
                icon={DollarSign}
                color="bg-orange-100 text-orange-600"
              />
            </>
          ) : (
            <>
              <StatCard 
                title="Active Proposals" 
                value={proposals.filter(p => p.status === 'pending').length}
                icon={Clock}
                color="bg-blue-100 text-blue-600"
              />
              <StatCard 
                title="Success Rate" 
                value={`${Math.round((proposals.filter(p => p.status === 'accepted').length / Math.max(proposals.length, 1)) * 100)}%`}
                icon={TrendingUp}
                color="bg-green-100 text-green-600"
              />
              <StatCard 
                title="Total Earnings" 
                value={`$${proposals.filter(p => p.status === 'accepted').reduce((sum, p) => sum + p.bid_amount, 0)}`}
                icon={DollarSign}
                color="bg-purple-100 text-purple-600"
              />
              <StatCard 
                title="Rating" 
                value={profile?.rating || 'New'}
                icon={Star}
                color="bg-orange-100 text-orange-600"
              />
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {profile?.user_type === 'client' ? 'Your Projects' : 'Available Projects'}
              </h2>
              {profile?.user_type === 'client' && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Post Project
                </button>
              )}
            </div>

            <div className="space-y-6">
              {projects.slice(0, 5).map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  showProposal={profile?.user_type === 'freelancer'}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {profile?.user_type === 'client' ? 'Recent Activity' : 'Your Proposals'}
            </h2>
            
            <div className="space-y-4">
              {profile?.user_type === 'freelancer' ? (
                proposals.slice(0, 5).map((proposal) => (
                  <div key={proposal.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2">{proposal.projects?.title}</h4>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-green-600 font-medium">${proposal.bid_amount}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        proposal.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        proposal.status === 'accepted' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {proposal.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <p className="text-gray-600 text-center">Activity feed will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard