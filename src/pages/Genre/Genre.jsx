import React from 'react'
import img from '../../assets/image 2.png'
import style from "../Genre/Genre.module.css"

export default function Genre() {
  return (
    <div className={style.outer}>
      <div className={style.left}>
        LEFT
      </div>
      <div className={style.right}>
       <div>
        <p>Action</p>
        <img src={img} alt="" />
       </div>
       <div>
       <p>Action</p>
        <img src={img} alt="" />
       </div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
      </div>
    </div>
  )
}
