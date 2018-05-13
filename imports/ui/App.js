import React, { Component } from 'react';

import Task from './Task.js';

// App component - represent the whole app
export default class App extends Component {
    getTasks() {
       return [
           { _id: 1, text: 'This is a Performance Form  - 2018'},
           { _id: 2, text: 'This is a Performance Form  - 2017'},
           { _id: 3, text: 'This is a Performance Form  - 2016'},
       ];
    }

    renderTasks() {
       return this.getTasks().map((task) => (
         <Task key={task._id} task={task} />
       ));
    }

    render() {
       return (
          <div className="container">
            <header>
                <h1>Performance Form List</h1>
            </header>

            <ul>
                {this.renderTasks()}
            </ul>
          </div>
       );
    }
}

