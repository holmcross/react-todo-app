import React from "react"

class TodoItem extends React.Component {

  //the this.props.todo.id arguement is sent back to TodoContainer to identify which component was
  //  clicked
  render(){
    return <li>
      <input
        type="checkbox"
        checked={this.props.todo.completed}
        //on change, run the handleChange function passed from TodoContainer
        onChange={() => this.props.handleChangeProps(this.props.todo.id)}
      />
      <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
      {this.props.todo.title}
    </li>
  }
}

export default TodoItem