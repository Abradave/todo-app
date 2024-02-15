import PropTypes from 'prop-types'
import "./ToDoListItems.css";

function ToDoListItems(props) {
    const {todo} = props;

    return ( <li className='todo-list-item'><input type="checkbox" />{todo}</li> );
}

ToDoListItems.propTypes = {
    todo: PropTypes.string.isRequired
}
export default ToDoListItems;