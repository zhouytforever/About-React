'use strict'

import React from 'react';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
import TodoFooter from './TodoFooter';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            isAllChecked: false
        }
    }

    addItem(todo) {
        this.state.todos.push(todo);
        this.checkAllDone();
    }

    checkAllDone(){
        this.setState({
            todos: this.state.todos,
            isAllChecked:this.state.todos.every((item) => item.isDone )});
    }

    changeTodoState(index, isDone, isAll) {
        debugger;
        if (isAll) {
            this.setState({
                todos: this.state.todos.map((item) => {
                    item.isDone = isDone;
                    return item;
                }),
                isAllChecked: isDone});
        } else {
            let todos = this.state.todos;
            todos[index].isDone = isDone;
            this.setState({
                todos:todos,
                isAllChecked:this.checkAllDone()
            })
        }
    }

    deleteTodo(index) {
        this.state.todos.splice(index,1);
        this.checkAllDone();
    }

    clearDone(){
        let todos = this.state.todos.filter((item) => !item.isDone );
        this.setState({todos:todos,isAllChecked:false});
    }

    render() {
        let info = {
            todoCount: this.state.todos.length,
            isAllChecked: this.state.isAllChecked,
            todoDoneCount: this.state.todos.reduce((all, todo) => all + todo.isDone, 0)
        };

        return (
            <div className="todo-wrap">
                <TodoHeader addItem={this.addItem.bind(this)}/>
                <TodoMain changeTodoState={this.changeTodoState.bind(this)} deleteTodo={this.deleteTodo.bind(this)} todos={this.state.todos}/>
                <TodoFooter {...info} changeTodoState={this.changeTodoState.bind(this)} clearDone={this.clearDone.bind(this)}/>
            </div>
        );
    }
}

React.render(
    <App></App>,
    document.getElementById('app')
)