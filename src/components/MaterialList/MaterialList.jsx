import { Material } from '../Material/Material';

export const MaterialList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Material item={item} />
          <hr />
        </li>
      ))}
    </ul>
  );
};
