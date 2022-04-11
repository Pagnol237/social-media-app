import React, { useState } from 'react'
import Slider from "react-slick"
import Profil0 from './images/Profil0.jpg'
import Profil1 from './images/Profil1.jpg'
import Profil2 from './images/Profil2.jpg'
import Profil3 from './images/Profil3.jpg'
import Profil4 from './images/Profil4.jpg'
import Profil5 from './images/Profil5.jpg'
import Statut1 from './images/IM1.jpg'
import Statut2 from './images/IM2.jpg'
import Statut3 from './images/IM3.jpg'
import Statut4 from './images/IM4.jpg'
import Statut5 from './images/IM5.jpg'
import {SiAddthis} from 'react-icons/si'


function Statut() {
    const [data,setData] = useState([
                                    {   pseudo:'pagnol',
                                        profil: Profil1,
                                        statut: Statut1
                                    },
                                    {
                                        pseudo:'paola',
                                        profil: Profil2,
                                        statut:Statut2
                                    },
                                    {
                                        pseudo:'yves',
                                        profil: Profil3,
                                        statut:Statut3
                                    },
                                    {
                                        pseudo:'fortune',
                                        profil: Profil4,
                                        statut:Statut4
                                    },
                                    {
                                        pseudo:'dianne',
                                        profil: Profil5,
                                        statut:Statut5
                                    },
                                    {
                                        pseudo:'brice',
                                        profil: Profil3,
                                        statut: Profil2
                                    }
                                ]);

                                var settings = {
                                    infinite: false,
                                    speed: 500,
                                    slidesToShow: 5,
                                    slidesToScroll: 4,
                                    initialSlide: 0,
                                    responsive: [
                                      {
                                        breakpoint: 1024,
                                        settings: {
                                          slidesToShow: 5,
                                          slidesToScroll: 3,
                                          infinite: true,
                                          
                                        }
                                      },
                                      {
                                        breakpoint: 600,
                                        settings: {
                                          slidesToShow: 5,
                                          slidesToScroll: 2,
                                          initialSlide: 2
                                        }
                                      },
                                      {
                                        breakpoint: 480,
                                        settings: {
                                          slidesToShow: 4,
                                          slidesToScroll: 1
                                        }
                                      }
                                    ]
                                  };

  return (
    <div className='statut_main_container'>
        <Slider {...settings}>
        <div className='statut_container'>
                <div className='story_cover'>
                    <div className='add_story_botton'><SiAddthis/></div>
                    <div className='profile_name'>add story</div>
                </div>
                <div className='strory_container' style={{backgroundImage:`url(${Profil0})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}></div>
        </div>
        {data.map((data,index)=>(
            <div className='statut_container' key={index}>
                <div className='statut_profil'><img className='statu_image_profile' src={data.profil} /></div>
                <div className='profile_name'>{data.pseudo}</div>
                <div className='strory_container' style={{backgroundImage:`url(${data.statut})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}></div>
            </div>
        ))}
        </Slider>
       
    </div>
  )
}

export default Statut