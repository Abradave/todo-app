import PropTypes from "prop-types";

function ToDoForm(props) {
    const { newTodoRef, addClick } = props
    

    return (

        <section>
            <h2>Teendő hozzáadása</h2>
            <label>Feladat:
                <br />
                <input type="text" placeholder='Feladat' ref={newTodoRef} />
            </label>
            <br />
            <button type="button" onClick={() => addClick()}>Hozzáad</button>
        </section>
    );
}

ToDoForm.propTypes = {
   newTodoRef: PropTypes.any.isRequired,
    addClick: PropTypes.func.isRequired
}

export default ToDoForm;