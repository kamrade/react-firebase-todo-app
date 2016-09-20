import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';

import * as firebase from 'firebase';

var App = React.createClass({
    componentDidMount: function(){
        const titleRef = firebase.database().ref().child('title');
        const todosRef = firebase.database().ref().child('todos');
        titleRef.on('value', snap => {
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
        var title = "Default title";
        if(this.state){
            title = this.state.title;
        }
        return(
            <div>
                <h1 className="title">{ title }</h1>
                <TodoForm
                    changeText={this.handlerChangeText}
                    addNewTodo={this.handlerAddNewTodo}
                />
                <TodoList
                    {...this.state}
                />
            </div>
        );
    },
    handlerAddNewTodo: function(newValue){
        // меняем заголовок
        const titleRef = firebase.database().ref().child('title');
        titleRef.set(newValue);

        // const createNewTodo = todosRef.push();
        // createNewTodo.set({"id": new Date().getTime(), "text": newTodo});
        // const path = createNewTodo.toString();
    },
    handlerChangeText: function(text){
        this.setState({text: text});
    }
});

export default App;
