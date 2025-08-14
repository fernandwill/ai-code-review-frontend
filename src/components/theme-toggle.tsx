'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'


export function ThemeToggle() {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    const buttonClasses = 'p-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition'

    return (
        <div className='flex gap-2'>
            <button
                onClick={() => setTheme('light')}
                className={buttonClasses}
                title='Light Mode'
            >
            <Sun className='h-5 w-5' />
            </button>

            <button
                onClick={() => setTheme('dark')}
                className={buttonClasses}
                title='Dark Mode'
            >
            <Moon className='h-5 w-5' />
            </button>

            <button
                onClick={() => setTheme('system')}
                className={buttonClasses}
                title='System'
            >
            <Laptop className='h-5 w-5' />
            </button>
        </div>
    )
}