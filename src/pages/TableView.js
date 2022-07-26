import { useState, useEffect, lazy } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import Table from '../components/Table/Table';
import SortSelector from '../components/SortSelector/SortSelector';

const initialState = [
  { id: 1, value: 100 },
  { id: 2, value: 400 },
  { id: 3, value: 200 },
  { id: 4, value: 500 },
  { id: 5, value: 300 },
];

const sortOptions = [
  { value: 'ascending', label: 'По возрастанию' },
  { value: 'descending', label: 'По убыванию' },
];

export default function TableView() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [expenses, setExpenses] = useState(initialState);

  const sortOrder = searchParams.get('sortBy') ?? 'ascending';

  const onSortOrderChange = order => {
    navigate({ ...location, search: `sortBy=${order}` });
  };

  // якщо треба ставити стандартне перше значення параметра URL при першому переході на сторінку
  useEffect(() => {
    if (location.search !== '') {
      return;
    }
    navigate({ ...location, search: `sortBy=ascending` });
  }, [location, navigate]);

  useEffect(() => {
    setExpenses(prev =>
      [...prev].sort((a, b) => {
        return sortOrder === 'ascending'
          ? a.value - b.value
          : b.value - a.value;
      })
    );
  }, [sortOrder]);

  return (
    <>
      <SortSelector
        options={sortOptions}
        onChange={onSortOrderChange}
        value={sortOrder}
      />
      <Table items={expenses} />
    </>
  );
}
