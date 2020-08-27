import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'

function App() {
  const [isEditOpen, setIsEditOpen] = React.useState(false)
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false)
  const [isAddOpen, setIsAddOpen] = React.useState(false)

  return (
    <>
      <div className="page">
        <div className="overlay">
          <Header />
          <Main
            onEditAvatar={() => {
              setIsAvatarOpen(true)
            }}
            onEditProfile={() => {
              setIsEditOpen(true)
            }}
            onAddCard={() => {
               setIsAddOpen(true)
            }}
          />
          <Footer />
        </div>

        <PopupWithForm formName="editForm" isOpen={isEditOpen} onClose={
          () => {setIsEditOpen(false)}
        } />

        <PopupWithForm formName="addForm" isOpen={isAddOpen} onClose={
          () => {setIsAddOpen(false)}
        } />

        <PopupWithForm formName="avatarForm" isOpen={isAvatarOpen} onClose={
          () => {setIsAvatarOpen(false)}
        }/>

        <PopupWithForm formName="deleteForm" />
      </div>
      <ImagePopup />
    </>
  );
}

export default App;
