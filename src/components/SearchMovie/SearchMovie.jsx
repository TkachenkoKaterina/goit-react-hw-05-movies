import { useState } from 'react';
import css from './SearchMovie.module.css';

const SearchMovie = ({ handleSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={onSubmit}>
        <input
          onChange={handleChange}
          value={searchValue}
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />

        <button type="submit" className={css.button}>
          <span className="button-label">Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchMovie;
