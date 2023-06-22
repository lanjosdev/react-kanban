// Funcionalidades:
// import { useState } from "react";
import PropTypes from 'prop-types';

// Estilo:
import "./tasklist.css";

// Componentes:
import TaskItem from '../TaskItem/TaskItem';




function Tasklist({ title, taskState, onAddTask, tasks, onTaskUpdate, onDeleteTask }) {
    function addTask() {
        // console.log("chamada dentro do TaskList");
        onAddTask("Digite aqui", taskState);
    }
    
 
    
    return (
        <div className="tasklist">
            <h3 className="title">{title}</h3>
            <div className="content">
                {tasks.map((task)=> {
                    return ( 
                        <TaskItem
                            key={task.id} 
                            id={task.id} 
                            title={task.title} 
                            taskState={task.state}
                            onTaskUpdate={onTaskUpdate}
                            onDeleteTask={onDeleteTask}
                        />
                    );
                })}
                {tasks.length === 0 && <p>Lista Vazia</p>}
            </div>
            
            <button onClick={addTask}>
                <img src="plus-icon.svg" alt="" />
                Adicionar Tarefa
            </button>
        </div>
    );
}
export default Tasklist;






Tasklist.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}