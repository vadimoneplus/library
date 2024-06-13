import { Link } from 'react-router-dom';
import store from '../store/store';
import { observer } from 'mobx-react-lite';
import { restTime } from '../utils/utils';
import { CountDown } from '../utils/timer';

export const Main = observer(() => {
  const { data, searchText } = store
  const dataBooks = data.filter(({ author, title }) => author.toLowerCase().includes(searchText.toLowerCase()) || title.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <main className="main">
      <ul className='lists'>
        {dataBooks.map(book => (
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
              <CountDown
                id={book.id}
                hours={restTime(+book.dateTake, 'h')}
                minutes={restTime(+book.dateTake, 'm')}
                seconds={restTime(+book.dateTake, 's')} />
            </div>
            }
            <button onClick={() => store.returnBook(book.id)} className={`${book.dateTake && 'returnBtn'}`}>Вернуть книгу</button>
          </div>


        ))}
      </ul>
    </main>
  );
});