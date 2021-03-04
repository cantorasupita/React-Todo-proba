import React from 'react';



class Item extends React.Component {

   state = {
       label: '',
   }


   onChangeInput = (e) =>{
        this.setState({
            label: e.target.value
        })
   }
   updateGetstate = ()=>{
        this.props.updateSubmit( this.state.label)
        this.setState({
            label: ''
        })
   }



    render(){
    

        let { id, name, done, important, updateItemState } = this.props;
        let { deleteItem, doneItem, importItem, updateItem } = this.props;
    
        let spanClass = '';
        if(done){
            spanClass += ' doneClass';
        }

        if(important){
            spanClass += ' importClass';
        }

        return (
            <li className="list">
                <span  className={spanClass}>
                    { updateItemState === id 
                            ? <input  
                                    onChange={(e) =>this.onChangeInput(e)} 
                                    onBlur={()=> this.updateGetstate() }  
                                    type="text"/>  
                            :  name  }
                </span>
                <span className="spn-btn">
                    <button className="btn-done"onClick={()=> doneItem(id)}>Done</button>
                    <button className="btn-imp" onClick={()=>importItem(id)}>Import</button>
                    <button className="btn-update" onClick={()=>updateItem(id)}>Update</button>
                    <button className="btn-del" onClick={()=> deleteItem(id)}>Delete</button>
                </span>
            </li>
        )
    }

}

export default Item;