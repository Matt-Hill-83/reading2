import React, { Component } from "react";
import { observer } from "mobx-react";
import { todos } from "./store";
import Checkbox from "material-ui/Checkbox";
import TodoItem from "./TodoItem";
// test!!!!!!!!!!!!!!!!!

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  loader: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid #DDD"
  },
  content: {
    flex: 1,
    overflowY: "scroll"
  }
};

const Todos = observer(
  class Todos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        disabled: false
      };
    }

    render() {
      const { docs, query } = todos;
      const children = docs.map(todo => <TodoItem key={todo.id} todo={todo} />);
      const { isLoading } = todos;

      return (
        <div style={styles.container}>
          <div style={styles.content} className="mobile-margins">
            {children}
          </div>
          {isLoading ? <div style={styles.loader}>loading</div> : undefined}
        </div>
      );
    }

    onCheckDisable = () => {
      this.setState({
        disabled: !this.state.disabled
      });
    };
  }
);

export default Todos;
