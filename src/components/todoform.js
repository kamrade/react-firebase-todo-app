import React, { Component } from 'react';
import './todoform.css';

var TodoForm = React.createClass({
    render: function(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Add New Todo
                        <input type="text" ref="text" className="form-control" onChange={this.onChangeInput}/>
                    </label>
                    </div>
                </form>
            </div>
        );
    },
    onChangeInput: function(e){
        this.props.changeText(e.target.value);
    },
    onSubmit: function(e){
        e.preventDefault();
        this.props.addNewTodo( this.refs.text.value.trim() );
        this.refs.text.value = "";
    }
});

export default TodoForm;
