import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";



function App() {
  return (
<body class="page">
  <Header />
  <Main />
  <Footer />
    
    <div class="popup popup_type_profile">
      <div class="popup__container">
        <h2 class="popup__title">Редактировать профиль</h2>
        <button type="button" class="popup__close-button buttons"></button>
        <form class="popup__form popup__form_type_profile" name="profile" novalidate>
          <input
            type="text"
            name="userName"
            id="username-input"
            class="popup__input popup__input_type_name"
            placeholder="Имя"
            required
            minlength="2"
            maxlength="40"
          />
          <span class="popup__input-error username-input-error"></span>
          <input
            type="text"
            name="userDescription"
            id="userjob-input"
            class="popup__input popup__input_type_job"
            placeholder="О себе"
            required
            minlength="2"
            maxlength="200"
          />
          <span class="popup__input-error userjob-input-error"></span>
          <button type="submit" class="popup__save-button popup__save-button_inactive" disabled>
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div class="popup popup_type_avatar">
      <div class="popup__container">
        <h2 class="popup__title">Обновить аватар</h2>
        <button type="button" class="popup__close-button buttons"></button>
        <form class="popup__form popup__form_type_avatar" name="avatar" novalidate>
          <input
            type="url"
            name="avatarUrl"
            id="avatarlink-input"
            class="popup__input popup__input_type_avatarlink"
            placeholder="Ссылка на фото"
            required
          />
          <span class="popup__input-error avatarlink-input-error"></span>
          <button type="submit" class="popup__save-button popup__save-button_inactive" disabled>
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div class="popup popup_type_card">
      <div class="popup__container">
        <h2 class="popup__title">Новое место</h2>
        <button type="button" class="popup__close-button buttons"></button>
        <form class="popup__form popup__form_type_card" name="card" novalidate>
          <input
            type="text"
            name="name"
            id="placename-input"
            class="popup__input popup__input_type_placename"
            placeholder="Название"
            required
            minlength="2"
            maxlength="30"
          />
          <span class="popup__input-error placename-input-error"></span>
          <input
            type="url"
            name="link"
            id="imagelink-input"
            class="popup__input popup__input_type_imagelink"
            placeholder="Ссылка на картинку"
            required
          />
          <span class="popup__input-error imagelink-input-error"></span>
          <button type="submit" class="popup__save-button popup__save-button_inactive" disabled>
            Создать
          </button>
        </form>
      </div>
    </div>

    <div class="popup popup_type_image">
      <figure class="popup__container popup__container_type_image">
        <button type="button" class="popup__close-button buttons"></button>
        <img
          class="popup__image"
          src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
          alt="Фотография места"
        />
        <figcaption class="popup__caption"></figcaption>
      </figure>
    </div>
    <div class="popup popup_type_confirm">
      <div class="popup__container">
        <h2 class="popup__title popup__title_type_confirm">Вы уверены?</h2>
        <button type="button" class="popup__close-button buttons"></button>
        <div class="popup__form popup__form_type_confirm">
          <button type="button" class="popup__save-button popup__save-button_type_confirm">
            Да
          </button>
        </div>
      </div>
    </div>
    <template class="card-template">
      <li class="card">
        <h2 class="card__name"></h2>
        <div class="card__photo-container">
          <img class="card__photo" />
        </div>
        <div class="card__like-container">
          <button type="button" class="card__like"></button>
          <span class="card__like-number"></span>
        </div>
        <button type="button" class="card__delete"></button>
      </li>
    </template>
  </body>
  );
}

export default App;
