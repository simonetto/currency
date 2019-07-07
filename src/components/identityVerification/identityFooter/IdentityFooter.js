import React from 'react';
import Button from '../../button';
import './IdentityFooter.scss';

class IdentityFooter extends React.Component {
    render() {
        return (
            <div className="Identity-footer">
                <div>
                    <Button label="Verify Identity" type="ok" handler={this.handleVerification} disabled={this.props.disableVerification}/>
                    <Button label="Back" type="cancel" handler={this.props.onClose} />
                </div>
                <a href="void(0)">I can't access this mobile device</a>
            </div>);
    }
};

export default IdentityFooter;
