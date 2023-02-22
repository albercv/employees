import React, { useState } from 'react'

export const Task = () => {

    const [tasks, setTasks] = useState([]);

    const addTask = e => {
        e.preventDefault();
        if (!tasks.includes(e.target.task.value))
            setTasks(task => [...task, e.target.task.value])

        console.log("Adding task " + e.target.task.value)
    }

    const deleteTask = (index) => {
        console.log(`Deleting index: ${index}`)
        let filteredTasks = tasks.filter((task, id) =>
            id !== index
        )
        setTasks(filteredTasks)
    }

    return (
        <div className='taskContainer'>
            <h1>Tareas:</h1>
            <form onSubmit={addTask}>
                <input type="text" name="task" placeholder='Escribe tu tarea' />
                <input type='submit' value="Save" />
            </form>

            <hr />
            <h3>Listado de tareas:</h3>
            {tasks.map((task, index) => {
                return (
                    <div key={index} className="task">
                        <h6>
                            {task}
                        </h6>
                        <button onClick={() => deleteTask(index)}>
                            X
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
