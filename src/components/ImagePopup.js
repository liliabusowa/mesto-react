function ImagePopup() {
  return (
    <div classname="popup popup_type_image">
      <figure classname="popup__container popup__container_type_image">
        <button type="button" classname="popup__close-button buttons" />
        <img classname="popup__image" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="Фотография места" />
        <figcaption classname="popup__caption" />
      </figure>
    </div>
  );
}
  
export default ImagePopup;