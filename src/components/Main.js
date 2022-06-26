import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img 
            className="profile__avatar" 
            src={currentUser.avatar}
            alt="Фотография-аватар пользователя" 
          />
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button buttons" onClick={props.onEditProfile} />
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button buttons" onClick={props.onAddPlace} />
      </section>
      <section className="gallery page__section" aria-label="Секция с карточками мест">
        <ul className="gallery__list">
        {props.cards.map((card, id) => (
            <Card
              key={id}
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
  
export default Main;