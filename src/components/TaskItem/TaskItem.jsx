// Funcionalidades:
import { useState } from "react";
import PropTypes from "prop-types";

import "./task-item.css"

export default function TaskItem({ id, title, taskState, onTaskUpdate, onDeleteTask }) {
    const [isEdit, setIsEdit] = useState(false);
    const [editTitle, setEditTitle] = useState(title);

    function onEditTitle(event) {
        const newTitle = event.target.value;
        setEditTitle(newTitle);
        onTaskUpdate(id, newTitle, taskState);
    }

    function onKeyDown(event) {
        if(event.key === "Enter") {
            onBtOkDown();
        }
    }
    function onBtOkDown() {
        setIsEdit(false);
        if(editTitle.length === 0) {
            onDeleteTask(id);
        }
    } 

    function onTaskStateChange(event) {
        onTaskUpdate(id, title, event.target.value);
    }

    // if(isEdit) {
    //     return (
    //         <input 
    //             type="text"
    //             value={editTitle}
    //             onChange={onEditTitle} 
    //             onKeyDown={onKeyDown} 
    //         />
    //     )
    // } else {
    //     return <div onClick={(e)=> setIsEdit(true)}>{editTitle}</div>
    // }

    return (
        <>
        {(isEdit) ? (
            <div className="yesEdit">
                <div>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={onEditTitle}
                        onKeyDown={onKeyDown}
                    />
                    <button onClick={onBtOkDown}><img src="icons8-selecionado.svg" alt="" /></button>
                </div>

                <label htmlFor="status">Status:</label>
                <select id="status" onChange={onTaskStateChange} value={taskState}>
                    <option value="a fazer">A fazer</option>
                    <option value="em andamento">Em andamento</option>
                    <option value="concluido">Concluído</option>
                </select>
            </div>
        ) : (
            <div className="notEdit" onClick={(e)=> setIsEdit(true)}>
                <div>{editTitle}</div>
                <button><img src="icons8-edit.svg" alt="" /></button>
            </div>
        )}
        </>
    )
}

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired
}