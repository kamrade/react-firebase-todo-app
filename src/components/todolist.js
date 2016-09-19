import React, { Component } from 'react';
import './todolist.css';

var TodoList = React.createClass({
  render: function(){
    console.log(this.props.todos);
    return(
      <ul>

      </ul>
    );
  }
});

export default TodoList;
