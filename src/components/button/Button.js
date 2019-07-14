import React from 'react';
import './Button.scss';

/**
Parameters:
    disabled: disable button
    label: butons text
    handler: what to do on onClick
    type: (cancel, ok) Displays different styles for the different types
**/
class Button extends React.Component {
    render() {
        const disabled = this.props.disabled ? 'disabled' : '';
        const classes = `Button ${this.props.type} ${disabled}`;
        return (<button className={classes} onClick={this.props.handler} disabled={this.props.disabled}>{this.props.label}</button>);
    }
};

Button.defaultProps = {
    disabled : false,
    type : 'ok'
}

export default Button;
