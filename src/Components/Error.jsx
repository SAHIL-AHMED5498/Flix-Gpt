import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
    
  return (
    <div className='min-h-screen bg-gradient-to-br from-black/90 via-purple-900/20 to-black/90 flex items-center justify-center p-4'>
      <div className='backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-12 text-center max-w-md animate-[slideInRight_0.6s_ease-out]'>
        
        {/* Decorative gradient */}
        <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl pointer-events-none'></div>
        
        <div className='relative z-10'>
          <div className='text-8xl font-black mb-6 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg'>
            {err.status}
          </div>
          
          <h1 className='text-3xl font-bold text-white mb-4'>
            {err.statusText}
          </h1>
          
          <p className='text-gray-300 mb-8'>
            Something went wrong. Please try again or go back to the home page.
          </p>
          
          <a 
            href="/" 
            className='inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-purple-500/50 active:scale-95'
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default Error
