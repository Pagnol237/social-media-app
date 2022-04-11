import React from 'react'
import Leftpart from './Leftpart'
import Midelpart from './Midelpart'
import Rightpart from './Rightpart'



function Body() {
  return (
    <div className='body_main'>
        <Leftpart/>
        <Midelpart/>
        <Rightpart/>
    </div>
  )
}

export default Body