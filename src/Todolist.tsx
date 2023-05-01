import React from 'react';

type TodolistPropsTitle = {
    track1: string
    track2?: number|boolean

    tasks: Array<TaskType>
}
 type TaskType = {
    id: number
    title: string
    isDone: boolean
}

 export const Todolist = (props: TodolistPropsTitle) => {
    return (
        <div className="todolist">
            <h3>{props.track1}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone}/>
                    <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/>
                    <span>J{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/>
                    <span>{props.tasks[2].title}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;