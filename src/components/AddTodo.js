import React from 'react';

export class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: "" };
    }

    render() {
        const { title } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={title} onChange={this.handleChange} />
                <input type="submit" value="Add to todo list"></input>
            </form>
        )
    }
    handleChange = event => {
        const title = event.target.value;
        this.setState({ title: title })
    }
    handleSubmit = event => {
        const { title } = this.state
        const { addTodo } = this.props
        event.preventDefault()
        addTodo(title)
        this.setState({ title: "" })
    }
}