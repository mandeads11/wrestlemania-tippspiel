import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bgpuuaprzsxgwvhwiptw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJncHV1YXByenN4Z3d2aHdpcHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMTMwMTksImV4cCI6MjA2MDU4OTAxOX0.LZ4JAX2bg8crKiV8XmqUsW93i_6l0-symIFFc71ZuBg'
export const supabase = createClient(supabaseUrl, supabaseKey)