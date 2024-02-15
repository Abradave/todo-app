import ToDoListItems from "./ToDoListItems";
import PropTypes from "prop-types";

function ToDoList(props) {
    const { todos } = props;

    return ( 
        <section>
        <h2>Teendők</h2>
        <ul>
            {todos.map((todo) => (<ToDoListItems key={todo} todo={todo} /> ))}
        </ul>
      </section>
     );
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default ToDoList;