import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import "antd/dist/antd.css";
import App from './App';
import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
import AuthExample from './auth/AuthExample';
import TodoList from './TodoList';
ReactDOM.render(
    <div style = {{padding:'30px'}}>
        <Provider>
            <TodoList/>,
        </Provider>
    </div>,
    document.getElementById('root')
)



// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// )

