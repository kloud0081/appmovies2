import { Card } from "react-bootstrap"
import ReactStars from "react-rating-stars-component";
import { BrowserRouter,Link,Route ,Switch} from "react-router-dom";
import Trailer from "./Trailer"
export default function Moviecard({el}){

  return (<Card className="pro" style={{ width: "'18rem'" }}>
    <Card.Img variant="top" src={el.src} style={{ width: '350px', height: "200px" }} />
    <Card.Body key={el.id}>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text className="textcard" >
        {el.description}
        <ReactStars classNames="Starr" count={5} value={el.rating} size={24} activeColor="#ffd700" />
        <Link to={"/movie/" + el.id} >View trailer</Link>
          
      </Card.Text>
    </Card.Body>
  </Card>)


}