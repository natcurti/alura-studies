import { useEffect, useState } from "react";
import { timeInSeconds } from "../../common/utils/timeInSeconds";
import { ITask } from "../../types/ITask";
import { Button } from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface IProps {
  selected: ITask | undefined;
}

const Timer = ({ selected }: IProps) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeInSeconds(selected.time));
    }
  }, [selected]);

  const countDown = (time: number = 0) => {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
        return countDown(time - 1);
      }
    }, 1000);
  };

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => countDown(time)}>Começar</Button>
    </div>
  );
};

export default Timer;
