function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <figure className="popup__container popup__container_type_image">
        <button type="button" className="popup__close-button buttons"></button>
        <img
          className="popup__image"
          src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
          alt="Фотография места"
        />
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </div>
  );
}
  
export default ImagePopup;