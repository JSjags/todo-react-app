import { useState } from "react"
import TodoForm from "../TodoForm/Index"
import { Wrapper } from "./ListItem.style"


const ListItem = ({todo, id, todosList, setTodos}) => {
    const [editText, setEditText] = useState("beans");
    
    const handleDelete = (id) => {
        const updatedTodos = todosList.filter(t => {
            return t.id !== id
        })
        setTodos(updatedTodos)
    }

    const handleEdit = (id) => {
        for (let i = 0; i < todosList.length; i++) {
            if (todosList[i].edit) return
        }
        const updatedTodos = todosList.map(todo => {

            if(todo.id === id) {
               todo.edit = !todo.edit
            }
            return todo;
        })
        const eT = todosList.find(todo => todo.id === id).text
        setEditText(eT)
        setTodos(updatedTodos)
    }

    const handleComplete = (id) => {
        const updatedTodos = todosList.map(todo => {
            if(todo.id === id) {
               todo.completed = !todo.completed
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    // for editing todos
    

    return (
        todo.edit
        ?
        <TodoForm text="Edit" todos={todosList} setTodos={setTodos} allowEdit={todo.edit} id={todo.id} editText={editText} setEditText={setEditText} />
        :
        <Wrapper hue={todo.hue} completed={todo.completed} >
            <h3>{id + 1}.</h3>
            <p>{todo.text}</p>
            <div className="controls">
                <span onClick={() => handleDelete(todo.id)}>Delete</span>
                <span onClick={() => handleEdit(todo.id)}>Edit</span>
                <span onClick={() => handleComplete(todo.id)}>Completed</span>
            </div>
        </Wrapper>
    )
}

export default ListItem