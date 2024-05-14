import React from 'react'
import Element from './Element'

const List = ({item_list, deleted , edit}) => {
  return (
    <div>
        <ul>
          
           <Element item_list={item_list} deleted ={deleted}
           edit = {edit}/>
            
           
          
        
        </ul>
    </div>
  )
}

export default List