import React from 'react';
import Utils from '../../../utils';
import './DetailsRow.css';

class DetailsRow extends React.Component {
    getValue() {
        const detail = this.props.detail;

        if (detail.currency) {
            return `${Utils.getCurrencySymbol(detail.currency)}${Utils.getTwoDecimals(detail.value)}`;
        }

        return detail.value;
    }

    render() {
        const boldText = this.props.detail.bold ? 'bold-text' : '';
        const firstRow = this.props.isFirst ? 'first-row' : '';
        const classes = `Details-row transaction-detail ${firstRow}`;

        return (<div className={classes}>
            <span>{this.props.detail.legend}</span>
            <span className={boldText}>{this.getValue()}</span>
        </div>);
    }
};

export default DetailsRow;
