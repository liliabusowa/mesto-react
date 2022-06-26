import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const ref = React.useRef();

    function handleSubmit(evt) {
        evt.preventDefault();
    
        props.onSubmit({
          avatar_link: ref.current.value
        });
    }

    React.useEffect(() => {
      ref.current.value = '';
    }, [props.isOpen]);

    return(
        <PopupWithForm
            name={'avatar'}
            form={'placeData'}
            title={'Обновить аватар'}
            buttonText={'Сохранить'}
            isOpen={props.isOpen}
            onCloseClick={props.onCloseClick}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
            ref={ref}
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