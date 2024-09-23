import '../styles/index.css';

const Search = () => {
  return (
      <form action="#" className="search-bar">
        <div className="input-group">
          <input
              id="search"
              name="search"
              type="text"
              className="form-control search-bar"
              placeholder="Search"
              required
          />
          <label className="visually-hidden" htmlFor="search"></label>
          <button
              className="btn btn-primary text-white"
              type="submit"
              aria-label="Search"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
  );
};

export default Search;
