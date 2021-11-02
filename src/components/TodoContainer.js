import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";

import "./App.css"

class TodoContainer extends React.Component {

    state = {
        todos: [
          {
            id: uuidv4(),
            title: "Setup development environment",
            completed: true
          },
          {
            id: uuidv4(),
            title: "Develop website and add content",
            completed: false
          },
          {
            id: uuidv4(),
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

    addTodoItem = title => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    };

    // render() returns a jsx object

    // passes state info to TodosList component via props, inluding change handler method
    render() {
        return (
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={this.addTodoItem}/>
              <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} 
                deleteTodoProps={this.delTodo}/>
            </div>
          </div>
        );
      }
}
export default TodoContainer