import React from 'react'
import Button from '../Ui/Button'

export default function HeroSection() {
  return (
    <div className=' h-[70dvh]  flex align-middle justify-between px-4 py-24'>
        <div className='flex flex-col gap-6'>
            <h1 className='text-2xl font-semibold'>Sanket <br /> Gaikwad</h1>
            <div className='h-[1dvh] bg-orange_text w-20'></div>
            <div className='text-sm'>
                <div> Linkedin  | Twitter</div>
                <div> Instagram | FaceBook</div>
            </div>
            <Button />
        </div>

        <div>


        </div>

        <div className='w-4/12 '>
            <h6 className='text-orange_text text-lg'>INTRODUCTION</h6>
            <h1 className='text-3xl'>Content creator ,<br></br> Freelance writer ,<br></br> Developer</h1>
            <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, mollitia.</p>

        </div>
        
        
        
     </div>
  )
}
