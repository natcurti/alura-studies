import { useState } from "react";
import { Form } from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./App.module.scss";
import { ITask } from "../types/ITask";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;
