import React from "react";

const Form = ({ children, className, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} noValidate className={className || ""}>
      {children}
    </form>
  );
};

export default Form;
