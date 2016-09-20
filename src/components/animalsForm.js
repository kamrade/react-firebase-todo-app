import React from 'react';
import './animalsForm.css';

var AnimalsForm = React.createClass({
    render: function(){
        return(
            <div>

                <form onSubmit={this.onBearSubmit}>
                    <div className="form-group bears-form">
                        <h3>This is bears form</h3>
                        <label htmlFor="">Add New Bear
                        <input type="text" ref="bear" className="form-control new-bear" onChange={this.onChangeBear}/></label>
                    </div>
                </form>

                <form>
                    <div className="form-group rabbits-form">
                        <h3>This is rabbits form</h3>
                        <label htmlFor="">Rabbit:
                        <input type="text" ref="rabbit" className="form-control new-rabbit" onChange={this.onChangeRabbit}/></label>
                    </div>
                </form>

            </div>
        );
    },
    onChangeRabbit: function(e){
        this.props.changeRabbit(e.target.value);
    },
    onChangeBear: function(e){
        this.props.changeBear(e.target.value);
    },
    onBearSubmit: function(e){
        e.preventDefault();
        const newBear = this.refs.bear.value.trim();
        this.refs.bear.value = "";

        // this.props.addNewTodo( this.refs.text.value.trim() );
        // this.refs.text.value = "";
    }
});

export default AnimalsForm;
