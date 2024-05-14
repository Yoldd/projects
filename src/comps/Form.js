import React from 'react'

const Form = ({item,
     setItem,
    onSubmit,
  isEditing,
setEditing,
back,
doneEdit}) => {

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
            {(isEditing) ?
            <> <button className='btn btn-outline-success' type='submit'>done</button> {" "}
          <button className='btn btn-outline-danger' onClick={back} >back</button> 
          </>
          :

          <button className='btn btn-success' type='submit'> add</button> 
          
            }
        </form>
    </div>
  )
}

export default Form