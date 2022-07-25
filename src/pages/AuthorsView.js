import { useState, useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';
import AuthorSubView from './AuthorSubView';

export default function AuthorsView() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(response => console.log(response));
  }, []);

  return (
    <>
      <PageHeading text="Authors" />
    </>
  );
}

// {authors && (
//   <ul>
//     {authors.map(author => (
//       <li key={author.id}>
//         <NavLink to={`${author.id}`}>{author.name}</NavLink>
//       </li>
//     ))}
//   </ul>
// )}
// <hr />

// <Routes>
//   <Route path=":authorId">
//     {authors && <AuthorSubView authors={authors} />}
//   </Route>
// </Routes>
