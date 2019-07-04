import React from 'react';
import Utils from '../../utils';
import DetailsRow from './detailsRow';
import './TransactionDetails.css';

class TransactionDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transaction: {
                saved : {
                    value : 66.19,
                    currency : 'gbp'
                },
                send : {
                    legend : 'You send',
                    currency : 'eur',
                    value : 2000,
                    bold : true
                },
                receive : [
                    {
                        legend : 'Rate',
                        value : 0.86022,
                    },
                    {
                        legend : 'Fee',
                        value : 2.5,
                        currency : 'gbp'
                    },
                    {
                        legend : 'Delivery date',
                        value : '25th November'
                    },
                    {
                        legend : 'Recipient gets',
                        value : 1717.94,
                        currency : 'gbp',
                        bold : true
                    }
                ]
            }
        };
    }

    getSavedAmount() {
        return `${Utils.getCurrencySymbol(this.state.transaction.saved.currency)}${Utils.getTwoDecimals(this.state.transaction.saved.value)}`;
    }

    render() {
        const receiveDetails = this.state.transaction.receive.map((detail, index) => <DetailsRow detail={detail} key={index} isFirst={index===0} />);
        return (
            <div className="Transaction-details">
                <div className="title transaction-detail">
                    <span>Sending Details</span>
                </div>
                <DetailsRow detail={this.state.transaction.send} isFirst={true} />
                <div className="title border-top transaction-detail">
                    <span>Receiving Details</span>
                    <div className="link">
                        <a href="none;">As of right now</a>
                        <div className="question-mark">?</div>
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

export default TransactionDetails;
