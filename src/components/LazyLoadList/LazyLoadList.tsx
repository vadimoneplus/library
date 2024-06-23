import { useEffect, useState } from "react";
import { IBook } from "../../models";
import { BookItem } from "../bookItem/bookItem";
import { observer } from "mobx-react-lite";

interface ILazyLoadList {
  dataBooks: IBook[]
}

export const LazyLoadList = observer(({ dataBooks }: ILazyLoadList) => {
  const [visibleItems, setVisibleItems] = useState(9);
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      setVisibleItems(prevItems => prevItems + 9);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleItems]);

  return (
    <ul className='items'>
      {dataBooks.map((book,index) => (
        index < visibleItems && <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
});