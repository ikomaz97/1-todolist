import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type ButtonNameType = 'All' | 'Active' | 'Completed'

function App() {

    const [filteredTasks, setFilteredTasks] = useState<ButtonNameType>('All')

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true}, //0
        {id: 2, title: "JS", isDone: true},       //1
        {id: 3, title: "ReactJS", isDone: false},  //2
        {id: 4, title: "ReactJS2", isDone: false}
    ])

    const removeTask = (taskID: number, krasavchik: string) => {
        setTasks(tasks.filter(el => el.id !== taskID))
    }


    const filterTasks = (buttonName: ButtonNameType) => {
        setFilteredTasks(buttonName)
    }
    let durshlag = tasks
    if (filteredTasks === 'Active') {
        durshlag = tasks.filter(el => !el.isDone)
    }
    if (filteredTasks === 'Completed') {
        durshlag = tasks.filter(el => el.isDone)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={durshlag}
                removeTask={removeTask}
                filterTasks={filterTasks}
            />

        </div>
    );
}

export default App;