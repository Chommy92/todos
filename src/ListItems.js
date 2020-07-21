import React from 'react'
import './ListItem.css';



const ListItems = (props) =>{
       const items = props.items;
       const ListItems = items.map(item=>{
       	  return(
       	   <div 
       	   key= {item.id}
       	   className='list'>
       	   <p>{item.text}
           <button 
           className= 'del'
           onClick= {() => props.deleteItem(item.id)} > delete</button>
       	   </p>
       	   </div>
       	  )
       })
       return(

       <div>{ListItems}</div>
       )
}

export default ListItems;