import React, { useState,useEffect } from 'react'
import Avatar1 from './images/Profil4.jpg'
import Avatar2 from './images/Profil5.jpg'
import Avatar3 from './images/Profil2.jpg'
import Avatar4 from './images/Profil3.jpg'
import Avatar5 from './images/Profile10.jpg'
import Avatar6 from './images/Profil12.jpg'
import Avatar7 from './images/Profil1.jpg'
import {IoIosCloseCircle,IoMdPhotos} from 'react-icons/io'
import {BsEmojiSmileFill} from 'react-icons/bs'
import {ImAttachment} from 'react-icons/im'
import Message from './Message'

function Friends() {
    const [data,setData]=useState([
        {
            name:'ostin rayn',
            avatar:Avatar1
        },
        {
            name:'jhonathan pirson',
            avatar:Avatar2
        },
        {
            name:'noah joseph',
            avatar:Avatar3
        },
        {
            name:'janet T.',
            avatar:Avatar4
        },
        {
            name:'melissa armel.',
            avatar:Avatar5
        },
        {
            name:'jhon ndoube.',
            avatar:Avatar6
        },
        {
            name:'jhon ndoube.',
            avatar:Avatar7
        }
    ])
     const [show,setShow]=useState(false);
  
  return (
    <div>
        <div className='newfriend_main_container'>
            {data.map((data,index)=>(

           
            <div onClick={()=>setShow(true)} className='newfirnd_info dataf' onKey={index}>
                <div className='online'></div>
                <div className='newfriend_avatar_contain'>
                    <img src={data.avatar} alt='photo'/>
                </div>
                <div className='newfriend_name'>
                    <div className='name names'>{data.name}</div>
                </div>
            </div>
             ))}
        </div>

        {show === true?
        <div className='message_container'>
            <div className='message_header'>
            {/*<IoIosCloseCircle className='msg_icon'/>*/}
                <div className='newfirnd_info dataf'>
                    <div className='online'></div>
                    <div className='newfriend_avatar_contain'>
                        <img src={Avatar1} alt='photo'/>
                    </div>
                    <div className='newfriend_name'>
                        <div className='name names'>ostin rayn</div>
                    </div>
                </div>
                <div className='closetab' onClick={()=>setShow(false)}><IoIosCloseCircle className='msg_icon'/></div>
            </div>
            
            <Message/>
        </div>
        :null}

    </div>
  )
}

export default Friends