import { useTranslation } from 'react-i18next';

export const LangBar: React.FC = () => {
  const langs = ['ua', 'en'];
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  console.log(language);

  return (
    <nav className="lang">
      {langs.map((item) => (
        <label key={item}>
          <input type="radio" name="lang" className="lang__item" onClick={() => changeLanguage(item)} />
          <span> {item} </span>
        </label>
      ))}
    </nav>
  );
};
