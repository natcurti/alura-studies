import style from "./List.module.scss";
import Item from "./Item";
import { ITask } from "../../types/ITask";

interface IProps {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

const List = ({ tasks, selectTask }: IProps) => {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia:</h2>
      <ul>
        {tasks.map((item) => (
          <Item key={item.id} {...item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
