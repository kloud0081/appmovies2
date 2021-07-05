import { useState } from "react"
import {Form,Button,Modal} from "react-bootstrap"
export default function Add({setMovie,movie}){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [posturl,setPosturl]=useState("")
    const [rating,setRating]=useState("")

 const Ajouter=()=>{
    setMovie([...movie,{title,description,posturl,rating}])
 }
    return (<div className="Add">
      <Modal.Dialog style={{width:"950px"}}>
  <Modal.Body >
  <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <table><tr><td><Form.Label>Title </Form.Label></td>
        <td>  <input type="text" onChange={e=>setTitle(e.target.value)}/></td></tr>
         <tr> <td><Form.Label>Description </Form.Label></td>
    <td>      <input type="text" onChange={e=>setDescription(e.target.value)}/></td></tr>
        <tr> <td><Form.Label>Post Url </Form.Label></td>
        <td>  <input type="text" onChange={e=>setPosturl(e.target.value)}/></td></tr> 
        <tr><td> <Form.Label>Rating </Form.Label></td>
        <td> <input type="text" onChange={e=>setRating(e.target.value)}/></td></tr> </table>
        </Form.Group>
      </Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary" className="buttonAdd" variant="primary" onClick={Ajouter} >
          Add
        </Button>  </Modal.Footer>
</Modal.Dialog>
      </div>)
}