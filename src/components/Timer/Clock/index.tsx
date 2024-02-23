import style from "./Clock.module.scss";

interface IProps {
  time: number | undefined;
}

const Clock = ({ time = 0 }: IProps) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesTen, minutesUnit] = String(minutes).padStart(2, "0");
  const [secondsTen, secondsUnit] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.clockNumber}>{minutesTen}</span>
      <span className={style.clockNumber}>{minutesUnit}</span>
      <span className={style.clockDivisor}>:</span>
      <span className={style.clockNumber}>{secondsTen}</span>
      <span className={style.clockNumber}>{secondsUnit}</span>
    </>
  );
};

export default Clock;
