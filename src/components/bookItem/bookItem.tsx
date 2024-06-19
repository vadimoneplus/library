import { Link } from "react-router-dom";
import { IBook } from "../../models";
import { CountDown } from "../timer/timer";
import { restTime } from "../../utils/utils";
import store from "../store/store";

interface IBookItem {
  book: IBook
}

export const BookItem = ({ book }: IBookItem) => {
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
        {<CountDown
          id={book.id}
          hours={restTime(+book.dateTake, 'h')}
          minutes={restTime(+book.dateTake, 'm')}
          seconds={restTime(+book.dateTake, 's')} />}
      </div>
      }
      <button
        className={`${book.dateTake && 'returnBtn'}`}
        onClick={() => store.returnBook(book.id)} >
        Вернуть книгу
      </button>
    </div>
  );
};

