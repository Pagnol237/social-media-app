import React, { useState } from 'react'
import {FaHome} from 'react-icons/fa'
import {BsCalendar4Event} from 'react-icons/bs'
import {RiSettings3Line} from 'react-icons/ri'
import {MdOndemandVideo,MdStorefront} from 'react-icons/md'
import {AiOutlinePicture,AiOutlineFileText} from 'react-icons/ai'


function Leftpart() {
  const [data,setData]=useState([
      {
        name:'parlon foot',
        bcolor:'#17f246'
      },
      {
        name:'africa girls',
        bcolor:'#F02DAC'
      }
  ])
  return (
    <div className='leftpart_main'>

        <div className='optiongroup_main'>

            <div className='option actif'>
              <FaHome className='icon'/>
              <div className='option_section'>
                  <p>Home</p>
              </div>
            </div>

            <div className='option'>
              <BsCalendar4Event className='icon'/>
              <div className='option_section'>
                  <p>Events</p>
                  <span>2</span>
              </div>
            </div>

            <div className='option'>
              <MdOndemandVideo className='icon'/>
              <div className='option_section'>
                  <p>Watch videos</p>
              </div>
            </div>

            <div className='option'>
              <AiOutlinePicture className='icon'/>
              <div className='option_section'>
                  <p>Home</p>
                  <span>50</span>
              </div>
            </div>

            <div className='option'>
              <AiOutlineFileText className='icon'/>
              <div className='option_section'>
                  <p>Files</p>
              </div>
            </div>

            <div className='option'>
              <MdStorefront className='icon'/>
              <div className='option_section'>
                  <p>Market place</p>
              </div>
            </div>

            <div className='option'>
              <RiSettings3Line className='icon'/>
              <div className='option_section'>
                  <p>Setting</p>
              </div>
            </div>

        </div> 

        <div className='small_title_right'>groups<hr/></div>

        <div className='optiongroup_main'>
            <div className='option'>
                <div className='initial'>PA</div>
                <div className='option_section'>
                    <p>parlon foot</p>
                </div>
            </div>

            <div className='option'>
                <div className='initial' style={{backgroundColor:'#F02DAC'}}>AG</div>
                <div className='option_section'>
                    <p>africa girls</p>
                </div>
            </div>

            <div className='option'>
                <div className='initial' style={{backgroundColor:'#F1B410'}}>AC</div>
                <div className='option_section'>
                    <p>africa code</p>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Leftpart