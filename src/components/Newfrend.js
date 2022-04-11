import React, { useState } from 'react'
import Avatar1 from './images/Profil12.jpg'
import Avatar2 from './images/Profile10.jpg'



function Newfrend() {

    const [data,setData] = useState([
        {
            name:'bryan duran',
            avatar:Avatar1,
            nbr:'2 mutual friends'
        },
        {
            name:'babara janet',
            avatar:Avatar2,
            nbr:'2 mutual friends'
        }
    ])
  return (
    <div>
        {data.map((data,index)=>(

        
        <div className='newfriend_main_container' key={index}>
            <div className='newfirnd_info'>
                <div className='newfriend_avatar_contain'>
                    <img src={data.avatar} alt='photo'/>
                </div>
                <div className='newfriend_name'>
                    <div className='name'>{data.name}</div>
                    <div className='name'>{data.nbr}</div>
                </div>
            </div>

            <div className='decision_container'>
                <div className='decision'> accept</div>
                <div className='decision'> decline</div>
            </div>

        </div>
        ))}
    </div>
  )
}

export default Newfrend