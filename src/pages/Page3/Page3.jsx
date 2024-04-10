import React from 'react'
import style from '../Page3/Page3.module.css'
import userImg from '../../assets/userpic.png'

export default function Page3() {

    const genre = [
        {
          title: "Action"
            
        },
        {
          title: "Drama"
            
        },
        {
          title: "Romance"
            
        },
        {
          title: "Thriller"
          
        },
        {
          title: "Western"
          
        },
        {
          title: "Horror"
           
        },
        {
          title: "Fantasy"
         
        },
        {
          title: "Music"
        
        },
        {
          title: "Fiction"
          
        }
      ]

      const userData = localStorage.getItem("formData") !== null ? JSON.parse(localStorage.getItem("formData")) : []
      const userSelects = JSON.parse(localStorage.getItem("selectedIndex"))
       

  return (
    <div className={style.outer}>
        <div className={style.inner} >
            <div className={style.left}>
                <div className={style.up}>
                    <div className={style.upleft} >
                        <img src={userImg} alt="" />
                    </div>
                    <div className={style.upright} >
                        <div className={style.sup}>
                            <p>{userData?.name}</p>
                            <p>{userData?.mobile}</p>
                            <p>{userData?.username}</p>
                        </div>
                        
                        <div className={style.genre} >
                           {userSelects.map((item,index)=>{
                            if(index<4){
                                return(
                                    <div className={style.sright}>
                                        <p>{genre[item].title}</p>
                                     </div>
                                )   
                            }
                           })}
    
                        </div>
                        
                    </div>
                </div>
                <div className={style.down}></div>
            </div>
            <div className={style.right}>

            </div>
        </div>
    </div>
  )
}
