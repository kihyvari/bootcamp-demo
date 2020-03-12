//fruitit stationeiksi!

import React from "react";
// import PropTypes from "prop-types" (toivottavasti mikään ei hajoa!)
import "./Station.css";

export default function Station(props) {
  return (
    <div className={`station ${props.type}`}>
       {props.children}
    </div>
  );
}

/*
Station.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onDelete: PropTypes.func
}
*/
