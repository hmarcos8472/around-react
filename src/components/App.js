import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import PopupWithFormClass from './PopupWithForm.js'

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
          <template id="place">
            <li className="element__card">
              <div className="element__image">
                <button className="element__trash" type="button" name="trash"></button>
              </div>
              <div className="element__caption">
                <h2 className="element__title"></h2>
                <button className="element__heart" type="button" name="like">
                  <p className="element__likes"></p>
                </button>
              </div>
            </li>
          </template>
          <div className="element__pop-up-container">
            <div className="element__pop-up" >
              <button type="button" name="Save" className="pop-up__close pop-up__close_image"></button>
            </div>
            <p className="element__tag"></p>
          </div>
        </>
  );
}

export default App;
