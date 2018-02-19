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

export const TrTd = ({title, value}) => (
    <tr>
        <td>
            {
                title
            }
        </td>
        <td>
            {
                value
            }
        </td>
    </tr>
);