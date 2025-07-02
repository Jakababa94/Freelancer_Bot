import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://snudzrgloumuissiifbd.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNudWR6cmdsb3VtdWlzc2lpZmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjcyODEsImV4cCI6MjA2NzA0MzI4MX0.1vZ4xVb2FaoXI78Hdkf2oYNJM8xRtbPjAprxtsxCjK4'

export const supabase = createClient(supabaseUrl, supabaseKey)

/*export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          user_type: 'freelancer' | 'client'
          full_name: string
          email: string
          avatar_url?: string
          bio?: string
          skills?: string[]
          hourly_rate?: number
          rating?: number
          total_projects?: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      projects: {
        Row: {
          id: string
          client_id: string
          title: string
          description: string
          budget: number
          deadline: string
          status: 'open' | 'in_progress' | 'completed' | 'cancelled'
          skills_required: string[]
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['projects']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['projects']['Insert']>
      }
      proposals: {
        Row: {
          id: string
          project_id: string
          freelancer_id: string
          bid_amount: number
          proposed_timeline: string
          cover_letter: string
          status: 'pending' | 'accepted' | 'rejected'
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['proposals']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['proposals']['Insert']>
      }
    }
  }
}*/
