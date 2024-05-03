import React from 'react'

const Form = ({item,
     setItem,
      set_item_list, 
    onSubmit}) => {

    //  functions and handlers


    // handle change
    const onHandleChange = e =>{
        const input = e.target;

        setItem((prev)=>
            ({
                ...prev, [input.name]: input.value
            })
        
    )
}

// handle submit 



  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor='item'>Item</label>
            <input type='text'
            value={item.item}
            name='item'
            onChange={onHandleChange}/>
            {" "}
            <label htmlFor='price'>Price</label>
            <input type='text'
            value={item.price}
            name='price'
            onChange={onHandleChange}/>
          <button type='submit'>add</button>
        </form>
    </div>
  )
}

export default Form