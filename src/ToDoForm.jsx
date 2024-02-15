import PropTypes from "prop-types";

function ToDoForm(props) {
    const { newTodo, setNewTodo, addClick } = props
    return (

        <section>
            <h2>Teendő hozzáadása</h2>
            <label>Feladat:
                <br />
                <input type="text" placeholder='Feladat' value={newTodo} onInput={event => setNewTodo(event.currentTarget.value)} />
            </label>
            <br />
            <button type="button" onClick={() => addClick()}>Hozzáad</button>
        </section>
    );
}

ToDoForm.propTypes = {
    newTodo: PropTypes.string.isRequired,
    setNewTodo: PropTypes.func.isRequired,
    addClick: PropTypes.func.isRequired
}

export default ToDoForm;