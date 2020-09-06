import React from 'react';
import api from '../utils/Api.js'
import Card from './Card.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext)

  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getInitialCards().then(res => {
      setCards(res)
    })
  }, [setCards, cards])

  function handleCardLike(card){
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      api.removeLike(card._id).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    });
    } else {
      api.likeCard(card._id).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    });
    }
  }
  function removeDeletedCard(card, deletedCardId) {
    if (card._id !== deletedCardId) {
      return card
    }
  }

  function handleCardDelete(card){
    const deletedCardId = card._id
    api.removeCard(card._id).then(
      setCards(cards)
    )
  }

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
            {cards.map((card, i) => {
              return (
                <Card key={i} card={card} image={card.link} title={card.name} likecount={card.likes.length}
                onCardLike={()=>{handleCardLike(card)}}
                onCardDelete={()=>{handleCardDelete(card)}}
                onCardImageClick={() => {
                  props.onCardImageClick(card.link, card.name)
                }}
                />
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Main;
