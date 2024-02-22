import style from "./List.module.scss";
import Item from "./Item";

const List = () => {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "JavaScript",
      time: "01:00:00",
    },
    {
      task: "TypeScript",
      time: "02:00:00",
    },
  ];
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia:</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item task={item.task} time={item.time} key={index} /* {...item} */ />
        ))}
      </ul>
    </aside>
  );
};

export default List;
