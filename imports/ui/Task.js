import React, { Component } from 'react';

// Task Component - Represents a single todo item
export default class Task extends Component {
    render() {
       return (
           <li>{this.props.task.text}</li>
       );
    }
}