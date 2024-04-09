import React, { useState ,useEffect} from 'react'
import style from "../registration/Registration.module.css"
import leftRegiImg from "../../assets/regiLeftImage.png"

export default function Registration() {

  const [formInput,setFormInput] = useState({
    name:"",
    username:"",
    mobile:"",
    password:"",
    consent:false
  })

  const [isNotEmpty,setEmpty] = useState(false)

  function handleChange(e){
   const {name,value,type,checked} = e.target;
   const newValue = type==='checkbox' ? checked : value;
   setFormInput({
      ...formInput,
      [name] : newValue
   })
  }


  function showDetail(){
    setFormInput(formInput)
    if(!formInput.name || !formInput.username || !formInput.mobile || !formInput.password || !formInput.consent){
      // setEmpty(true)
      return;
    }
    
    localStorage.setItem("formData", JSON.stringify(formInput));
    setFormInput({
      name:"",
      username:"",
      mobile:"",
      password:"",
      consent:false
    })

    // setEmpty(false)
  }

console.log(formInput.consent)
  return (
    <div className={style.outer}>
        <div className={style.left} >
          <div className={style.headingq}>
            <p>Discover new things on Superapp</p>
          </div>
          <img src={leftRegiImg} alt="left-img" />
        </div>
        <div className={style.right}>
          <div className={style.rightContent}>
            <p className={style.name}>Super App</p>
            <p className={style.create}>Create your new account</p>

              <div className={style.inp}>
                <input type="text" placeholder='Name' name='name' value={formInput.name}  onChange={(e)=>handleChange(e)} />
                {isNotEmpty && <p className={style.warn}>Field is required</p>}
              </div>
              <div className={style.inp}>
            <input type="text" placeholder='Username' name='username' value={formInput.username} onChange={(e)=>handleChange(e)} />
            {isNotEmpty &&<p className={style.warn}>Field is required</p>}</div>
            <div className={style.inp}>
            <input type="tel" placeholder='Mobile' name='mobile' value={formInput.mobile} onChange={(e)=>handleChange(e)} />
            {isNotEmpty &&<p className={style.warn}>Field is required</p>}</div>
            <div className={style.inp}>
            <input type="password" placeholder='Password' name='password' value={formInput.password} onChange={(e)=>handleChange(e)} />
            {isNotEmpty &&<p className={style.warn}>Field is required</p>}</div>
            <div className={style.inp}>
            <div className={style.accept}>
            <input type="checkbox" name='consent' checked={formInput.consent} onChange={(e)=>handleChange(e)} />
            <span>Share my registration data with Superapp</span>
            </div>
            <br />
            {isNotEmpty && <p className={style.warnc}>Check this box if you want to proceed</p>}
            </div>
            <button onClick={showDetail}>SIGN UP</button>
            <p className={style.tc1}>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
            <p className={style.tc2}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
          </div>
        </div>
    </div>
  )
}
