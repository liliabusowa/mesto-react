import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    return(
        <PopupWithForm
            name={'avatar'}
            title={"Обновить аватар"}
            buttonText={"Сохранить"}
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <input
            type="url"
            name="avatarUrl"
            id="avatarlink-input"
            className="popup__input popup__input_type_avatarlink"
            placeholder="Ссылка на фото"
            required
          />
          <span className="popup__input-error avatarlink-input-error"></span>
          
        </PopupWithForm>
    )
}

export default EditAvatarPopup;