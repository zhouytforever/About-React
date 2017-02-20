'use strict'

import React from 'react';

class TodoFooter extends React.Component{
    handleDeleteClick(e){
        this.props.clearDone();
    }

    handleChangeAll(e){
        this.props.changeTodoState(null,e.target.checked,true)
    }


    render(){
        return(
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={this.props.isAllChecked} onChange={this.handleChangeAll.bind(this)}/>
                </label>
                <span>
                    <span className="text-success">已经完成{this.props.todoDoneCount}</span>
                     / 总共{this.props.todoCount}
                </span>
                <button onClick={this.handleDeleteClick.bind(this)} className="btn btn-danger">删除全部完成事项</button>
            </div>
        )
    }
}

export default TodoFooter;