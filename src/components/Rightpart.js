import React from 'react'
import Newfrend from './Newfrend'
import Friends from './Friends'

function Rightpart() {
  return (
    <div className='rightpart_main'>
        <div className='small_title_right'>requests <hr/></div>
        <Newfrend/>
        <div className='small_title_right'>friends <hr/></div>
        <Friends/>
    </div>
  )
}

export default Rightpart