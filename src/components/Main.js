import React, { useEffect } from "react";
import apiconfig from '../utils/api';

function Main(props) {
  // Переменные состояния полей профиля пользователя (имя, о себе, аватар)
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  useEffect(() => {
    apiconfig
      .getUserInfo()
      .then(userData => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        return userData;
      })
  }, []);
  
  return (
    <main>
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img 
            className="profile__avatar" 
            src={userAvatar}
            alt="Фотография-аватар пользователя" 
          />
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button buttons" onClick={props.onEditProfile} />
          </div>
          <p className="profile__job">{userDescription}</p>
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