import useLoadAuthors from '../../hooks/loadAuthors';

const AuthorsSelect = () => {
  const { authors } = useLoadAuthors();
  return (
    <select id="author">
      {authors.map((author) => (
        <option key={author.id.toString()} value={author.id}>
          {author.name}
        </option>
      ))}
    </select>
  );
};
export default AuthorsSelect;
