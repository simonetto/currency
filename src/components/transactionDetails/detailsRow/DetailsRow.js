import React from 'react';
import Utils from '../../../utils';
import './DetailsRow.scss';

class DetailsRow extends React.Component {
    getValue() {
        const detail = this.props.detail;

        if (detail.currency) {
            return `${Utils.getCurrencySymbol(detail.currency)}${Utils.getTwoDecimals(detail.value)}`;
        }

        return detail.value;
    }

    render() {
        const isBoldText = this.props.detail.isTotal ? 'bold-text' : '';
        const firstRow = this.props.isFirst ? 'first-row' : '';
        const classes = `Details-row transaction-detail ${firstRow}`;
        const boldText = `bigger-text ${isBoldText}`;

        return (<div className={classes}>
            <span>{this.props.detail.legend}</span>
            <span className={boldText}>{this.getValue()}</span>
        </div>);
    }
};

export default DetailsRow;
