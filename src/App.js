import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';

import * as firebase from 'firebase';

var App = React.createClass({
    componentDidMount: function(){
        const testRef = firebase.database().ref().child('test');
        const todosRef = firebase.database().ref().child('todos');
        testRef.on('value', snap => {
            console.log(snap.val());
            this.setState({
                title: snap.val()
            })
        });
        todosRef.on('value', snap => {
            this.setState({
                todos: snap.val()
            })
        });

    },
    render: function(){
        return(
            <div>
            <TodoForm
                changeText={this.handlerChangeText}
                addNewTodo={this.handlerAddNewTodo}
            />
            <TodoList />
            </div>
        );
    },
    handlerAddNewTodo: function(newTodo){
        const todosRef = firebase.database().ref().child('todos');
        const createNewTodo = todosRef.push();
        createNewTodo.set({"id": new Date().getTime(), "text": newTodo});
        const path = createNewTodo.toString();
    },
    handlerChangeText: function(text){
        this.setState({text: text});
    }
});

export default App;
