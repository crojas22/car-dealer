import React from "react";

const Alert = props => (
    props.show ?
        <div className={"alert rounded-0 alert-" + (props.classes)}>
            <span>
                {
                    props.message
                }
            </span>
            <button type="button" className="close" onClick={props.clickHandle}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        :
        null
);

export default Alert;