import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import AnimalsForm from './components/animalsForm';
import AnimalsList from './components/animalsList';

import * as firebase from 'firebase';

var App = React.createClass({
    componentWillMount: function(){
        const rabbitRef = firebase.database().ref().child('rabbit');


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
                changeRabbit={this.handlerChangeRabbit}
            />
            <AnimalsList
                {...this.state}
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

});

export default App;
