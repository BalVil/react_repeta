import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import * as bookShelfAPI from '../services/bookshelf-api';
import { PageHeading } from 'components/PageHeading/PageHeading';

const makeSlug = string => slugify(string, { lower: true });
export const BooksView = () => {
  const [books, setBooks] = useState(null);

  const location = useLocation();

  useEffect(() => {
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading>Книги</PageHeading>
      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${makeSlug(`${book.title} ${book.id}`)}`,
                  state: { from: { location, label: 'Go back to all books' } },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
