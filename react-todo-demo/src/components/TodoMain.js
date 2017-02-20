'use strict'

import React from 'react';
import TodoItem from './TodoItem.js';

class TodoMain extends React.Component{

    render(){
        if(this.props.todos.length == 0){
            return (
                <div className="todo-empty">没有待办事项</div>
            )
        }else{
            return(
                <ul className="todo-main">
                    {
                        this.props.todos.map((todo,index) => {
                            return(
                                <TodoItem text={todo.text} index={index} {...this.props} isDone={todo.isDone} />
                            )
                        })
                    }
                </ul>
            )
        }
    }
}

export default TodoMain;