import {useState} from 'react'
import Button from '@mui/material/Button';
import Like from  './Like'
function MoviesList({name,Poster,rating,summary}){
    const [show,hide] =useState(true)
    const inputStyle ={
      margin:'20px',
      padding:'20px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      gap:'20px'
    }
  
    return(
      <div style={inputStyle}>
     
      <Input label="Name" value={name} placeholder="Please Enter Movie Name" onChange={(event)=>setName(event.target.value)}  />
      <Input label="Poster" value={Poster} placeholder="Please poster Image UR" onChange={(event)=>setPoster(event.target.value)}  />
      <Input label="rating" value={rating} placeholder="Please  enter Rating" onChange={(event)=>setRating(event.target.value)}  />
      <Input label="movieSummary" value={movieSummary} placeholder="Please Enter Movie Summary" onChange={(event)=>setmovieSummary(event.target.value)}  />

   
      <Button variant="contained" onClick={btnsubmitClick}>Add Users</Button>

      <div className="movies-container">
        <img className="banner" src={Poster} alt=""/>
        <div className="movies-specs">
    <h3 className="movie-name">{name}</h3>
    <p>⭐{rating} </p>
    </div>
    {/* <button onClick={()=>hide(!show)}> {show ? <p>Hide Desc</p> :<p>Show Desc</p> }</button> */}
    <Button variant="contained" onClick={()=>hide(!show)}>{show ? <p>Hide Desc</p> :<p>Show Desc</p> }</Button>
  
    { show ?
    <p className="movie-summary">{summary}</p>: null }
  <Like />
      </div>
        
 </div>
    )
  }

  export default MoviesList;