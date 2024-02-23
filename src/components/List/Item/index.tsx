import { ITask } from "../../../types/ITask";
import style from "../List.module.scss";

interface IProps extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

const Item = ({ task, time, selected, concluded, id, selectTask }: IProps) => {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ""}`}
      onClick={() =>
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
    </li>
  );
};

export default Item;
