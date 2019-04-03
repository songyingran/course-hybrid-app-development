import React, { Component } from 'react'
import store from './store';
import { add_todo } from './actions/index';
import {connect} from 'react-redux';
export default class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            list:store.getState().list
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().list
            })
        })
    }
    handleAdd = (e)=>{
        if(e.keyCode===13){
            this.props.dispatch(add_todo(e.target.value));
        }
    }
    
    handleDel = (index)=>{
        dispatch(del_todo(index))
    } 

    render() {
        let {list} = this.props;
        return (
            <div>
                <input onKeyDown={this.handleAdd} type="text"/><br/>
                <ul>
                    {
                        list.map((item,index)=>(
                            <li onClick={()=>handleDel(index)} key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return{
        list:state.list
    }
}

export default connect(mapStateToProps)(TodoList);