import { SelectHTMLAttributes } from 'react';
import useLoadCategories from '../../hooks/loadCategories';
import { useAppSelector } from '../../hooks/reduxHooks';

const CategoriesSelect = (props: SelectHTMLAttributes<HTMLSelectElement>) => {
  const { categories } = useAppSelector((state) => state.categories);
  return (
    <select multiple {...props}>
      {categories.map((category) => (
        <option key={category.id.toString()} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
export default CategoriesSelect;
