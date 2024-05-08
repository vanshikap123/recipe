import React, { useEffect, useState } from 'react'

const Dummy = () => {
    const [item,setitem]= useState([]);
async function fetchCart(){
  let res = await fetch("https://dummyjson.com/carts")
  let data = await res.json()
  console.log(data)
  setitem(data.carts)
}
useEffect(()=>{
    fetchCart()
},[])

console.log(item)
  return (
    <div>
    <div className='row  d-flex justify-content-center gap-3 '>
      {item.map((ele)=>{
  return  <div className="card w-45" style={{width: '18rem'}}>
    <img  src={ele.products[4].thumbnail} className="card-img-top m-auto my-3 img" alt="..." />
    <div className="card-body">
      <h5 className="card-title text-center"></h5>
      <a href="#" className="btn btn-primary">shopitem</a>
    </div>
  </div>
      })}
    </div>
    </div>
  )
}

export default Dummy;