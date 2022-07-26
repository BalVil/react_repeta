import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';
// import AuthorSubView from './AuthorSubView';
const AuthorSubView = lazy(() => import('./AuthorSubView.js'));

export default function AuthorsView() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading text="Authors" />
      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <Suspense fallback={<h1>Loading...</h1>}>
        {authors && (
          <Routes>
            <Route
              path="/:authorId"
              element={<AuthorSubView authors={authors} />}
            />
          </Routes>
        )}
      </Suspense>
    </>
  );
}
