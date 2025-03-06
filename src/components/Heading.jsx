import React from 'react'

function Heading({className, title}) {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
        {title && <h2 className={`text-[3.5rem] font-semibold ${className || ''}`}>{title}</h2>}
    </div> 
  )
}

export default Heading