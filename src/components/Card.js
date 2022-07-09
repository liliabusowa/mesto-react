import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `card__delete ${isOwn ? '' : 'card__delete_inactive'}`
  );

  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_active' : ''}`
  ); 
  
  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
      <li className="card">
        <h2 className="card__name">{props.name}</h2>
        <div className="card__photo-container">
          <img className="card__photo" src={props.link} alt={props.name} onClick={handleClick}/>
        </div>
        <div className="card__like-container">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <span className="card__like-number">{props.likes}</span>
        </div>
        <button type="button" className={cardDeleteButtonClassName} title="Удалить" onClick={handleDeleteClick}></button>
      </li>
  );
}
  
export default Card;  