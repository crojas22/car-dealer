import React from 'react';
import OnOff from "../../hoc/OnOff";

const FullPageModal = props => {
    return(
        <div>
            <props.TriggerComponent click={props.clickIn} carInfo={props.carInfo} setData={props.setData} compare={props.compare}/>
            {
                props.active ?
                    <div className="modal" onClick={props.clickOut}>
                        <div className="content">
                            <props.InnerComponent info={props.info} id={props.carInfo.id}/>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
};

export default OnOff(FullPageModal);