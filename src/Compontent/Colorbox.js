import {useState} from 'react'
import AddColor from './Addcolor'
function ColorBox(){

    const [color,setColor] =useState("")
    const styles ={backgroundColor:color}
  
    const defaultColor =["pink","orange","crimson","yellow"]
    const [addcolor,setaddColor]=useState(defaultColor)

    return(
      <div>
      <input style={styles} onChange={(event)=> setColor(event.target.value)} placeholder="Enter Color"/>
      <button onClick={()=>setaddColor([...addcolor,color])}>Add Color</button>
  {addcolor.map((clr ,index)=> (<AddColor key={index} clr={clr} />))}
      </div> )
  }

  export default ColorBox;