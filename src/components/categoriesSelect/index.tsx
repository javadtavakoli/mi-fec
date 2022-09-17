import useLoadCategories from '../../hooks/loadCategories';

const CategoriesSelect = () => {
  const { categories } = useLoadCategories();
  return (
    <select id="category" multiple>
      {categories.map((category) => (
        <option key={category.id.toString()} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
export default CategoriesSelect;
