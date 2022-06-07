function Main() {
  
  function handleEditAvatarClick(e) {
    e.preventDefault();
    console.log('Najali izmenit avatar');
  }

  function handleEditProfileClick(e) {
    e.preventDefault();
    console.log('Najali izmenit profil');
  }

  function handleAddPlaceClick(e) {
    e.preventDefault();
    console.log('Najali dobavit card');
  }

  return (
    <main>
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src="<%=require('./images/cousteau.jpg')%>"
            alt="Фотография-аватар пользователя"
          />
          <div className="profile__avatar-overlay" onClick={handleEditAvatarClick}></div>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit-button buttons" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__job">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-button buttons" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="gallery page__section" aria-label="Секция с карточками мест">
        <ul className="gallery__list"></ul>
      </section>
    </main>
  );
}
  
export default Main;