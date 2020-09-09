import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext)

  return (
    <>
      <main>
        <section className="profile">
          <img src={currentUser.avatar} alt="Avatar" className="profile__avatar" />
          <div onClick={props.onEditAvatar} className="profile__avatar-overlay"></div>
          <div className="profile__text-container">
            <p className="profile__name">{currentUser.name}</p>
            <p className="profile__occupation">{currentUser.about}</p>
          </div>
          <button onClick={props.onEditProfile} className="profile__edit" type="button" name="button">
          </button>
          <button onClick={props.onAddCard} className="profile__add" type="button" name="button">
          </button>
        </section>
        <section className="element">
          <ul className="element__container">
            {props.children}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Main;
