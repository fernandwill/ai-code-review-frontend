'use client'

import Link from 'next/link'
import {ThemeToggle} from './theme-toggle'

export function Navbar() {
    return (
        <nav className='w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <Link href='/' 
                        className='text-lg font-bold hover:opacity-80 transiton'>
                            Re-Vue
                        </Link>

                        <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}