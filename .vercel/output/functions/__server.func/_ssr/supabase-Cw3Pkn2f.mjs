import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
const supabaseUrl = "https://hbnhvggsqketbtfwnsxe.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibmh2Z2dzcWtldGJ0Znduc3hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NDc2MjQsImV4cCI6MjA5NjEyMzYyNH0.Yix27nv7cQ4OnX3A7Ix1xpie20XR33ThmKY5PVHhAnk";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export {
  supabase as s
};
