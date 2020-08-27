import React from 'react';

function Card(props) {
  return (
    <>
      <li className="element__card">
        <div onClick={props.onCardImageClick} className="element__image" style={{backgroundImage:`url(${props.image})`}}>
          <button className="element__trash" type="button" name="trash"></button>
        </div>
        <div className="element__caption">
          <h2 className="element__title">{props.title}</h2>
          <button className="element__heart element__heart_empty" type="button" name="like">
            <p className="element__likes">{props.likecount}</p>
          </button>
        </div>
      </li>
    </>
  )
}

export default Card;
