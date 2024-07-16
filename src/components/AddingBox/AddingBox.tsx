import spritePlus from '../../assets/sprite.svg';
import './AddingBox.scss';

export const AddingBox = () => {
  return (
    <div>
      <div className="main-title">Назва заголовка</div>
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
