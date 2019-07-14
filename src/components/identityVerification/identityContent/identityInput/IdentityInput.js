import React from 'react';
import './IdentityInput.scss';

/**
Verification inputs
Properties:
    index: the order of the box
    onInput: call back on input
    onFocus: call back on focus
    isFocused: whether is focused or note
    value: the value of the input
**/
class IdentityInput extends React.Component {
    onChangeHandler(e) {
        const value = e.target.value;

        if (/^$|\b[0-9]\b/.test(value)) {
            this.props.onInput(value);
        }
    }

    onFocusHandler() {
        this.props.onFocus(this.props.index);
    }

    render() {
        return (
            <input className="Identity-input" type="text" ref={input => {
                if (input) {
                    if (this.props.isFocused) {
                        input.focus();
                    } else {
                        input.blur();
                    }
                }
            }} value={this.props.value}
            onFocus={this.onFocusHandler.bind(this)}
            onChange={this.onChangeHandler.bind(this)} />
        );
    }
};

export default IdentityInput;
