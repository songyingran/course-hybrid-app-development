import {ADD_TODO_ITEM} from '../actions/ActionTypes';

let initValue = {
    list:[1,2,3]
}


export default (state,action)=>{
    switch(action.type){
        case ADD_TODO_ITEM:
            let newState = JSON.parse(JSON.stringify(state));
            newState.list.push(action.type);
            return newState;

        case DEL_TODO_ITEM:
            /* let newState1 = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index,1);
            return newState1; */
            return state.filter((item,index)=>{
                return index !== action.index;
            });

        default:
            return state;
    }
}