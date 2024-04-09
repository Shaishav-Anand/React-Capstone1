import React, { useEffect, useState } from 'react'
import img from '../../assets/image 2.png'
import nextimg from '../../assets/next.png'
import warnimg from '../../assets/warning.png'
import style from "../Genre/Genre.module.css"

export default function Genre() {

  const genre = [
    {
      title: "Action",
      img : img
    },
    {
      title: "Drama",
      img : img
    },
    {
      title: "Romance",
      img : img
    },
    {
      title: "Thriller",
      img 
    },
    {
      title: "Western",
      img 
    },
    {
      title: "Horror",
      img 
    },
    {
      title: "Fantasy",
      img 
    },
    {
      title: "Music",
      img 
    },
    {
      title: "Fiction",
      img 
    }
  ]

  const [selectedGenre,setSelectedGenre] = useState([])
  const [warning,setWarning] = useState(false)

  function handleClick(index){
    
    if(!selectedGenre.includes(index)){
      setSelectedGenre([...selectedGenre,index])
     
    }
  }

  useEffect(()=>{
    localStorage.setItem("selectedIndex",JSON.stringify(selectedGenre))
  })
  


  function handleDelete(index){
    if(selectedGenre.length>0){
      const narr = selectedGenre.filter((eachGenreIndex)=>{
        return eachGenreIndex != index
      })
      setSelectedGenre(narr)
    }
  }

  function handleNext(){
    if(selectedGenre.length<3){
      setWarning(true)
    }else{
      setWarning(false)
    }
  }
 

  return (
    <div className={style.outer}>
      <div className={style.left}>
        <div className={style.allLeftItems}>
          <div>
            <p className={style.headingName}>Super App</p>
          </div>
          <div>
            <p className={style.sug}>Choose your entertainment category</p>
          </div>
        </div>
        <div className={style.selection}>
            {selectedGenre.length>0 && selectedGenre.map((index)=>{
              return(
                <div key={index} className={style.sleft}>
                  <p>{genre[index].title}</p>
                  <button onClick={()=>handleDelete(index)} className={style.crossBtn}>X</button>
                </div>
              )
            })}
            
          </div>
          {warning && <div className={style.warning}>
                        <img src={warnimg}  /><p>Minimum 3 category required</p>
                      </div>
          }
      </div>
        <div className={style.right}>
              {genre.map((eachGenre,index)=>{
              return (
                <div key={index} value = {index}  onClick={()=>handleClick(index)} >
                  <p>{eachGenre.title}</p>
                  <img src={eachGenre.img} alt="" />
                </div>
              )
            })}
          
          <div className={style.abs}>
            <button onClick={()=>handleNext()} className={style.nextBtn}>Next Page <img className={style.nxtImg} src={nextimg}></img> </button>
          </div>
        </div>
      </div>
    
  )
}
