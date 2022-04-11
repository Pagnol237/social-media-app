import React, { useState } from 'react'
import Formulaire from './Formulaire'

function Message() {

        const [msgs,setMsgs]=useState([
            
        ]);
        const addMsg =(text)=>{
            const newmsg=[...msgs,text,];
            setMsgs(newmsg);
        }
  return (
    <div>
        <div className='message_body'>
            {msgs.map((items,index)=>(
               <div  key={index}>
                    <div className='message_send'>{items}</div>
                </div>
            ))}
        </div>
        <Formulaire addMsg={addMsg}/>
    </div>
  )
}

export default Message