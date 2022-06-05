function Main() {
    return (
        <main>
        <section class="profile page__section">
          <div class="profile__avatar-container">
            <img
              class="profile__avatar"
              src="<%=require('./images/cousteau.jpg')%>"
              alt="Фотография-аватар пользователя"
            />
            <div class="profile__avatar-overlay"></div>
          </div>
          <div class="profile__info">
            <div class="profile__name-container">
              <h1 class="profile__name">Жак-Ив Кусто</h1>
              <button class="profile__edit-button buttons"></button>
            </div>
            <p class="profile__job">Исследователь океана</p>
          </div>
          <button type="button" class="profile__add-button buttons"></button>
        </section>
        <section class="gallery page__section" aria-label="Секция с карточками мест">
          <ul class="gallery__list"></ul>
        </section>
      </main>
    );
  }
  
  export default Main;
  