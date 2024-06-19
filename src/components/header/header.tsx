import { useEffect, useState } from 'react';
import { useDebounceValue } from 'usehooks-ts'
import store from '../store/store';
import { ending } from '../../utils/utils';
import { observer } from 'mobx-react-lite';

export const Header = observer(() => {
  const [value, setValue] = useState('')
  const [debouncedValue] = useDebounceValue(value, 1000)
  useEffect(() => {
    store.searchBooks(value)
  }, [debouncedValue])

  const reservedBooks = store.getReservedBooks()

  return (
    <header className="header">
      <h5 className="header__title">У Вас на руках: {reservedBooks} книг{ending(reservedBooks)}
      </h5>
      <div className='input__wrapper'>
        <input
          className="header__input"
          placeholder="Поиск книги..."
          value={value}
          onChange={event => setValue(event.target.value)}
          type="search"
        />
      </div>
    </header>
  );
});

