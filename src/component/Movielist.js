import Moviecard from "./MovieCard"
import Add from ".//Add"
import { useState } from "react";

export default function Movielist({movie,search,rating,setMovie}){
  const [show,setShow]=useState(false)


  if (rating === null)
    return (<div  style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}  >{movie.filter(el => el.title.toLowerCase().includes(search)).map((el, i) => <Moviecard el={el} />)}       <button className="buttontoogle" onClick={() => setShow(!show)}>{show ? "close Add" : "add new movie"}</button>
    {show && <Add movie={movie} setMovie={setMovie} />} 
    </div>)
  else return (<div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around"}}  >{movie.filter(el => el.title.toLowerCase().includes(search) && el.rating >= rating).map((el, i) => <Moviecard el={el} />)}<button className="buttontoogle" onClick={() => setShow(!show)}>{show ? "close Add" : "add new movie"}</button></div>)
}