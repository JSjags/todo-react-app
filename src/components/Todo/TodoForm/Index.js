import { useState } from "react";
import { listId, randomHue } from "../../../helperFunctions";
import { Form } from "./TodoForm.styles";

const TodoForm = ({todos, setTodos, text, allowEdit, editText, setEditText, id}) => {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim().length < 1) return;

        const newTodo = {
        text: input,
        id: listId(),
        hue: randomHue(),
        completed: false,
        edit: false
        };

        if (todos.length > 1) {
        todos.forEach((todo) => {
            if (typeof todo.hue === "function") {
            const myHue = todo.hue;
            todo.hue = myHue;
            } else {
            const num = todo.hue;
            todo.hue = num;
            }
        });
        setTodos([newTodo, ...todos]);
        } else {
        setTodos([newTodo, ...todos]);
        }

        setInput("");
    };

    // for editing todo

    const handleEditInput = (e) => {
        setEditText(e.target.value);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        if (editText.length < 1) return;
        if (editText.trim().length < 1) return;

        const updatedTodos = todos.map(t => {
            if(t.id === id) {
                t.text = editText
                t.edit = !t.edit
            }
            return t
        })

        setTodos((prev) => {
            prev = updatedTodos
            return prev;
        });     
    };

    return(
        allowEdit
        ?
        <Form allowEdit={allowEdit} onSubmit={handleEditSubmit}>
          <input
            type="text"
            placeholder="Edit todo"
            autoCapitalize="on"
            onChange={handleEditInput}
            value={editText}
          />
          <button>{text}</button>
        </Form>
        :
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What to do..."
            autoCapitalize="on"
            onChange={handleInput}
            value={input}
          />
          <button>{text}</button>
        </Form>
    )
}

export default TodoForm;