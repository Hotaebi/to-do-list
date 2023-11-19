const Tasks = (props) => {
return (
    <li className="task" key={props.todo.id}>
                        {props.todo.todo}
                        <button onClick={() => props.handleDeleteTodo(props.todo.id)}>
                           Delete
                      </button>
                    </li>
)
}
export default Tasks;