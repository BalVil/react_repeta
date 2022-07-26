import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
// import HomeView from './pages/HomeView';
// import AuthorsView from './pages/AuthorsView';
// import BooksView from './pages/BooksView';
// import BookDetailsView from './pages/BookDetailsView';
// import TableView from './pages/TableView';
// import NotFoundView from './pages/NotFoundView';

const HomeView = lazy(() => import('./pages/HomeView.js'));
const BooksView = lazy(() => import('./pages/BooksView.js'));
const AuthorsView = lazy(() => import('./pages/AuthorsView.js'));
const BookDetailsView = lazy(() => import('./pages/BookDetailsView.js'));
const TableView = lazy(() => import('./pages/TableView.js'));
const NotFoundView = lazy(() => import('./pages/NotFoundView.js'));

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/authors/*" element={<AuthorsView />} />
          <Route path="/books" element={<BooksView />} />
          <Route path="/books/:bookId" element={<BookDetailsView />} />
          <Route path="/table" element={<TableView />}></Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
