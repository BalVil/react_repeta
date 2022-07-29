import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { HomeView } from 'pages/HomeView';
import { AuthorsView } from 'pages/AuthorsView';
import { AuthorSubView } from 'pages/AuthorSubView';
import { BooksView } from 'pages/BooksView';
import { BookDetailsView } from 'pages/BookDetailsView';
import { NotFoundView } from 'pages/NotFoundView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="authors" element={<AuthorsView />}>
          <Route path=":authorId" element={<AuthorSubView />} />
        </Route>
        <Route path="books" element={<BooksView />} />
        <Route path="books/:bookId" element={<BookDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};

// const HomeView = lazy(() => import('./pages/HomeView.js'));
// const BooksView = lazy(() => import('./pages/BooksView.js'));
// const AuthorsView = lazy(() => import('./pages/AuthorsView.js'));
// const BookDetailsView = lazy(() => import('./pages/BookDetailsView.js'));
// const TableView = lazy(() => import('./pages/TableView.js'));
// const NotFoundView = lazy(() => import('./pages/NotFoundView.js'));
// const AuthorSubView = lazy(() => import('./pages/AuthorSubView.js'));
