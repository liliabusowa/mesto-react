import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSubmit({
      name: name,
      link: link
    });
  }

  React.useEffect(() => {
    if (props.isOpen) {
      setName('');
      setLink('');
    }
  }, [props.isOpen]);

    return(
        <PopupWithForm
        name="card"
        title="Новое место"
        buttonText="Создать"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
            <input
            type="text"
            name="name"
            id="placename-input"
            className="popup__input popup__input_type_placename"
            placeholder="Название"
            required
            onChange={handleNameChange}
            value={name}
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error placename-input-error"></span>
          <input
            type="url"
            name="link"
            id="imagelink-input"
            className="popup__input popup__input_type_imagelink"
            placeholder="Ссылка на картинку"
            onChange={handleLinkChange}
            value={link}
            required
          />
          <span className="popup__input-error imagelink-input-error"></span>
          
        </PopupWithForm>
    )
}

export default AddPlacePopup;