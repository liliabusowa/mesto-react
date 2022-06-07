function Card() {
  return (
    <template className="card-template">
      <li className="card">
        <h2 className="card__name"></h2>
        <div className="card__photo-container">
          <img className="card__photo" />
        </div>
        <div className="card__like-container">
          <button type="button" className="card__like"></button>
          <span className="card__like-number"></span>
        </div>
        <button type="button" className="card__delete"></button>
      </li>
    </template>
  );
}
  
export default Card;  