import React from 'react'

export default function NavBar() {
  return (
    <div className=' h-[15dvh]  flex align-middle justify-between md:px-10 sm:px-8 px-5 items-center font-semibold'>
       
            <ul>
                SG
            </ul>

            <ul className='flex align-middle justify-between gap-4 w-6/12'>
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Blogs</li>
                <ul className='flex align-middle justify-between'>
                    <li>Li</li>
                    <li>Ig</li>
                </ul>
            </ul>
        
    </div>
  )
}
