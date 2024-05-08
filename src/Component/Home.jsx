import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  let inputRef = useRef();
      const [item, setitem] = useState([]);
      const[setvalue,searchitem] = useState("pizza")

    async function fethcData(){
        let res = await fetch(`https://api.edamam.com/search?q=${setvalue}&app_id=249b8c77&app_key=accc417489d9e0dfa317fbc0cb7be4c8`)
        let data = await res.json()
        // console.log(data.hits)
        setitem(data.hits)

    }
    // fethcData()
    useEffect(()=>{
        fethcData()
    },[setvalue])
    console.log(item)
    const handlsubmit =(e)=>{
     e.preventDefault()
let searchValue = inputRef.current.value
console.log(searchValue)
searchitem(searchValue)
    }
  return (
    <div>
     <form onSubmit={handlsubmit} className="d-flex col-md-6 m-auto my-3 bg-dark p-3 rounded-3" role="search">
  <input ref={inputRef} className="form-control me-2 border border-3  border-info" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-success" type="submit">Search</button>
</form>

  <div className='row  d-flex gap-4 justify-content-center mt-5'>
{item.map((ele)=>{
return(
   <div className="card border border-black p-3 gap-3" style={{width: '20rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.recipe.label}</h5>
    <Link state={ele} to="/single" className="btn btn-primary">View Recipe</Link>
  </div>
</div>
)
})}
  </div>
  </div>
  )
  
}
export default Home