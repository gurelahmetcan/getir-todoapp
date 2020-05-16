import React from 'react';
import { Icon, Checkbox, List } from 'semantic-ui-react'

function Todo({todo, toggleComplete, removeTodo}){

    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }
    function handleRemoveClick(){
        removeTodo(todo.id);
    }
    return(
    <List style={{display: "flex"}}>
        <Checkbox 
        checked={todo.completed}
        className="check" 
        onClick={handleCheckboxClick} 
        />
        <li
            style={{
                textDecoration: todo.completed ? "line-through" : null
            }}
        
        >{todo.task}</li>
        <Icon inverted color='yellow' link name="close" onClick={handleRemoveClick}></Icon>
        </List>
    );
}

export default Todo;