import style from "./List.module.scss";
import Item from "./Item";
import { ITask } from "../../types/ITask";

const List = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia:</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
