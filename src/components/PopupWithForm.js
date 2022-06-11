function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened': ""}`}>
      <div className="popup__container">
        <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
        <button type="button" className="popup__close-button buttons" onClick={props.onClose}/>
        <form className={`popup__form popup__form_type_${props.name}`} name={`${props.name}`} noValidate>
          {props.children}            
          <button type="submit" className="popup__save-button popup__save-button_inactive" disabled> {props.buttonText} </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;