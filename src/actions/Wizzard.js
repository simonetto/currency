import { NEXT_STEP } from '../constants/ActionTypes';

export function nextStep(payload) {
  return { type: NEXT_STEP, payload };
}
