import React from 'react'
import {brainwave} from "../assets"
import {navigation} from "../constants"
function Header() {
  return (
    <div className='fixed top-0 z-50 bg-[#0E0C15]/90 backdrop:blur-sm border-b border-[#252134] lg:bg-[#474060]/90 lg:backdrop-blur-sm'>
        <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 '>
             <a className='block w-{12rem} xl:mr-8' href='#hero'>
                <img src={brainwave} width={190} height={50} />
             </a>
             <nav className='hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-[#0E0C15] lg:static lg:flex lg:mx-auto lg:bg-transparent]'>
                <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row '>
                    {
                        navigation.map((item, index) => (
                            <a key={item.id}></a>
                    ))}
                </div>
             </nav>
        </div>
    </div>
  )
}

export default Header