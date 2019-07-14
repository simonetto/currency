import React from 'react';
import { connect } from "react-redux";
import Utils from '../../utils';
import DetailsRow from './detailsRow';
import { getData } from "../../actions/Transaction";
import './TransactionDetails.scss';

const mapStateToProps = state => {
    return { transaction: state.details.transaction };
};

/**
Content of the right column
Properties:
    transaction: object from the back end representing a transaction
**/
class ConnectedTransactionDetails extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    getSavedAmount() {
        if (this.props.transaction.saved.value === undefined) {
            return '';
        }
        return `${Utils.getCurrencySymbol(this.props.transaction.saved.currency)}${Utils.getTwoDecimals(this.props.transaction.saved.value)}`;
    }

    render() {
        const receiveDetails = this.props.transaction.receiveDetails.map((detail, index) =>
                                <DetailsRow detail={detail} key={index} isFirst={index===0} />);
        return (
            <div className="Transaction-details">
                <div className="title transaction-detail">
                    <span>Sending Details</span>
                </div>
                <DetailsRow detail={this.props.transaction.send} isFirst={true} />
                <div className="title border-top transaction-detail">
                    <span>Receiving Details</span>
                    <div className="link">
                        <a href="none;">As of right now <div className="question-mark">?</div></a>
                    </div>
                </div>
                {receiveDetails}
                <div className="border-top bottom transaction-detail">
                    <span>You save {this.getSavedAmount()} compared to your bank!</span>
                </div>
            </div>
        );
    }
}

const TransactionDetails = connect(mapStateToProps, { getData })(ConnectedTransactionDetails);

export default TransactionDetails;
