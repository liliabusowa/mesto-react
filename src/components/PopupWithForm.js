function PopupWithForm(props) {
  return (
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
          <button type="button" className="popup__close-button buttons"></button>
          <form className={`popup__form popup__form_type_${props.name}`} name={`${props.name}`} novalidate>
            <div>{this.props.children}</div>            
          <button type="submit" className="popup__save-button popup__save-button_inactive" disabled> {props.title} </button>
          </form>
        </div>
      </div>
  );
}