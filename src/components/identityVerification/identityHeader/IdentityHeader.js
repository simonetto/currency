import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import './IdentityHeader.scss';

class IdentityHeader extends React.Component {
    render() {
        return (
            <div className="Identity-header">
                <div className="identity-title">
                    <FontAwesomeIcon icon={faLock} />
                    <span>Identity verification required</span>
                </div>
                <div className="content">
                    <p>For your security, we occasionally require you to verify
                    your identity by entering a code sent to your mobile device.</p>
                </div>
            </div>);
    }
};

export default IdentityHeader;
