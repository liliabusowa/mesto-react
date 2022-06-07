function PopupWithForm() {
  return (
    <div>
      <div className="popup popup_type_profile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <button type="button" className="popup__close-button buttons"></button>
          <form className="popup__form popup__form_type_profile" name="profile" novalidate>
            <input
              type="text"
              name="userName"
              id="username-input"
              className="popup__input popup__input_type_name"
              placeholder="Имя"
              required
              minlength="2"
              maxlength="40"
            />
            <span className="popup__input-error username-input-error"></span>
            <input
              type="text"
              name="userDescription"
              id="userjob-input"
              className="popup__input popup__input_type_job"
              placeholder="О себе"
              required
              minlength="2"
              maxlength="200"
            />
            <span className="popup__input-error userjob-input-error"></span>
            <button type="submit" className="popup__save-button popup__save-button_inactive" disabled>
              Сохранить
            </button>
          </form>
        </div>
      </div>


      <div className="popup popup_type_card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <button type="button" className="popup__close-button buttons"></button>
          <form className="popup__form popup__form_type_card" name="card" novalidate>
            <input
              type="text"
              name="name"
              id="placename-input"
              className="popup__input popup__input_type_placename"
              placeholder="Название"
              required
              minlength="2"
              maxlength="30"
            />
            <span className="popup__input-error placename-input-error"></span>
            <input
              type="url"
              name="link"
              id="imagelink-input"
              className="popup__input popup__input_type_imagelink"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error imagelink-input-error"></span>
            <button type="submit" className="popup__save-button popup__save-button_inactive" disabled>
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <button type="button" className="popup__close-button buttons"></button>
          <form className="popup__form popup__form_type_avatar" name="avatar" novalidate>
            <input
              type="url"
              name="avatarUrl"
              id="avatarlink-input"
              className="popup__input popup__input_type_avatarlink"
              placeholder="Ссылка на фото"
              required
            />
            <span className="popup__input-error avatarlink-input-error"></span>
            <button type="submit" className="popup__save-button popup__save-button_inactive" disabled>
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <h2 className="popup__title popup__title_type_confirm">Вы уверены?</h2>
          <button type="button" className="popup__close-button buttons"></button>
          <div className="popup__form popup__form_type_confirm">
            <button type="button" className="popup__save-button popup__save-button_type_confirm">
              Да
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
  
export default PopupWithForm;