import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import AnimalsForm from './components/animalsForm';
import AnimalsList from './components/animalsList';

import * as firebase from 'firebase';

var App = React.createClass({
    componentWillMount: function(){
        const testRef = firebase.database().ref().child('test');
        // const todosRef = firebase.database().ref().child('todos');
        const rabbitRef = firebase.database().ref().child('rabbit');

        // title
        testRef.on('value', snap => {
            this.setState({
                title: snap.val()
            })
        });

        // todos
        // todosRef.on('value', snap => {
        //     this.setState({
        //         todos: snap.val()
        //     })
        // });

        // rabbit
        rabbitRef.on('value', snap => {
            this.setState({
                rabbit: snap.val()
            })
        }, function(errorObject){
            console.log("fail: " + errorObject.code);
        });

    },
    render: function(){
        return(
            <div>
            <AnimalsForm
                changeBear={this.handlerChangeBear}
                // addNewTodo={this.handlerAddNewTodo}
                changeRabbit={this.handlerChangeRabbit}
            />
            <AnimalsList
                {...this.state}
                deleteTodo={this.handlerDeleteTodo}
            />
            </div>
        );
    },

    // handlers
    handlerChangeRabbit: function(rabbit){
        const rabbitRef = firebase.database().ref().child('rabbit');
        rabbitRef.set(rabbit);
    },
    handlerChangeBear: function(bear){
        this.setState({bear: bear});
    }



    // handlerDeleteTodo: function(deleteTodoId){
    //     console.log(deleteTodoId);
    // },

    // handlerAddNewTodo: function(newTodo){
    //     const todosRef = firebase.database().ref().child('todos');
    //     const createNewTodo = todosRef.push();
    //     createNewTodo.set({"id": new Date().getTime(), "text": newTodo});
    //     const path = createNewTodo.toString();
    // }


});

export default App;
