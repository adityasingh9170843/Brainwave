import React from 'react'
import Section from './Section'
import { socials } from '../constants'

function Footer() {
  return (
    <Section crosses className="!px-0 !py-10">
        <div className='max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
            <p className='caption text-n-3 lg:block'> {new Date().getFullYear()}. All Rights Reserved.</p>
            <ul className='flex gap-5 flex-wrap'>
                {socials.map((item) => (
                    <a className='flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-[#252134]' href={item.url} key={item.id} target='_blank'>
                        <img src={item.iconUrl} width={16} height={16} alt="itemTItle" />
                    </a>
                ))}
            </ul>
        </div>
    </Section>
  )
}

export default Footer