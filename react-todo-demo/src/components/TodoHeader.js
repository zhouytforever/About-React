/**
 * Created by yikun on 16/05/06.
 */

'use strict';

import React from 'react';

class TodoHeader extends React.Component {

    handleKeyUp(e) {
        let value = e.target.value;
        if (e.keyCode == 13 && value != null && "" != value) {
            let item = {
                text: value,
                isDone: false
            }
            e.target.value = null;
            this.props.addItem(item);
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp.bind(this)} placeholder="请输入待办事项，回车完成"/>
            </div>
        )
    }


}

export default TodoHeader;