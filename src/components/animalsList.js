// import React, { Component } from 'react';
import React from 'react';
import './animalsList.css';

var AnimalsList = React.createClass({
    render: function(){
        // if (this.props.todos){
        //     var liArray = [];
        //     for(var key in this.props.todos){
        //         liArray.push(this.props.todos[key]);
        //     }
        //     return(
        //         <ul className="list-group">
        //             {/* {
        //                 liArray.map(todo => {
        //                     return <li className="list-group-item" data-key={todo.id} key={todo.id}>
        //                         <span>{todo.text}</span>
        //                         <i className="fa fa-times delete" aria-hidden="true" onClick={this.onDelete}></i>
        //                     </li>
        //                 })
        //             } */}
        //         </ul>
        //     );
        // } else {
        //     return(
        //         <ul></ul>
        //     );
        // }
        return(<div></div>);

    }
    // onDelete: function(e){
    //     const deleteTodoId = e.target.parentNode.getAttribute("data-key");
    //     this.props.deleteTodo(deleteTodoId);
    // }
});

export default AnimalsList;
