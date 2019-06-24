import React from 'react';
import StepContent from '../stepContent';
import WizardButton from './wizardButton';
import './WizardMenu.css';

class WizardMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {steps: [
      {
        label : 'Transaction info',
        selected : true
      },
      {
        label : 'Recipient info',
        selected : false
      },
      {
        label : 'Make payment',
        selected : false
      }
    ]};
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
        <StepContent />
      </div>
    );
  }
}

export default WizardMenu;
