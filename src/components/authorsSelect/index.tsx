import { SelectHTMLAttributes } from 'react';
import useLoadAuthors from '../../hooks/loadAuthors';

const AuthorsSelect = (props: SelectHTMLAttributes<HTMLSelectElement>) => {
  const { authors } = useLoadAuthors();
  return (
    <select {...props}>
      <option disabled={true} value={-1}>{props.placeholder}</option>
      {authors.map((author) => (
        <option key={author.id.toString()} value={author.id}>
          {author.name}
        </option>
      ))}
    </select>
  );
};
export default AuthorsSelect;
