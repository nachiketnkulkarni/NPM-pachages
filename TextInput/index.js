import React from "react";
import "./TextInput.css";

export default function TextInput({
  className,
  placeholder,
  label = "Text",
  ...rest
}) {
  return (
    <>
      <div className='input__group field'>
        <input className='input__field' placeholder={label} {...rest} />
        <label htmlFor='name' className='input__label'>
          {label}
        </label>
      </div>
    </>
  );
}
