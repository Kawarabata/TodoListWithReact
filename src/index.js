import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Form extends React.Component {
  render() {
    return (
      <input type="text" className="input_form" placeholder=" 今日何する？" />
    );
  }
}

class SubmitButton extends React.Component {
  render() {
    return (
      <button className="submit_button" onClick={() => this.props.onClick()}>
        リストに追加
      </button>
    );
  }
}

const todos = [
  { id: 0, title: "タスク1" },
  { id: 1, title: "タスク2" },
  { id: 2, title: "タスク3" },
  { id: 3, title: "タスク4" }
];

class ListItems extends React.Component {
  render() {
    const list = todos.map(todo => {
      return (
        <li>
          <input type="checkbox" className="task" />
          {this.props.value}
        </li>
      );
    });
    return (
      <div className="List">
        <ul>{list}</ul>
      </div>
    );
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: Array(0).fill(null)
    };
  }
  handleClick() {
    console.log("タスク追加");
  }
  renderSubmitButton() {
    return <SubmitButton onClick={() => this.handleClick()} />;
  }
  renderListItems() {
    return <ListItems value={"aaa"} />;
  }
  //タイトルより下の表示内容
  render() {
    return (
      <div className="Todo">
        <Form />
        <this.renderSubmitButton />
        <ul>
          <this.renderListItems />
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoApp todos={todos} />, rootElement);
