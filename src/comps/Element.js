import React from 'react'
import { v4 } from 'uuid'

const Element = ({item_list, deleted , edit}) => {



  return (
    <> 
   {item_list.map((elem, index) => (
   <li className='comic-neue-bold-italic' key={index}> <h3 > {elem.item} {" "} {elem.price}</h3>

   <button className='btn btn-outline-warning' onClick={()=>edit(elem)}>edit </button>
<button className='btn btn-outline-danger' onClick={()=>deleted(elem.id)}>delete </button>





</li>
      
    
    
   ))
    } 
        
        
         
        
    

    </>
  )
}

export default Element