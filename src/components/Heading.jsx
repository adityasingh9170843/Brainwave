import React from 'react'

function Heading({className, title,text}) {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
        {title && <h2 className={`text-[3.5rem] font-semibold ${className || ''}`}>{title}</h2>}
        {text && <p className={`text-[1.25rem] leading-8 body-2 mt-4 text-[#757185] ${className || ''}`}>{text}</p>}
    </div> 
  )
}

export default Heading