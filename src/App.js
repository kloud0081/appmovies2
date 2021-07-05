import { useState } from "react";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import data from "./component/AllData"
import Movielist from "./component/Movielist"
import Navb from "./component/Navb";
import Add from "./component/Add"
import Trailer from "./component/Trailer";
 import ReactStars from "react-rating-stars-component";
import "./Style.css"

function App() {
  const [movie,setMovie]=useState(data)
  const [search,setSearch]=useState("")
 const [rating,setRating]=useState(null)
const ratingChanged = (newRating) => {
  setRating(newRating);
};
  return (
    <div className="App">
     
      <ReactStars classNames="Starr1" count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
      <Navb setSearch={setSearch} rating={rating} setRating={setRating} />
      <BrowserRouter>
      <Switch>
     <Route exact path="/" render={(props)=><Movielist setMovie={setMovie} movie={movie} search={search} rating={rating} {...props} /> } />
      <Route  path="/movie/:movieId" render={(props)=> <Trailer movie={movie} {...props} />} /> 
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
