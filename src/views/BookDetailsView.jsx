import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { PageHeading } from 'components/PageHeading/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

export const BookDetailsView = () => {
  const { slug } = useParams();
  const [book, setBook] = useState(null);
  const location = useLocation();
  const bookId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  return (
    <>
      <PageHeading>Книга {slug}</PageHeading>
      {book && (
        <>
          {/* Не працює передавння пропса label */}
          <Link to={location?.state?.from?.location ?? '/books'}>
            {location?.state?.from?.label ?? 'Go back'}
          </Link>
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {book.author.name}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
};
