/**
 * Created by yikun on 16/05/06.
 */

'use strict';

import React from 'react';

class TodoItem extends React.Component{

    handleChange(e){
        let isDone = this.props.isDone;
        this.props.changeTodoState(this.props.index,!isDone);
    }

    handleMouseOver(e){
        React.findDOMNode(this).style.background = "#aaa";
        React.findDOMNode(this.refs.delButton).style.display = "inline-block";
    }

    handleMouseOut(e) {
        React.findDOMNode(this).style.background = "#fff";
        React.findDOMNode(this.refs.delButton).style.display = "none";
    }

    deleteTodoItem(e){
        this.props.deleteTodo(this.props.index);
    }

    render(){
        let className = this.props.isDone ? 'task-done' : '';
        return (
            <li onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >
                <label>
                    <input type="checkbox" checked={this.props.isDone} onChange={this.handleChange.bind(this)}/>
                    <span className={className}>{this.props.text}</span>
                </label>
                <button onClick={this.deleteTodoItem.bind(this)} className="btn btn-danger" ref="delButton">删除</button>
            </li>
        )
    }
}

export default TodoItem;