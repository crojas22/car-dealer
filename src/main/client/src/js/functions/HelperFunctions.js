import React from 'react';

export const renderElements = (times, element, classes) => {
    let array = [],
        i = 0;
    for (i; i < times; i++) {
        array.push(
            <div key={i} className={classes}>
                {
                    element
                }
            </div>
        )
    }
    return array
};