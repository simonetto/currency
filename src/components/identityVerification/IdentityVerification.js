import React from 'react';
import IdentityHeader from './identityHeader';
import IdentityContent from './identityContent';
import IdentityFooter from './identityFooter';
import './IdentityVerification.css';

class IdentityVerification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {disableVerification : true};
    }

    onVerificationChange(disableVerification) {
        this.setState({disableVerification : disableVerification});
    }

    render() {
        return (
            <div className="Identity-verification">
                <IdentityHeader />
                <IdentityContent onVerificationChange={this.onVerificationChange.bind(this)}/>
                <IdentityFooter onClose={this.props.onClose} disableVerification={this.state.disableVerification} />
            </div>);
    }
};

export default IdentityVerification;
