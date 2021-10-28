import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {

    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
    };
    // for our todoItem state change, id will be passed from the child component who was clicked
    // event handler 
    handleChange = id => {
      console.log("clicked", id);
      this.setState(prevState => ({
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        }),
      }))
    };

    delTodo = id => {
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id;
          })
        ]
      });
      console.log("deleted", id)
    };

    // render() returns a jsx object

    // passes state info to TodosList component via props, inluding change handler method
    render() {
        return (
          <div>
            <Header />
            <InputTodo />
            <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} 
              deleteTodoProps={this.delTodo}/>
          </div>
        );
      }
}
export default TodoContainer