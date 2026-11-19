import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://zunfapsrbmnrmmbeoekd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_maiNffKJLqMqnfuiiqQlmQ_Sxcgpn4z";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);