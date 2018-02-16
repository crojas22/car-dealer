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
                <InnerComponent {...this.props} {...this.state} clickHandle={() => this.setState({active: !this.state.active})} />
            )
        }

    }
};

export default OnOff;