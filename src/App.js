import React, { Component } from 'react';
import ListItems from './ListItems';
import 'tachyons';
import './App.css';


class App extends Component{
	constructor(props){
		super(props);
		this.state = ({
			items: [],
			text: ''
		});
	    
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit =this.handleSubmit.bind(this);
	    this.deleteItem=this.deleteItem.bind(this);
}

 render(){
 	return(
          <div  className='App' >
            <h1>Todos</h1>
             <p>what needs to be done</p>
             
             <form className='to-do' onSubmit= {this.handleSubmit}>
             <input 
             placeholder='Enter text'
             id ='new-todo'
             type='text'
             value= {this.state.text}
             onChange={this.handleChange} />

             <button >
               Add {this.state.items.length}
             </button>

             <ListItems items ={this.state.items } 
                        deleteItem ={this.deleteItem} 
              />

            </form>
          </div>
 		);
 }


		handleChange =(event)=>{	
			this.setState({
				text: event.target.value
			})

		}

		handleSubmit =(event)=>{
		    event.preventDefault();
		    if (this.state.text.length === 0){
		    	return;
		    }

		    const newItem = {
		    	text: this.state.text,
		    	id: Date.now()
		    }
		    this.setState(state => ({
		    	items: state.items.concat(newItem),
		    	text: ''
		    }));
        }

      deleteItem =(id)=>{
      	const filteredItem = this.state.items.filter(item=>
      		item.id!== id);
            this.setState({
            	 items: filteredItem
            })
      }

}
export default App;
