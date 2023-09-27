import React from 'react'

function Jumbutron({children}) {
  return (
    <div className='bg-gray-900 flex items-center py-10  dark:bg-dark-primary '>
        <div className='max-w-md mx-auto w-full'>
          {/* <DarkModeToggle/> */}
            <h1 className='text-white text-center text-2xl font-bold mb-5'>Find Images</h1>
            {children}
        </div>
    </div>
  )
}

export default Jumbutron