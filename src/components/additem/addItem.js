import React from 'react';
import './addItem.css';


class AddItem extends React.Component {

    state = {
        input : ''
    }

    onChangeValue = (e)  => {
        this.setState({
            input : e.target.value
        })
    }

    onSubmitSend = () => {
        this.props.addItem(this.state.input.trim());
        this.setState({ input : ''})
    }

    render(){
        return (
            <div className="addItem">
                <input 
                    type="text"  
                    onChange={ (e)=> this.onChangeValue(e)}
                    value={this.state.input}/>
                <button onClick={this.onSubmitSend}>add</button>
            </div>
        );
    }
    
  
}


export default AddItem;