import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    return(
        <PopupWithForm
        name={'card'}
        title={"Новое место"}
        buttonText={"Создать"}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
            <input
            type="text"
            name="name"
            id="placename-input"
            className="popup__input popup__input_type_placename"
            placeholder="Название"
            required
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
            required
          />
          <span className="popup__input-error imagelink-input-error"></span>
          
        </PopupWithForm>
    )
}

export default AddPlacePopup;