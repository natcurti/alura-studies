import React from "react";
import { Button } from "../Button";
import style from "./Form.module.scss";
import { ITask } from "../../types/ITask";
import { v4 as uuidv4 } from "uuid";

export class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00:00",
  };

  addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, selected: false, concluded: false, id: uuidv4() },
    ]);
    this.setState({
      task: "",
      time: "00:00:00",
    });
    console.log(this.state);
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar?"
            required
            value={this.state.task}
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            }
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo:</label>
          <input
            type="time"
            name="time"
            id="time"
            step="1"
            min="00:00:00"
            max="01:30:00"
            required
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}
