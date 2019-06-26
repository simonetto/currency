import React from 'react';
import lock from '../../../assets/images/lock.png';
import './IdentityHeader.css';

class IdentityHeader extends React.Component {
    render() {
        return (
            <div className="Identity-header">
                <div className="title">
                    <img src={lock} className="identity-lock" alt="lock" />
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
