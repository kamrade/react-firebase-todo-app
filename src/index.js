import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';



// Initialize Firebase
var config = {
	apiKey: "AIzaSyBFe5i2zIoea_ODI3UMgEnvcrP98wwHeRg",
	authDomain: "react-todo-29a96.firebaseapp.com",
	databaseURL: "https://react-todo-29a96.firebaseio.com",
	storageBucket: "react-todo-29a96.appspot.com",
	messagingSenderId: "35019857529"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
