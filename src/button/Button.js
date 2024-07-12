import React from "react";
import { useState, useRef } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./css/styles.css";

import { ButtonModel }  from "./common";

library.add();

export default function Button({ 
  onClick = (e) => {},
  disabled= false,
  text = "",
  type = "button",
  size = "md",
  style = 'primary',
  trailingIcon = null,
  leadingIcon = null,
}) {

  const buttonRef = useRef(null)
  const [currentModelState, setCurrentModelState] = useState('normal');

  const determineModel = () => {
    style = style.toLowerCase();
    switch (style) {
      case "primary":
        return ButtonModel.Primary
      case "secondary":
        return ButtonModel.Secondary
      case "tertiary":
        return ButtonModel.Tertiary
      case "link-color":
        return ButtonModel.LinkColor
      case "link-gray":
        return ButtonModel.LinkGray
      case "destructive":
        return ButtonModel.Destructive
      default:
        return ButtonModel.Primary
    }
  }

  const determineSize = (model) => {
    switch (size) {
      case "icon-small":
        return model.size.IconSmall
      case "small":
      case "sm":
        return model.size.Small
      case "medium":
      case "md":
        return model.size.Medium
      case "large":
      case "lg":
        return model.size.Large
      case "extra-large":
      case "xl":
        return model.size.ExtraLarge
      default:
        return model.size.Medium
    }
  }

  const determineIcon = (icon) => {
    switch(icon) {
      case "star":
        return faStar
      default:
        return null;
    }
  }

  const _MasterOnClick = (e) => {
    if (disabled) return;
    //TODO: Add focus to this when onclick
    onClick(e);
  }

  const model = determineModel();
  const sanatizedSize = determineSize(model);
  const combinedStyles = { ...model[currentModelState], ...sanatizedSize };
  trailingIcon = determineIcon(trailingIcon);
  leadingIcon = determineIcon(leadingIcon);
  //TODO remove this or add it as an option @mcorro
  const iconStyles = {}
  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={_MasterOnClick}
      onMouseOver={ (e) => {
        setCurrentModelState('hover');
      }}
      onMouseOut={ (e) => {
        setCurrentModelState('normal');
      }}
      onFocus={ (e) => {
        setCurrentModelState('focus');
      }}
      disabled={disabled} 
      style={combinedStyles}
      className="easy-button-container"
      >
      {leadingIcon && <i style={iconStyles} className="easy-button-leading-icon"><FontAwesomeIcon icon={leadingIcon}/></i>}
      {text.length > 0 && <span style={{paddingLeft: '5px', paddingRight: '5px'}}>{text}</span>}
      {trailingIcon && <i style={iconStyles} className="easy-button-trailing-icon"><FontAwesomeIcon icon={trailingIcon}/></i>}
    </button>
  );
}