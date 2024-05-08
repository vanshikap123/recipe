import React, { useState } from 'react'

const Form = () => {
    const [Namevalue,setnamevalue]= useState("");
    const [Emailvalue,setmailvalue]= useState("")
    const [Passvalue,setidvalue]= useState("")
    const [Addvalue,setaddvalue]= useState("")
    const namevalue = (event) =>{
// console.log(event.target.value)
setnamevalue(event.target.value)
    }
    const emailvalue = (event) =>{
        // console.log(event.target.value)
        setmailvalue(event.target.value)
     }
const passwordvalue = (event) =>{
    // console.log(event.target.value)
    setidvalue(event.target.value)
  }
const addressvalue = (event) =>{
    // console.log(event.target.value)
    setaddvalue(event.target.value)
           }
           const handlesubmit=(event)=>{
event.preventDefault()
 let obj={
   name:Namevalue,
   Email:Emailvalue,
   password:Passvalue,
   Address:Addvalue}
   console.log(obj)
           }
  return (
    <div className="">
      <form action="" className='form'>
        <label htmlFor="">Name</label>
        <input type="text" onChange={namevalue} />
        <label htmlFor="">Email</label>
        <input type="text"onChange={emailvalue} />
        <label htmlFor="">password</label>
        <input type="password"onChange={passwordvalue} />
        <label htmlFor="">Address</label>
       <textarea name="" id="" cols="30" rows="6" onChange={addressvalue}></textarea>
       <button onClick={handlesubmit} type="button">submit</button>
      </form>
    </div>
  )
}

export default Form;