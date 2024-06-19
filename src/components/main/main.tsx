import store from '../store/store';
import { observer } from 'mobx-react-lite';
import { BookItem } from '../bookItem/bookItem';

export const Main = observer(() => {
  const dataBooks = store.getBooksBySearchFilter()

  return (
    <main className="main">
      <ul className='items'>
        {dataBooks.map(book => (
          <BookItem book={book} />
        ))}
      </ul>
    </main>
  );
});