import React from 'react'
import { Link , useLocation } from "react-router-dom";

const Singalepage= () =>{
    let location = useLocation()
    console.log(location.state.recipe)
    return(
        
         <div className="container ">
<div className="row bg-info mt-5">
 <div className="col-6 bg-danger d-flex justify-content-center p-3">
    <img className="w-75 h-70" src={location.state.recipe.image}alt="" />
    </div>
 <div className="col-6 text-center">
    <h2 >{location.state.recipe.label}</h2>
    <h4>{location.state.recipe.mealType}</h4>
    <Link to={location.state.recipe.url} className="btn btn-dark my-3">View Recipe</Link>
    <div className="row d-flex justify-content-center gap-4">
<div className='col-3 bg-warning'>
  <h4>Fat</h4>
  <p>{Math.floor(location.state.recipe.digest[0].total)}g</p>
</div>
<div className='col-3  bg-warning'>
  <h4>Cholesterol</h4>
<p>{Math.floor(location.state.recipe.digest[3].total)}g</p>
</div>
<div className='col-3  bg-warning'>
  <h4>Sugar</h4>
<p>{Math.floor(location.state.recipe.digest[24].total)}g</p>
</div>
    </div>
 </div>
</div>
<div className="row bg-warning mt-4  ">
  <div className='col-6 m-auto  d-flex justify-content-center '>
    <ul>
    <h1>ingredients</h1>
{location.state.recipe.ingredientLines.map((text)=>{
  return<li>{text}</li>
})}
</ul>
  </div>
  

</div>
         </div>
        
    )
    }
    export default Singalepage;