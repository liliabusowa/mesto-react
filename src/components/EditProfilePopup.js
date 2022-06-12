import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    return(
        <PopupWithForm 
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={props.isOpen}
          onClose={props.onClose}
        >
            <input
            type="text"
            name="userName"
            id="username-input"
            className="popup__input popup__input_type_name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error username-input-error"></span>
          <input
            type="text"
            name="userDescription"
            id="userjob-input"
            className="popup__input popup__input_type_job"
            placeholder="О себе"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error userjob-input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;