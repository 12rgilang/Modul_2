import React from 'react'


let Button = (props) => {
    return(
        <>
        <button className='my-salmon py-3 px-2 rounded sm:flex md:flex lg:flex md:ml-8 '>
        {props.children}
        </button>
        </>
    )
   
}

export default Button;