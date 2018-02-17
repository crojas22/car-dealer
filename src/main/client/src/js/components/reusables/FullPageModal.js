import React from 'react';
import OnOff from "../../hoc/OnOff";

const FullPageModal = ({active, InnerComponent, TriggerComponent, clickOut, clickIn, info, id}) => {
    return(
        <div>
            <TriggerComponent click={clickIn}/>
            {
                active ?
                    <div className="modal" onClick={clickOut}>
                        <div className="content">
                            <InnerComponent info={info} id={id}/>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
};

export default OnOff(FullPageModal);