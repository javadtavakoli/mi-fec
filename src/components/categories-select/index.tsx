import { SelectHTMLAttributes } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import styles from "../../common/css/inputs.module.css";
const CategoriesSelect = (props: SelectHTMLAttributes<HTMLSelectElement>) => {
  const { categories } = useAppSelector((state) => state.categories);
  return (
    <select multiple {...props} className={styles.input}>
      {categories.map((category) => (
        <option key={category.id.toString()} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
export default CategoriesSelect;
