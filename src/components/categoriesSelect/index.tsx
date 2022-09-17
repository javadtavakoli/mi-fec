import { SelectHTMLAttributes } from 'react';
import useLoadCategories from '../../hooks/loadCategories';

const CategoriesSelect = (props: SelectHTMLAttributes<HTMLSelectElement>) => {
  const { categories } = useLoadCategories();
  return (
    <select  multiple {...props}>
      {categories.map((category) => (
        <option key={category.id.toString()} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
export default CategoriesSelect;
