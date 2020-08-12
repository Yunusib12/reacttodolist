import React, { Component } from 'react';
import './style.css';


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            dbTaskList: [
                {
                    id: 1,
                    name: "Grocery"
                },
                {
                    id: 2,
                    name: "Network"
                }
            ]
        }
        console.log(this.state.selected);
    }

    displayTaskList() {
        return this.state.dbTaskList.map((task) => {
            console.log(task);
            return (
                <li
                    key={task.id}
                    onClick={(e) => {
                        this.setState({ selected: task.id })
                    }}>
                    {task.name}
                </li>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <ul className="task-list">{this.displayTaskList()}</ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Task;