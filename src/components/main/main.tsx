import { LazyLoadList } from '../LazyLoadList/LazyLoadList';
import store from '../store/store';
import { observer } from 'mobx-react-lite';

export const Main = observer(() => {
  const dataBooks = store.getBooksBySearchFilter()
  return (
    <main className="main">
      <ul className='items'>
        <LazyLoadList dataBooks={dataBooks} />
      </ul>
    </main>
  );
});



