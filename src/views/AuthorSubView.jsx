import { Link, useLocation } from 'react-router-dom';
import { useFetchAuthor } from 'hooks/useFetchAuthor';

export const AuthorSubView = () => {
  const author = useFetchAuthor();
  const location = useLocation();

  return (
    <>
      {!author && <h2>Загружаем...</h2>}
      {author && (
        <>
          <h2>{author.name}</h2>
          <ul>
            {author.books.map(book => (
              <li key={book.id}>
                <Link to={`/books/${book.id}`} state={{ from: location }}>
                  {book.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
