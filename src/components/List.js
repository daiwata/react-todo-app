import React from 'react';

export class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { deleteTodo } = this.props
        const list = this.props.todos.map(todo => {
            return (
                <li key={todo.id} >
                    #{todo.id} {todo.title}
                    <input type="button" value="delete"
                        onClick={
                            () => {
                                deleteTodo(todo.id)
                            }}></input>
                </li >
            )
        });
        return (
            <div>
                <ul>{list}</ul>
            </div >
        )
    }

}


