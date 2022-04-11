import React, { useState } from 'react'
import {IoIosCloseCircle,IoMdPhotos} from 'react-icons/io'
import {BsEmojiSmileFill} from 'react-icons/bs'
import {ImAttachment} from 'react-icons/im'


function Formulaire({addMsg}) {

    const [value,setValue]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        addMsg(value);
    }

  return (
    <div>
        


        <div className='message_footer'>
                <form  className='msg_from' onSubmit={handleSubmit}>
                    <input 
                            onSubmit={handleSubmit}
                            onChange={e=>setValue(e.target.value)}
                            className='message_input' 
                            type='text' placeholder='your message' 
                    />
                </form>
                <IoMdPhotos className='msg_icon_f'/>
                <BsEmojiSmileFill className='msg_icon_f'/>
                <ImAttachment className='msg_icon_f'/>
            </div>
    </div>
  )
}

export default Formulaire