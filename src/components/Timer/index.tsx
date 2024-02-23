import { timeInSeconds } from "../../common/utils/timeInSeconds";
import { Button } from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

const Timer = () => {
  console.log("Conversão para segundos:", timeInSeconds("01:20:15"));
  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
};

export default Timer;
