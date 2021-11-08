
import {useState} from 'react'

function Like() {
    const [like,setLike]=useState(0);
    const[disLike,setDislike]=useState(0);
  
    return(
      <div className="like-list">
  <p onClick={()=>setLike(like+1)}>{like}👍</p>
  <p onClick={()=>setDislike(disLike+1)}>{disLike}👎</p>
      </div>
    )
  }

  export default Like;