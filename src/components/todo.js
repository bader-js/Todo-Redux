import React, { Component } from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import {
  completeTodo,
  removeTodo,
  editTodo
} from "../actions/action";

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.tasklist.map((e, i) => (
          <li key={i} className="list-group-item row text-left">
            <button
              className="btn btn-outline-danger m-1 col-2"
              onClick={() => this.props.removeTodo(i)}
              >
              Remove
            </button>

            <button
              className={
                "btn m-1 col-2 " +
                (this.props.iscompleted[i]
                  ? " btn-secondary"
                  : " btn btn-outline-success")
              }
              onClick={() => this.props.completeTodo(i)}
            >
              {!this.props.iscompleted[i] ? "Complete" : "Undo"}
            </button>
            <span
              className={
                "task-text m-1 col-2 " +
                (this.props.iscompleted[i] ? "text-secondary task-comp" : "")
              }
            >
              {e}
            </span>
            <button
              className="bg-transparent border-0 float-right col-1 m-1"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => this.props.editTodo(i)}
            >
              <span>EDIT</span>
            </button>
          </li>
        ))}
      </ul>
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
    completeTodo: index => {
      dispatch(completeTodo(index));
    },

    removeTodo: index => {
      dispatch(removeTodo(index));
    },

    editTodo: index => {
      dispatch(editTodo(index));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);