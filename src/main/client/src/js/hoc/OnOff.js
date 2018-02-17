import React from 'react';

const OnOff = (InnerComponent) => {
    return class OuterComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                active: false
            };
        }

        render() {
            return(
                <InnerComponent {...this.props} {...this.state} clickHandle={() => this.setState({active: !this.state.active})}
                                clickOut={e => e.target === document.querySelector(".modal") ? this.setState({active:false}) : null}
                                clickIn={() => this.setState({active: true})}/>
            )
        }

    }
};

export default OnOff;