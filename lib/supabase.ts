
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lnmcyydmxezqqwuwjitb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxubWN5eWRteGV6cXF3dXdqaXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MjEwNTksImV4cCI6MjA2NTI5NzA1OX0.t5fbhmZWzTnZBwyk56UmvsiBZeFlOsxWJjXszNCAgfk";

export const supabase = createClient(supabaseUrl, supabaseKey);
