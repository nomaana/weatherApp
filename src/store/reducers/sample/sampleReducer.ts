import {Action} from '../../actions/sample/sampleAction';
export interface SampleState {
  firstName: string;
  cities: Array<any>;
  setCities: Array<any>;
}

const initialState: SampleState = {
  firstName: 'London',
  cities: [],
  setCities: [],
};
const sample = (
  state: SampleState = initialState,
  action: Action,
): SampleState => {
  switch (action.type) {
    case 'SET_FIRSTNAME':
      return {...state, firstName: action.firstName};
  }
  return state;
};
export default sample;
