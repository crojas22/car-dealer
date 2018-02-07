import React from 'react'

export const Colmd = props => (
    <div className="col-md">
        <div className="icon-info">
            {
                props.children
            }
        </div>
    </div>
);

export const TrTd = props => (
    <tr>
        <td>
            {
                props.title
            }
        </td>
        <td>
            {
                props.value
            }
        </td>
    </tr>
);