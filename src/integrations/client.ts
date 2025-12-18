import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ptnfzunarioxzuzspnpm.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0bmZ6dW5hcmlveHp1enNwbnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMDg1MTQsImV4cCI6MjA3MTg4NDUxNH0.QtFLcchyKDXMkE2TFBBvWTlBsvS3GjHPw0GOI-E4_Z8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase