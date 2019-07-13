import React from 'react';
import { connect } from "react-redux";
import { verifyNumber } from "../../../actions/Identification";
import Button from '../../button';
import './IdentityFooter.scss';

function mapDispatchToProps(dispatch) {
    return {
        verifyNumber: number => dispatch(verifyNumber(number))
    };
}

const mapStateToProps = state => {
    return { verificationNumber: state.identification.verificationNumber };
};

class ConnectedIdentityFooter extends React.Component {
    disableVerification() {
        return this.props.verificationNumber.indexOf('') >= 0;
    }

    handleVerification() {
        let number = '';

        this.props.verificationNumber.forEach(current => {
            number = number + current;
        });
        
        this.props.verifyNumber(parseInt(number));
    }

    render() {
        return (
            <div className="Identity-footer">
                <div>
                    <Button label="Verify Identity" type="ok" handler={this.handleVerification.bind(this)} disabled={this.disableVerification()}/>
                    <Button label="Back" type="cancel" handler={this.props.onClose} />
                </div>
                <a href="void(0)">I can't access this mobile device</a>
            </div>);
    }
};

const IdentityFooter = connect(mapStateToProps, mapDispatchToProps)(ConnectedIdentityFooter);

export default IdentityFooter;
