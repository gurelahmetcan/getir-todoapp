import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button , Form, Header,Image} from 'semantic-ui-react'
import logo from "../img/getirlogo.png"
import '../App.css';


function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
      id: "",
      task: "",
      completed: false
    });
  
    function handleTaskInputChange(e) {
      setTodo({ ...todo, task: e.target.value });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      if (todo.task.trim()) {
        addTodo({ ...todo, id: uuidv4() });
  
        setTodo({ ...todo, task: "" });
      }
    }
  
    return (
      <div className="todo-form">
          <Header  as='h1' style={{color:"#FFD10D"}} >
            <Image circular src={logo} /> Getir Todo List
        </Header>
        <Form onSubmit={handleSubmit}>
          <input 
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
            
          />
          <div style={{padding:10}}></div>
          <Button color="yellow" style={{color:"#5D3EBC"}} type="submit">Add</Button>
        </Form>
      </div>
    );
  }
  
  export default TodoForm;