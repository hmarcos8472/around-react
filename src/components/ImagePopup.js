import React from 'react';

function ImagePopup(props) {
  return (
    <>
      <div className={props.isOpen ? "element__pop-up-container element__pop-up-container_display": "element__pop-up-container"}>
        <div className="element__pop-up" style={{backgroundImage:props.image}} >
          <button onClick={props.onClose} type="button" name="close" className="pop-up__close pop-up__close_image"></button>
        </div>
        <p className="element__tag">{props.title}</p>
      </div>
    </>
  )
}

export default ImagePopup;
