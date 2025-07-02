import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://snudzrgloumuissiifbd.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNudWR6cmdsb3VtdWlzc2lpZmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjcyODEsImV4cCI6MjA2NzA0MzI4MX0.1vZ4xVb2FaoXI78Hdkf2oYNJM8xRtbPjAprxtsxCjK4'

export const supabase = createClient(supabaseUrl, supabaseKey)

