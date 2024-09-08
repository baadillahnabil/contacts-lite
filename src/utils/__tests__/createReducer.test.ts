import createReducer from '@utils/createReducer';

describe('createReducer Util', () => {
  const initialState = { count: 0 };

  const incrementAction = { type: 'INCREMENT', payload: 1 };
  const unknownAction = { type: 'UNKNOWN' };

  const fnMap = {
    INCREMENT: (draft: typeof initialState, action: any) => {
      draft.count += action.payload;
    },
  };

  it('Given a valid action, When the reducer is called, Then it should update the state correctly', () => {
    const reducer = createReducer(initialState, fnMap);
    const newState = reducer(initialState, incrementAction);
    expect(newState).toEqual({ count: 1 });
  });

  it('Given an unknown action, When the reducer is called, Then it should return the initial state', () => {
    const reducer = createReducer(initialState, fnMap);
    const newState = reducer(initialState, unknownAction);
    expect(newState).toEqual(initialState);
  });

  it('Given a valid action, When the reducer is called, Then it should not mutate the original state', () => {
    const reducer = createReducer(initialState, fnMap);
    const newState = reducer(initialState, incrementAction);
    expect(newState).not.toBe(initialState); // Ensure immutability
  });
});
