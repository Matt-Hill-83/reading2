import React, { Component } from "react";
import { observer } from "mobx-react";

import { Checkbox } from "@blueprintjs/core";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  checkbox: {
    marginLeft: 16,
    width: 40
  },
  input: {
    flex: 1
  },
  icon: {
    marginRight: 6
  }
};

class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    const { finished, name } = todo.data;

    console.log("todo", todo); // zzz
    console.log("todo.name", todo.name); // zzz

    return (
      <div>
        {name}
        <Checkbox
          style={styles.checkbox}
          onClick={this.onPressCheck}
          checked={finished}
        />
      </div>
    );
  }

  onPressDelete = async () => {
    const { todo } = this.props;
    if (this._deleting) return;
    this._deleting = true;
    try {
      await todo.delete();
      this._deleting = false;
    } catch (err) {
      this._deleting = false;
    }
  };

  onPressCheck = async () => {
    const { todo } = this.props;
    console.log("todo", todo); // zzz

    await todo.update({
      finished: !todo.data.finished
    });
  };

  onTextChange = async (event, newValue) => {
    const { todo } = this.props;
    await todo.update({
      text: newValue
    });
  };
}

export default observer(TodoItem);
