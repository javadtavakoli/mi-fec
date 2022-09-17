import { SelectHTMLAttributes } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';

const AuthorsSelect = (props: SelectHTMLAttributes<HTMLSelectElement>) => {
  const { authors } = useAppSelector((state) => state.authors);
  return (
    <select {...props}>
      <option disabled={true} value={-1}>
        {props.placeholder}
      </option>
      {authors.map((author) => (
        <option key={author.id.toString()} value={author.id}>
          {author.name}
        </option>
      ))}
    </select>
  );
};
export default AuthorsSelect;
