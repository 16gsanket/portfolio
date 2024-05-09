import React from 'react'
import Button from '../Ui/Button'

export default function HeroSection() {
  return (
    <div className=' h-[80dvh]  flex align-top items-center justify-between px-4 py-24'>
        <div className='flex flex-col gap-6'>
            <h1 className='text-3xl font-semibold leading-10'>Sanket <br /> Gaikwad</h1>
            <div className='h-[0.5dvh] bg-orange_text w-20'></div>
            <div className='text-sm'>
                <div> Linkedin  | Twitter</div>
                <div> Instagram | FaceBook</div>
            </div>
            <Button />
        </div>

        <div className=''>
            <img src="/sanket.png" alt="" className='blur-sm hover:blur-none'/>

        </div>

        <div className='w-4/12 '>
            <h6 className='text-orange_text text-md font-semibold'>INTRODUCTION</h6>
            <h1 className='text-3xl tracking-wide  leading-10 font-semibold'>Content creator ,<br></br> Freelance writer ,<br></br> Developer</h1>
            <p className='text-md'>Welcome to my portfolio! I'm a content creator, freelance writer, and developer with a passion for technology and design.<span className='hidden md:inline'> I'm committed to creating engaging and intuitive digital experiences</span>.</p>

        </div>
        
        
        
     </div>
  )
}
