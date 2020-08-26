import React from 'react';

function PopupWithForm(props) {

    if (props.formName === "editForm") {
      return (
        <>
          <div className={props.isOpen ? "pop-up__container pop-up__container_active": "pop-up__container"} >
            <section className="pop-up">
              <button onClick={props.onClose} className="pop-up__close"></button>
              <p className="pop-up__heading">Edit profile</p>
              <form className="pop-up__form" noValidate>
                <input id="profile-name" name="profile name" minLength="2" maxLength="40" required className="pop-up__name-input pop-up__input" type="text" placeholder="Name" />
                <span id="profile-name-error" className="pop-up__error pop-up__error_visible"></span>
                <input id="profile-occupation" name="profile occupation" minLength="2" maxLength="40" required className="pop-up__occupation-input pop-up__input" type="text" placeholder="Occupation" />
                <span id="profile-occupation-error" className="pop-up__error pop-up__error_visible"></span>
                <button className="pop-up__save pop-up__save_disabled" type="button" name="Save" disabled>Save</button>
              </form>
            </section>
          </div>
        </>
      )}
    if (props.formName === "addForm") {
      return (
        <>
          <div className={props.isOpen ? "pop-up__container pop-up__container_active": "pop-up__container"}>
            <section className="pop-up pop-up_add">
              <button onClick={props.onClose} className="pop-up__close pop-up__close_add"></button>
              <p className="pop-up__heading pop-up__heading_add">New Place</p>
              <form className="pop-up__form" noValidate>
                <input id="image-title" name="image title" minLength="1" maxLength="30" required className="pop-up__title-input pop-up__input" type="text" placeholder="Title" />
                <span id="image-title-error" className="pop-up__error pop-up__error_visible"></span>
                <input id="image-url" name="image url" type="url" required className="pop-up__url-input pop-up__input" placeholder="Image URL" />
                <span id="image-url-error" className="pop-up__error pop-up__error_visible"></span>
                <button className="pop-up__save pop-up__save_add pop-up__save_disabled" type="button" name="Save" disabled>Save</button>
              </form>
            </section>
          </div>
        </>
      )
    }
    if (props.formName === "deleteForm") {
      return (
        <>
          <div className={props.isOpen ? "pop-up__container pop-up__container_active": "pop-up__container"}>
            <section className="pop-up_type_delete">
              <button className="pop-up__close"></button>
              <p className="pop-up__heading_type_delete">Are you sure?</p>
              <form className="pop-up__form" noValidate>
                <button className="pop-up__save">Yes</button>
              </form>
            </section>
          </div>
        </>
      )
    }
    if (props.formName === "avatarForm") {
      return (
        <>
          <div className={props.isOpen ? "pop-up__container pop-up__container_active": "pop-up__container"}>
            <section className="pop-up_type_avatar">
              <button onClick={props.onClose} className="pop-up__close"></button>
              <p className="pop-up__heading_type_delete">Change profile picture</p>
              <form className="pop-up__form" noValidate>
                <input id="avatar-url" name="avatar url" type="url" required className="pop-up__url-input pop-up__avatar-input pop-up__input" placeholder="Avatar URL" />
                <span id="avatar-url-error" className="pop-up__error pop-up__error_visible"></span>
                <button className="pop-up__save pop-up__save_disabled" type="button" name="Save" disabled>Save</button>
              </form>
            </section>
          </div>
        </>
      )
    }
}
export default PopupWithForm;
