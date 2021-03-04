import React from 'react';
import './itemList.css';
import Item from './item/item';





const ItemList = (props) => {

    //console.log(props);

    let results = props.currentTodos.map((item, id)=> {
        return (
            <Item 
                key={id} 
                {...item}
                deleteItem={props.deleteItem}
                importItem={props.importItem}
                doneItem={props.doneItem}
                updateItem={props.updateItem}
                updateItemState={props.updateItemState}
                updateSubmit={props.updateSubmit}/> 
        )
    });

    return (
        <ul className="itemList">
            { results }
        </ul>
    )
}




export default ItemList;