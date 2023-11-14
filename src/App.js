import './App.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import TodoList from './components/TodoList';
import todos from './data/todos.json';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';

class App extends Component {
  state = {
    todos,
    filter:''
  };

  deleteTodo = delId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== delId),
    }));
  };

  toggleTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  addTodo = text => {
    const todo = { id: nanoid(), text, completed: false };

    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  };

  handleFilter = (e) => {
    console.log('asdasd', );
    
    this.setState({filter:e.currentTarget.value});
  }

  render() {
    const { todos, filter } = this.state;
    const { deleteTodo, addTodo, toggleTodo, handleFilter } = this;

    const normalizedFilter = filter.toLowerCase();
    const filteredTodos = todos.filter(({text}) => text.toLowerCase().includes(normalizedFilter));

    return (
      <div className="App">
        <Filter value={filter} onChange={handleFilter}/>
        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
        <TodoEditor onSubmit={addTodo} />
      </div>
    );
  }
}

export default App;
