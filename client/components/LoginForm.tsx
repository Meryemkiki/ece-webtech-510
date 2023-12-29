"use client";

import React from 'react'
import { Button } from './ui/button'
import { FaGithub } from 'react-icons/fa'
import { usePathname } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr'

export default function LoginForm() {

    const pathname = usePathname()

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const handleLogin = () => {
        supabase.auth.signInWithOAuth({
            provider:"github",
            options:{
                redirectTo: location.origin + "/auth/callback?next=" + pathname,
            },
        });
    };
  return (
    <div>
        <Button 
        variant="outline" 
        className='flex items-center gap-2'
        onClick={handleLogin}>
            <FaGithub/>
            Login
        </Button> 
        
    </div>
  )
}
