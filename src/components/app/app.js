import React from 'react';
import './app.css';

import Header from '../header/header';
import Filter from '../filter/filter';
import ItemList from '../itemList/itemList';
import AddItem from '../additem/addItem';


class App extends React.Component {

    //=====================================================================

    createItem(name){
        return {
            id: Math.floor(Math.random() * 1000001), 
            name: name, 
            done: false, 
            important: false
        }
    }//=================================================
    state = {
        item : [
            this.createItem('mamaika'),
            this.createItem('Tatica'),
            this.createItem('Ugoli'),
            this.createItem('Mulargaa'),
            this.createItem('Higande'),
            this.createItem('la pantera negra')
        ],
        filter : 'all',
        updateItemState: null,
        currentPage: 1,
        todosPerPage: 3,
        
    }


    handleClick = (event)=> {
        console.log(event.target.id)
        this.setState({
          currentPage: event.target.id
        });
    }

    //=====================================================================




   

    doneNumberFn(){
        let clonItem = [...this.state.item];
        let result = clonItem.filter(item => item.done);
        this.setState({
            doneNumber : result
        })
    }
    importantNumberFn(){
        let clonItem = [...this.state.item];
        let result = clonItem.filter(item => item.important);
        this.setState({
            importantNumber : result
        })
    }



  

    //===================================================================

    deleteItem = (id) => {
        let clonItem = [...this.state.item];
        let idItem = clonItem.filter(item => item.id !== id)
        this.setState({item : idItem });
        this.doneNumberFn();
        this.importantNumberFn();
    }


    importItem = (id) => {
        let clonItem = [...this.state.item];
        clonItem.map(item => {
            if(item.id === id){
                return item.important = !item.important
            }
            return item;
        })
        this.setState({item: clonItem});
        this.doneNumberFn();
        this.importantNumberFn();
    }


    doneItem = (id) => {
       let clonItem = [...this.state.item];
       clonItem.map(item=> {
           if(item.id === id){
                return item.done = !item.done
           }
           return item;
       })
       this.setState({item: clonItem})
       this.doneNumberFn();
       this.importantNumberFn();
    }


    addItem = (data) => {
        //console.log(data)
        let clonItem = [
            ...this.state.item,
            this.createItem(data)
        ];
        this.setState({
            item : clonItem
        })
        this.doneNumberFn();
        this.importantNumberFn();
    }


    //update===========================================================
    updateItem = (id) => {
        this.setState({
            updateItemState: id
       })
    }
    updateSubmit = (data) => {
        let dat = data.trim();

        let clonState = [
            ...this.state.item
        ];


        if(dat.length > 0){
            clonState.map(item=> {
                return item.id === this.state.updateItemState ? item.name = data: null
            });
            this.setState({
                item: clonState,
                updateItemState: null
            });
        }else {
            this.setState({
                item: clonState,
                updateItemState: null
            });
        }

    }



    //filtr
    filterBtn = (btn) =>{
        console.log(btn)
        this.setState({
            filter : btn
        })
    }





    

    //===========================================================
    render(){


        //itemCount========================================================
        const doneCount = this.state.item.filter(el => el.done).length;
        const importantCount = this.state.item.filter(el => el.important).length;


        //filter=======================================================
        let itemList = ''
        if(this.state.filter === 'all'){
            itemList = this.state.item;
        }else if(this.state.filter === 'done'){
            itemList = this.state.item.filter(item => item.done)      
        }else if(this.state.filter === 'important'){
            itemList = this.state.item.filter(item => item.important)
        }

        

       //pagination=====================================================================
        const {  currentPage, todosPerPage } = this.state;
        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = itemList.slice(indexOfFirstTodo, indexOfLastTodo);

  
        // pagination link=======================================================================
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil( itemList.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li
                key={number}
                id={number}
                onClick={this.handleClick}
              >
                 --- {number} ---
              </li>
            );
        });




  

        //return======================================================
        return (
            <div className="wrapper">
                
                <Header 
                    important={importantCount}
                    done={doneCount}/>
    
                <Filter 
                    filterBtn={this.filterBtn}
                    filter={this.state.filter}/>
      
                <ItemList 
                    currentTodos={currentTodos}
                    item={itemList} 
                    updateItemState={this.state.updateItemState}
                    doneItem={this.doneItem}
                    deleteItem={this.deleteItem}
                    importItem={this.importItem}
                    updateItem={this.updateItem}
                    updateSubmit={this.updateSubmit}/>
            
                <AddItem 
                    addItem={this.addItem}/>
    

                <div className='pagination'>
                    {renderPageNumbers}
                </div>

               
            </div>
        )
    }
  
}
export default App;