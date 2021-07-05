import {FormControl ,Form} from "react-bootstrap"
export default function Navb({setSearch,rating,setRating}){
  
  return (<div >
    <Form inline className="bar">
      <FormControl className="label3" type="text" className="mr-sm-2" onChange={e => setSearch(e.target.value)} />
      <label className="label1" >Search by Title</label>
      {(rating !== null) && <button className="label2" onclick={() => setRating(null)}> Reset Filter </button>}
    </Form>
  </div>)
}