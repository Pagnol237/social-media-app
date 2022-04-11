import React,{useState} from 'react'
import {AiOutlineEllipsis,AiOutlineHeart} from 'react-icons/ai'
import {GoComment} from 'react-icons/go'
import {BsShare,BsBookmark} from 'react-icons/bs'
import {GiPaperClip} from 'react-icons/gi'
import {ImFilePicture} from 'react-icons/im'
import {MdTagFaces} from 'react-icons/md'
import Profil3 from './images/Profil3.jpg'
import Post2 from './images/Post2.jpg'
import Post4 from './images/Post4.jpg'
import Post6 from './images/Post6.jpg'
import Post7 from './images/Post7.jpg'
import Profil0 from './images/Profil0.jpg'
import Profil9 from './images/Profil9.jpg'
import Avatar1 from './images/Profil6.jpg'
import Avatar2 from './images/Profile8.jpeg'

function Post() {
    const [data,setData]=useState([
        {
            user_avatar: Profil3,
            user_name:'Janet T.',
            time:'12 hours ago',
            texte:'hello friends I am happy to present my new collection of shoes available on our different pages and our website',
            image: Post2
        },
        {
            user_avatar: Avatar1,
            user_name:'movies group',
            time:'7 hours ago',
            texte:"the william method, a movie to watch, retracing a father's plan for his daughters",
            image: Post4
        },
        {
            user_avatar: Avatar2,
            user_name:'fan du 9',
            time:'7 hours ago',
            texte:"congratulations to our brave lions for the tiket of the quatar obtained in algeria, congratulations!!!!!!!!!",
            image: Post6
        },
        {
            user_avatar: Profil9,
            user_name:'caf online',
            time:'7 hours ago',
            texte:"Congratulations to Cameroon, which is one of the five nations to represent Africa at the 2022 World Cup, long live Africa.",
            image: Post7
        }
    ])
  return (
      <div>
    
    {data.map((data,index)=>(
    <div className='post_main' key={index}>
        

        <div className='post_header'>
            <div className='post_user_info'>
                <div className='user_post_avatar'><img src={data.user_avatar} alt=''/></div>
                <p>{data.user_name} <span>({data.time})</span></p>
            </div>
            <AiOutlineEllipsis className='point_icon'/>
        </div>

        <div className='post_text'>
            <p>
                {data.texte}
            </p>
        </div>


        <div className='post_iamges'>
            <img src={data.image} alt='picture' />
        </div>

        <div className='likes'>
            <div className='action_container'>
                <GoComment/><p>25 comments</p>
            </div>
            <div className='action_container'>
                <AiOutlineHeart/><p>12k likes</p>
            </div>
            <div className='action_container'>
                <BsShare/><p>3k shares</p>
            </div>
            <div className='action_container'>
                <BsBookmark/><p>26 saves</p>
            </div>
        </div>
        <hr/>
        <div className='add_post_conatiner'>
            <form className='add_post_form'>
                <div className='add_post_avatar'><img className='post_comment_avatar' src={Profil0}/></div>
                <input placeholder='your comment...'/>
                <GiPaperClip className='add_post_icon'/>
                <ImFilePicture className='add_post_icon'/>
                <MdTagFaces className='add_post_icon'/>
            </form>
            
        </div>


    </div>
    ))}



    </div>


  )
}

export default Post