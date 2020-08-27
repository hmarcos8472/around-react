import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'

function App() {

  const [isOverlayOn, setIsOverlayOn] = React.useState(false)

  const [isEditOpen, setIsEditOpen] = React.useState(false)
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false)
  const [isAddOpen, setIsAddOpen] = React.useState(false)

  const [isImageOpen, setIsImageOpen] = React.useState(false)
  const [imageBackground, setImageBackground] = React.useState("")
  const [imageCaption, setImageCaption] = React.useState("")

  return (
    <>
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
            onCardImageClick={(e) => {
              setIsImageOpen(true)
              setImageBackground(e.target.style.backgroundImage)
              setImageCaption(e.target.parentNode.querySelector(".element__title").innerText)
              setIsOverlayOn(true)
            }}
          />
          <Footer />
        </div>

        <PopupWithForm formName="editForm" isOpen={isEditOpen} onClose={() => {
          setIsEditOpen(false)
          setIsOverlayOn(false)
        }
        } />

        <PopupWithForm formName="addForm" isOpen={isAddOpen} onClose={() => {
          setIsAddOpen(false)
          setIsOverlayOn(false)
        }
        } />

        <PopupWithForm formName="avatarForm" isOpen={isAvatarOpen} onClose={() => {
          setIsAvatarOpen(false)
          setIsOverlayOn(false)
        }
        }/>

        <PopupWithForm formName="deleteForm" />
        <ImagePopup isOpen={isImageOpen} title={imageCaption} image={imageBackground} onClose={() => {
          setIsImageOpen(false)
          setIsOverlayOn(false)
        }
        }/>
      </div>
    </>
  );
}

export default App;
