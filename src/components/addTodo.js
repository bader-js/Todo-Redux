import React, { Component } from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { changeTodo, addTodo } from "../actions/action";

class AddToDo extends Component {
  render() {
    return (
      <div className="border border-danger p-4">
        <h1 className="text-right font-weight-bold text-danger m-3">
          To-Do Bader!!
        </h1>
        <h5 className="text-right text-danger m-3">Add New To-Do</h5>
        <input
          type="text"
          placeholder="ekteb houni"
          className="rounded w-100 p-3 m-2 text-danger"
          id="new-task"
          onChange={event => this.props.changeTodo(event)}
          value={this.props.task}
        />
        <div className="d-flex justify-content-end m-2">
          <button
            className="btn btn-primary btn-outline-primary border-primary pl-3 pr-3 btn-lg"
            id="add"
            onClick={this.props.addTodo}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    task: state.task,
    tasklist: state.tasklist,
    iscompleted: state.iscompleted,
    edittask: state.edittask
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeTodo: event => {
      dispatch(changeTodo(event));
    },
    addTodo: () => {
      dispatch(addTodo());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);