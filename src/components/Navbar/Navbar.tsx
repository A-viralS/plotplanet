import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-[#373FFA]  box-top h-[7rem] w-screen flex justify-between items-center pr-5 p-2' >

            <Image src="/logo.png" width={100} height={80} alt='logo.jpeg' className='p-1 ' />
            <div className='flex gap-2'>

                <div className='bg-pink-500 h-[50px] w-[100px] box-button flex justify-center rounded-sm  '>
                    <p className='m-auto font-bold text-yellow-100 font-nunito' > Register</p>
                </div>
                <div className='bg-pink-500 h-[50px] w-[100px] box-button flex justify-center rounded-sm'>
                    <p className='m-auto font-bold text-yellow-100 font-nunito'>Login</p>
                </div>


            </div>
        </div >
    )
}

export default Navbar