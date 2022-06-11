function Card({card, onCardClick}) {
  
  function handleClick() {
    onCardClick(card);
  }

  return (
      <li className="card">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__photo-container">
          <img className="card__photo" src={card.link} alt={card.name} onClick={handleClick}/>
        </div>
        <div className="card__like-container">
          <button type="button" className="card__like"></button>
          <span className="card__like-number">{card.likes.length}</span>
        </div>
        <button type="button" className="card__delete"></button>
      </li>
  );
}
  
export default Card;  