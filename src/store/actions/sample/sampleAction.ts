// Action Definition
export interface SetFirstName {
  type: 'SET_FIRSTNAME';
  firstName: string | any;
}

// Union Action Types
export type Action = SetFirstName;

// Action Creators

export const setFirstName = (firstName: string | any): SetFirstName => {
  return {type: 'SET_FIRSTNAME', firstName};
};
