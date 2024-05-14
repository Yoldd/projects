import React,{useEffect, useState} from 'react';
import './App.css';
import Form from './comps/Form';
import List from './comps/List';
import Total from './comps/Total';
import { v4 } from 'uuid'


function App() {
 
const [item, setItem] = useState({item: "", price: ''});
const [item_list, set_item_list] = useState([]);
const [newVals, setNewVals] = useState([]);
const [total, setTotal] = useState(0);
const [isEditing, setEditing] = useState(false)
const [getId, setgetId] = useState('')


useEffect(() => {
 reduce()
}, [item_list]);

// useEffect(() => {
//   setVals(item_list.map(x => (Number(x.price))))
// }, [item_list])



  //functions and components 
  const onSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const newElems = item_list;
      const newElem = { item: item.item, price: item.price, id: getId };

      for (let i = 0; i < newElems.length; i++) {
        if (newElems[i].id === newElem.id) {
          newElems[i] = newElem;

          set_item_list(newElems);
        }
      }
    } else {
      const newData = { id: v4(), item: item.item, price: item.price };

      set_item_list((prevValues) => [...prevValues, newData]);
    }

    setItem({ item: "", price: "" });
    reduce();
    setEditing(false);
  };







//handle delete 
const deleted =(id)=>{

const newElems = item_list.filter(elems => elems.id !== id)

set_item_list(newElems);

reduce()
}

//handle total

const reduce = () =>{
// const elems = item_list.map(function (elem){ return elem.price});

// console.log(elems)

if (item_list.length < 1){
  setTotal(0)
}else {
  const totalPrice = item_list.reduce((accumulator, currentItem) => {
    return accumulator +  Number(currentItem.price);
  }, 0)

  setTotal(()=> totalPrice)
}
}


const edit =(elem) =>{

  setItem({item: elem.item, price: elem.price})
  setEditing(true)
  setgetId(elem.id)
  
}

const doneEdit =()=>{
  setEditing(false);
  setItem({item: '', price: ''})
  console.log('edited item ', item.id)
}

const back =()=>{
  return;
}
  return (
    <div className="App">
      
        <Form item = {item}
        setItem = {setItem}
        set_item_list={set_item_list}
        onSubmit={onSubmit}
        isEditing={isEditing}
        setEditing= {setEditing}
        back={back}
        doneEdit={doneEdit}/>
 <br></br>
        <List item_list = {item_list}
        set_item_list ={set_item_list}
       deleted = {deleted} 
       edit = {edit}/>
          <br></br>
        <Total  total ={total}/>
      


      
    </div>
  );
}

export default App;
