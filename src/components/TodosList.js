import React from "react"
import TodoItem from "./TodoItem"

class TodosList extends React.Component {

  render() {
      // accesses the state data passed via props from TodoContainer component
    return (
      <ul>
        
        {this.props.todos.map(todo => ( 
            // for each element in todo, create a TodoItem component (which is a li elemet) 
            //    with key & todo attributes
              <TodoItem
              // no .props is needed to access todo because we already accessed it via props in the map function
                key={todo.id}
                todo={todo}
                handleChangeProps={this.props.handleChangeProps}
                deleteTodoProps={this.props.deleteTodoProps}
                setUpdate={this.props.setUpdate}
              />
        ))}
      </ul>
    )
  }
}

export default TodosList