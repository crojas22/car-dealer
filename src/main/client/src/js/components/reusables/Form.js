import React from 'react';

export const InputLabel = ({divClass, inputClass, _for, title, type, placeholder, inputRef, value}) => (
    <div className={"form-group " + divClass}>
        <label htmlFor={_for}>
            {title}
        </label>
        <input type={type} className={"form-control rounded-0 bg-light " + inputClass} defaultValue={value}
               name={_for} id={_for} placeholder={placeholder} ref={inputRef} required/>
    </div>
);
InputLabel.defaultProps = {
    type: "text",
    placeholder: ""
};