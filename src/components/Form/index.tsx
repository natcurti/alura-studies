import React, { useState } from "react";
import { Button } from "../Button";
import style from "./Form.module.scss";
import { ITask } from "../../types/ITask";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const Form = ({ setTasks }: IProps) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, selected: false, concluded: false, id: uuidv4() },
    ]);
    setTask("");
    setTime("00:00");
  };

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
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
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
};
