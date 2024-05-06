import React from 'react'

export default function NavBar() {
  return (
    <div className=' h-[15dvh]  flex align-middle justify-between md:px-10 sm:px-8 px-5 items-center '>
       
            <ul>
                SG
            </ul>

            <ul className='flex align-middle justify-between gap-4'>
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Blogs</li>
            </ul>
        
    </div>
  )
}
