import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AuthorSubView({ authors }) {
  const { authorId } = useParams();
  const author = authors.find(author => author.id === Number(authorId));

  return <>AuthorSubView</>;
}
