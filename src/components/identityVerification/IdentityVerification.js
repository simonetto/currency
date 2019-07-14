import React from 'react';
import IdentityHeader from './identityHeader';
import IdentityContent from './identityContent';
import IdentityFooter from './identityFooter';
import './IdentityVerification.scss';

/**
Actual content of the modal
**/
class IdentityVerification extends React.Component {
    render() {
        return (
            <div className="Identity-verification">
                <IdentityHeader />
                <IdentityContent />
                <IdentityFooter onClose={this.props.onClose} />
            </div>);
    }
};

export default IdentityVerification;
