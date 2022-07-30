import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { createAsyncPage } from 'helpers';

const HomeView = createAsyncPage('HomeView');
const AuthorsView = createAsyncPage('AuthorsView');
const AuthorSubView = createAsyncPage('AuthorSubView');
const BooksView = createAsyncPage('BooksView');
const BookDetailsView = createAsyncPage('BookDetailsView');
const NotFoundView = createAsyncPage('NotFoundView');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="authors" element={<AuthorsView />}>
          <Route path=":authorId" element={<AuthorSubView />} />
        </Route>
        <Route path="books" element={<BooksView />} />
        <Route path="books/:slug" element={<BookDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
