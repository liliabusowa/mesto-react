import React, { useEffect } from "react";
import apiconfig from '../utils/api';
import Card from "./Card";

function Main(props) {
  // Переменные состояния полей профиля пользователя (имя, о себе, аватар)
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);


  useEffect(() => {
    apiconfig
      .getUserInfo()
      .then(userData => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        return userData;
      })
      .then(userData => {
        apiconfig
          .getInitialCards()
          .then(initialCards => {
            // сортируем полученный массив, ставя вперед карточки текущего пользователя
            initialCards.sort((a, b) => {
              let x, y;
              if (a.owner._id === userData._id) {
                x = 0;
              } else x = 1;
              if (b.owner._id === userData._id) {
                y = 0;
              } else y = 1;
              return x - y;
            });
            // обрезаем массив, оставляя первые 6 карточек
            initialCards = initialCards.slice(0, 50);
            setCards(initialCards);
          });
      })
      .catch(err => {
        console.log(err);
      });
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
        <ul className="gallery__list">
          {cards.map(card => {
            return <Card 
              key={card._id} 
              card={card} 
              onCardClick={props.onCardClick}
              />;
          })}
        </ul>
      </section>
    </main>
  );
}
  
export default Main;