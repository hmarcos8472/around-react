import React from 'react';

function PopupWithForm(props) {
  return (
    <>
      <div className={props.isOpen ? "pop-up__container pop-up__container_active": "pop-up__container"}>
        <section className={`pop-up${props.popupType}`}>
          <button onClick={props.onClose} className="pop-up__close"></button>
          <p className={`pop-up__heading${props.popupType}`}>{props.heading}</p>
          <form className="pop-up__form" noValidate>
            {props.children}
            <button className="pop-up__save pop-up__save_disabled" type="button" name="Save" disabled>{props.buttonText}</button>
          </form>
        </section>
      </div>
    </>
  )
}
export default PopupWithForm;
