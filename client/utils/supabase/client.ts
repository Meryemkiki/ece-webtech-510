import { createBrowserClient } from "@supabase/ssr";

console.log("Client - Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("Client - Supabase Anon Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
