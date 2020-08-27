import React from 'react';

function ImagePopup(props) {
  return (
    <>
      <div className="element__pop-up-container">
        <div className="element__pop-up" >
          <button type="button" name="close" className="pop-up__close pop-up__close_image"></button>
        </div>
        <p className="element__tag"></p>
      </div>
    </>
  )
}

export default ImagePopup;
