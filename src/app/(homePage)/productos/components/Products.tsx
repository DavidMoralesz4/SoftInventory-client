import { CameraOutlined } from '@ant-design/icons'
import React from 'react'

export default function Products() {
  return (
    <div className='w-[170px] h-[260px] bg-slate-300 cursor-pointer'>
        <div className='flex justify-center items-center bg-slate-100 h-40'>
            <CameraOutlined/>
        </div>
        <div className='px-3 mt-2'>
            <p className='text-gray-950'>Camisa oversize</p>
            <p className='text-gray-950'>12</p>
            <strong className='text-gray-950'>120000</strong>
        </div>
    </div>
  )
}
