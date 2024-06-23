import { useEffect, useState } from "react";
import store from '../store/store';

interface ICountDown {
  id: number
  hours?: number
  minutes?: number
  seconds?: number
}

export const CountDown = ({ id, hours = 0, minutes = 0, seconds = 0 }: ICountDown) => {
  const [[h, m, s], setTime] = useState([hours, minutes, seconds]);
  const [over, setOver] = useState(false);
  const tick = () => {
    if (over) {
      store.returnBook(id)
      return
    };

    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p>{`${h.toString().padStart(2, '0')}:${m
        .toString()
        .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
    </div>
  );
};