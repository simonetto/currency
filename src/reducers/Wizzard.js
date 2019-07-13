import { NEXT_STEP } from "../constants/ActionTypes";

const initialState = {
    steps: [
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
    ]
};

function wizzard(state = initialState, action) {
    if (action.type === NEXT_STEP) {
        console.log('TODO: code to select the next item of the wizard')
    }
    return state;
}

export default wizzard;
