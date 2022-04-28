// import { listId } from "../../../helperFunctions";
import ListItem from "../ListItem/Index";
import { Wrapper, Content } from "./TodoList.style"

const TodoList = ({todoList, setTodos}) => (
    <Wrapper>
        <Content>
            {todoList.map((todo, i) => (
                <ListItem key={i} todo={todo} id={i} todosList={todoList} setTodos={setTodos}/>
            ))}
        </Content>
    </Wrapper>
);

export default TodoList;