import React from 'react';
import api from '../utils/Api.js'
import Card from './Card.js'

function Main(props) {
  const [avatar, setAvatar] = React.useState("")
  const [name, setName] = React.useState("")
  const [about, setAbout] = React.useState("")

  React.useEffect(() => {
    api.getUserInfo().then(res => {
      setAvatar(res.avatar)
      setName(res.name)
      setAbout(res.about)
    })
  }, [avatar, name, about])

  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getInitialCards().then(res => {
      setCards(res)
    })
  }, [setCards])

  return (
    <>
      <main>
        <section className="profile">
          <img src={avatar} alt="Avatar" className="profile__avatar" />
          <div onClick={props.onEditAvatar} className="profile__avatar-overlay"></div>
          <div className="profile__text-container">
            <p className="profile__name">{name}</p>
            <p className="profile__occupation">{about}</p>
          </div>
          <button onClick={props.onEditProfile} className="profile__edit" type="button" name="button">
          </button>
          <button onClick={props.onAddCard} className="profile__add" type="button" name="button">
          </button>
        </section>
        <section className="element">
          <ul className="element__container">
            {cards.map((card) => {
              return (
                <Card key={card._id} image={card.link} title={card.name} likecount={card.likes.length} onCardImageClick={props.onCardImageClick} />
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Main;
