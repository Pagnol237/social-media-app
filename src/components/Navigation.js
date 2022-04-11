import React from 'react';
import {BiSearchAlt2} from 'react-icons/bi';
import {MdWorkOutline} from 'react-icons/md';
import {BsBell} from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai';
import Avatar from './images/Imageprofile.jpg'

function Navigation() {
  return (
    <div className='container'>
        <div className='nav_container'>
            {/* logo div*/}
            <div className='logo'>speak<span>space</span></div>

             {/* nav avatar div*/}
             <div className='nav_avatar'>
                    <div className='avatar_container'>
                        <img className='avatar' src={Avatar} alt='avatar de profile'/>
                    </div>
                    pagnol
             </div>

             {/* notification nav div */}
             <div className='nav_notif_container'> <BsBell/><div className='nav_notif_nber'>12</div></div>
             <div className='nav_notif_container'> <MdWorkOutline/><div className='nav_notif_nber'>15</div></div>
             <div className='nav_notif_container  active'> <AiFillHome/></div>

            {/* search form div */}
            <form className='nav_form'>
                <div className='input_container'>
                    <input className='nav_input' type="texte" placeholder='Search' />
                    <div className='nav_icon'><BiSearchAlt2/> </div>
                </div>
            </form>

           

        </div>
    </div>
  )
}

export default Navigation