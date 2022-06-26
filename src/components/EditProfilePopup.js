import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSubmit({
      profile_name: name,
      profile_job: description
    });
  }

  React.useEffect(() => {
    if (props.isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [props.isOpen, currentUser]);

    return(
        <PopupWithForm 
          name={'profile'}
          form={'profileData'}
          title={'Редактировать профиль'}
          buttonText={'Сохранить'}
          isOpen={props.isOpen}
          onClose={props.onClose}
          onCloseClick={props.onCloseClick}
          onSubmit={handleSubmit}
        >
          <input type="text" name="userName" id="username-input" className="popup__input popup__input_type_name" placeholder="Имя" required minLength="2" maxLength="40" value={name} onChange={handleNameChange} />
          <span className="popup__input-error username-input-error"></span>
          <input type="text" name="userDescription" id="userjob-input" className="popup__input popup__input_type_job" placeholder="О себе" required minLength="2" maxLength="200" value={description} onChange={handleDescriptionChange}/>
          <span className="popup__input-error userjob-input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;