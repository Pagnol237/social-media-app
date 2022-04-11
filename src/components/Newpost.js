import React from 'react'
import Avatar from './images/Profil0.jpg'
import {FaVideo} from 'react-icons/fa'
import {BiImages} from 'react-icons/bi'
import {SiMaildotru} from 'react-icons/si'

function Newpost() {
  return (
    <div className='newpost_main'>
        <div className='newpost_title'><div className='avatar_container'> <img src={Avatar}/> </div>post something </div><hr/>
        <form className='newpost_form'>
            <div className='newpost_container'>
                <input placeholder="what's news pagnol"/>
                <FaVideo className='newpost_icon live'/>
                <BiImages className='newpost_icon'/>
                <SiMaildotru className='newpost_icon'/>
            </div>
        </form>
    </div>
  )
}

export default Newpost