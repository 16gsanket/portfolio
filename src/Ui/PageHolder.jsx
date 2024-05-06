import React from 'react'

export default function PageHolder({children}) {
  return (
    <div className='overflow-y-hidden'>
        {children}
    </div>
  )
}
