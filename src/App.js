import React,{useState} from 'react';
import './App.css';
import Form from './comps/Form';
import List from './comps/List';


function App() {
const [item, setItem] = useState({item: "", price: 0, id: 1});
const [item_list, set_item_list] = useState([]);




  //functions and components 
  const onSubmit = e => {
    e.preventDefault()

    set_item_list((prevValues)=> (
        [...prevValues, item]
    ))
console.log(item_list)
    
}



  return (
    <div className="App">
      
        <Form item = {item}
        setItem = {setItem}
        set_item_list={set_item_list}
        onSubmit={onSubmit} />

        <List item_list = {item_list}
        set_item_list ={set_item_list} />
      
    </div>
  );
}

export default App;
