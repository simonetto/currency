import React from 'react';
import { connect } from "react-redux";
import StepContent from '../stepContent';
import WizardButton from './wizardButton';
import './WizardMenu.scss';

const mapStateToProps = state => {
    return { steps: state.wizzard.steps };
};

class ConnectedWizardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {steps: this.props.steps};
    }

    getStepContent() {
        if (this.state.steps[0].selected) {
            return <StepContent />;
        }
        return null;
    }

    render() {
        const steps = this.state.steps.map((step, index) => <WizardButton key={index}
        numberOfSteps={this.state.steps.length}
        stepNumber={index + 1}
        stepName={step.label}
        selected={step.selected}/>);
        return (
            <div className="Wizard-menu">
            <div className="wizard-buttons">
            {steps}
            </div>
            {this.getStepContent()}
            </div>
        );
    }
}

const WizardMenu = connect(mapStateToProps)(ConnectedWizardMenu);

export default WizardMenu;
