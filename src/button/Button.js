import React from "react";
import { useState, useRef } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/fontawesome-free-solid";

import "./css/styles.css";

import { ButtonModel }  from "./common";

library.add();

export default function Button({ 
  onClick = (e) => {},
  disabled= false,
  text = "Submit",
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
      case "link color":
        return ButtonModel.LinkColor
      case "link gray":
        return ButtonModel.LinkGray
      case "destructive":
        return ButtonModel.Destructive
      default:
        return ButtonModel.Primary
    }
  }

  const determineSize = (model) => {
    console.log(model)
    switch (size) {
      case "small":
      case "sm":
        return model.size.Small
      case "medium":
      case "md":
        return model.size.Medium
      case "large":
      case "lg":
        return model.size.Large
      case "extra large":
      case "xl":
        return model.size.ExtraLarge
      default:
        return model.size.Medium
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
      {leadingIcon && <i className="easy-button-leading-icon">{leadingIcon}</i>}
      {text}
      {trailingIcon && <i className="easy-button-trailing-icon">{trailingIcon}</i>}
    </button>
  );
}