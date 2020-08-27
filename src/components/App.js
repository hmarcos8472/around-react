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

  const editFormStructure = {
    heading: "Edit Profile",
    inputs: {},
    buttonText: "Save"
  }
  const addFormStructure = {
    heading: "New Place",
    inputs: {},
    buttonText: "Submit"
  }
  const avatarFormStructure = {
    heading: "Change Profile Picture",
    inputs: {},
    buttonText: "Save"
  }
  const deleteFormStructure = {
    heading: "Are You Sure?",
    inputs: {},
    buttonText: "Yes"
  }

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

      <PopupWithForm heading="Edit Profile" buttonText="Save" popupType="" isOpen={isEditOpen}
        onClose={() => {
          setIsEditOpen(false)
          setIsOverlayOn(false)
        }
      }>
        <input id="profile-name" name="profile name" minLength="2" maxLength="40" required className="pop-up__name-input pop-up__input" type="text" placeholder="Name" />
        <span id="profile-name-error" className="pop-up__error pop-up__error_visible"></span>
        <input id="profile-occupation" name="profile occupation" minLength="2" maxLength="40" required className="pop-up__occupation-input pop-up__input" type="text" placeholder="Occupation" />
        <span id="profile-occupation-error" className="pop-up__error pop-up__error_visible"></span>
      </PopupWithForm>

      <PopupWithForm heading="New Place" buttonText="Submit" popupType="" isOpen={isAddOpen}
        onClose={() => {
          setIsAddOpen(false)
          setIsOverlayOn(false)
        }
      }>
        <input id="image-title" name="image title" minLength="1" maxLength="30" required className="pop-up__title-input pop-up__input" type="text" placeholder="Title" />
        <span id="image-title-error" className="pop-up__error pop-up__error_visible"></span>
        <input id="image-url" name="image url" type="url" required className="pop-up__url-input pop-up__input" placeholder="Image URL" />
        <span id="image-url-error" className="pop-up__error pop-up__error_visible"></span>
      </PopupWithForm>

      <PopupWithForm heading="Change Profile Picture" buttonText="Save" popupType="_type_avatar" isOpen={isAvatarOpen} height={300}
        onClose={() => {
          setIsAvatarOpen(false)
          setIsOverlayOn(false)
        }
      }>
        <input id="avatar-url" name="avatar url" type="url" required className="pop-up__url-input pop-up__avatar-input pop-up__input" placeholder="Avatar URL" />
        <span id="avatar-url-error" className="pop-up__error pop-up__error_visible"></span>
      </PopupWithForm>
      <PopupWithForm heading="Are You Sure?" buttonText="Yes" popupType="_type_delete"
      />
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
