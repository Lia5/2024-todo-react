import { useTranslation } from 'react-i18next';
import spritePlus from '../../assets/sprite.svg';
import './AddingBox.scss';

export const AddingBox = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="main-title">{t('title', { appName: 'TODO' })}</div>
      <div className="adding-box show">
        <div className="adding-box__line">
          <input id="todo-field" type="text" placeholder="" />
          <button className="btn-icon btn btn-primary">
            <svg>
              <use href={`${spritePlus}#plus`} />
            </svg>
          </button>
        </div>

        <div className="error">error_text</div>

        <hr />
      </div>
    </div>
  );
};
