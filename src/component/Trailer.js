import { Link } from "react-router-dom"
export default function Trailer(props){
  
     const film=props.movie.find(el=>{return el.id.toString()===props.match.params.movieId})
  
     console.log(film)
     
    return (<div className="trailer" >
     <div><h2>Film Trailer: </h2></div>   
     <div style={{width:"400px",margin:"auto"}}>    <iFrame width="400" height="300" src={film.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /></div> 
       <div>  <h2  style={{marginTop:"50px"}}> Film Description:</h2> <span>{film.description}</span>  </div> 
       <button > <Link  to="/">Go Back to Home</Link></button>

    </div>)
}