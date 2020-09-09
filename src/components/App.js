import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Card from './Card.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import EditProfilePopup from './EditProfilePopup.js'
import EditAvatarPopup from './EditAvatarPopup.js'
import AddPlacePopup from './AddPlacePopup.js'
import ImagePopup from './ImagePopup.js'
import api from '../utils/Api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function App() {

  const [isOverlayOn, setIsOverlayOn] = React.useState(false)

  const [isEditOpen, setIsEditOpen] = React.useState(false)
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false)
  const [isAddOpen, setIsAddOpen] = React.useState(false)

  const [isImageOpen, setIsImageOpen] = React.useState(false)
  const [image, setImage] = React.useState("")
  const [imageCaption, setImageCaption] = React.useState("")

  const [currentUser, setCurrentUser] = React.useState({avatar: "", name: "", about: ""})
  React.useEffect(() => {
    api.getUserInfo().then(res => {
      setCurrentUser(res)
    })
  }, [setCurrentUser])

  function closeAllPopups() {
    setIsOverlayOn(false)
    setIsAddOpen(false)
    setIsEditOpen(false)
    setIsImageOpen(false)
    setIsAvatarOpen(false)
  }

  function onUpdateUser(name, about) {
    setCurrentUser({
      name: name,
      about: about,
      avatar: currentUser.avatar
    })
    api.setUserInfo({name:name, about: about})
  }

  function onUpdateAvatar(avatar) {
    setCurrentUser({
      name: currentUser.name,
      about: currentUser.about,
      avatar: avatar
    })
    api.setUserAvatar({avatar: avatar})
  }

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

  function handleCardDelete(card){
    api.removeCard(card._id).then(
      setCards(cards)
    )
  }

  function onCardImageClick(link, caption){
    setIsImageOpen(true)
    setImage(link)
    setImageCaption(caption)
    setIsOverlayOn(true)
  }

  function onAddPlace(newCard){
    api.addCard(newCard)
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className={isOverlayOn ? "overlay overlay_dark" : "overlay"}>
          <Header />

            <Main
              onEditAvatar={() => {
                setIsAvatarOpen(true)
                setIsOverlayOn(true)
              }}
              onEditProfile={() => {
                setIsEditOpen(true)
                setIsOverlayOn(true)
              }}
              onAddCard={() => {
                 setIsAddOpen(true)
                 setIsOverlayOn(true)
              }}
              onCardImageClick={(link, caption) => {
                setIsImageOpen(true)
                setImage(link)
                setImageCaption(caption)
                setIsOverlayOn(true)
              }}
            >
              {cards.map((card, i) => {
                return (
                  <Card key={i} card={card} image={card.link} title={card.name} likecount={card.likes.length}
                  onCardLike={()=>{handleCardLike(card)}}
                  onCardDelete={()=>{handleCardDelete(card)}}
                  onCardImageClick={() => {onCardImageClick(card.link, card.name)}}
                  />
                )
              })}
            </Main>

          <Footer />
        </div>
      <EditProfilePopup onUpdateUser={onUpdateUser} isEditOpen={isEditOpen} onClose={closeAllPopups} />
      <EditAvatarPopup onUpdateAvatar={onUpdateAvatar} isAvatarOpen={isAvatarOpen} onClose={closeAllPopups} />
      <AddPlacePopup onAddPlace={onAddPlace} isAddOpen={isAddOpen} onClose={closeAllPopups} />

      <PopupWithForm heading="Are You Sure?" buttonText="Yes" popupType="_type_delete" />

      <ImagePopup isOpen={isImageOpen} title={imageCaption} image={image} onClose={() => {
        setIsImageOpen(false)
        setIsOverlayOn(false)
      }
      }/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
