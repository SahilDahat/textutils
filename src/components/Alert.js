import React from "react";

function Alert(props) {

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    //capitalizes the first alphabet of the word!
  }

  return (
    //This is more like if else statement, if the first is null then the rest wont work & vice-versa.
    //This happens because JSX will be converted to Javascript calls.
    <div style={{height: '50px'}}>
    {
    props.alert && (
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole! {capitalize(props.alert.type)}: {props.alert.msg}  </strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
    }
    </div>
  );
  
}

export default Alert;
