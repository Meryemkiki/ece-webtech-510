import Link from 'next/link'
import React from 'react'
import LoginForm from './LoginForm';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between'>
        <div className='group'>
            <Link href="/" className='text-3xl font-bold'>ECE Blog</Link>

            <div className='h-1 w-0 group-hover:w-full transition-all
            bg-yellow-500'>

            </div>
        
        </div>
        <LoginForm/>
    </nav>
  )
}
