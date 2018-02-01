import React from 'react';

const Form = props => {
    const renderInput = () => {
        let array = [],
            keys = Object.keys(props),
            i = 0;

        for (i; i < props.input; i++) {
            array.push(
                <input key={i} ref={props[keys[i]]} type="text" required/>
            )
        }
        return array;
    };

    return(
        <form>
            {
                renderInput()
            }
        </form>
    )
};

export default Form;
