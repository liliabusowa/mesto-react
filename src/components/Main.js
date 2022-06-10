import React from "react";
import cousteau from '../images/cousteau.jpg';

function Main(props) {
  return (
    <main>
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img 
            className="profile__avatar" 
            src={cousteau}
            alt="Фотография-аватар пользователя" 
          />
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit-button buttons" onClick={props.onEditProfile} />
          </div>
          <p className="profile__job">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-button buttons" onClick={props.onAddPlace} />
      </section>
      <section className="gallery page__section" aria-label="Секция с карточками мест">
        <ul className="gallery__list" />
      </section>
    </main>
  );
}
  
export default Main;