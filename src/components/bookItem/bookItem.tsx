import { Link } from "react-router-dom";
import { IBook } from "../../models";
import { getRestTime } from "../../utils/utils";
import store from "../store/store";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

interface IBookItem {
  book: IBook
}

export const BookItem = observer(({ book }: IBookItem) => {
  const [restTime, setRestTime] = useState('')
  useEffect(() => {
    const timerID = setInterval(() => {
      setRestTime(() => getRestTime(book.dateTake))
    }, 1000);
    return () => clearInterval(timerID);
  }, []);
console.log('reader');

  return (
    <div key={book.id} className='linkItem__wrapper'>
      <Link className='linkItem' to={`book/${book.id}`}>
        <li className={`item ${book.dateTake && 'activeTake'}`}>
          <img src={book.image} alt='img' style={{ width: '210px', height: '140px' }} />
          <h4>{book.author}</h4>
          <h3>{book.title}</h3>
        </li>
      </Link>
      {book.dateTake && <div className='textReturn'>
        <p>До возврата:</p>
        {restTime}
      </div>
      }
      <button
        className={`${book.dateTake && 'returnBtn'}`}
        onClick={() => store.returnBook(book.id)} >
        Вернуть книгу
      </button>
    </div>
  );
});

