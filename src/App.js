import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomeView from './pages/HomeView';
import AuthorsView from './pages/AuthorsView';
import BooksView from './pages/BooksView';
import BookDetailsView from './pages/BookDetailsView';
import NotFoundView from './pages/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/authors" element={<AuthorsView />} />
        <Route path="/books" element={<BooksView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Container>
  );
}

//  <Routes>
//    <Route path="/" element={<HomeView />} />

//    <Route path="/authors/*" element={<AuthorsView />} />

//    <Route path="/books" element={<BooksView />} />

//    <Route path="/books/:bookId" element={<BookDetailsView />} />

//    <Route path="*" element={<NotFoundView />} />
//  </Routes>;
