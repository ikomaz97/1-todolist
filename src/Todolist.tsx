import React from 'react';

type TodolistPropsTitle = {
    track1: string
    track2?: number | boolean

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
                {props.tasks.map((el) => {
                        debugger
                        return (

                            <li key={el.id}>
                                <button onClick={() => {console.log(el.id)}}>X
                                </button>
                                <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                                <span>{el.title}</span>
                            </li>
                        )


                    }
                )
                }


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

