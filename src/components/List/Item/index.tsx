import { ITask } from "../../../types/ITask";
import style from "./Item.module.scss";

interface IProps extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

const Item = ({ task, time, selected, concluded, id, selectTask }: IProps) => {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ""} ${
        concluded ? style.completedItem : ""
      }`}
      onClick={() =>
        !concluded &&
        selectTask({
          task,
          time,
          selected,
          concluded,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {concluded && (
        <span className={style.concluded} aria-label="Tarefa completada"></span>
      )}
    </li>
  );
};

export default Item;
