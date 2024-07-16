import './AppBar.scss';

export const AppBar = () => {
  const langs = ['ua', 'en'];

  return (
    <div className="container">
      <nav className="lang">
        {langs.map((item, index) => (
          <label key={index}>
            <input type="radio" name="lang" className="lang__item" />
            <span> {item} </span>
          </label>
        ))}
      </nav>
    </div>
  );
};
