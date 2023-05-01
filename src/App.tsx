import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";


function App() {
    const shapka1 = "shapka1"

    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist track1={shapka1} track2={100200} tasks={tasks1}/>
        </div>
    );
}

export default App;
